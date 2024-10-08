"use server"

// import Stripe from 'stripe';
import { CheckoutOrderParams, CreateOrderParams, GetOrdersByEventParams, GetOrdersByUserParams, CheckoutOrderResult } from "@/types"
import { redirect } from 'next/navigation';
import { handleError } from '../utils';
import { connectToDatabase } from '../database';
import Order from '../database/models/order.model';
import Event from '../database/models/event.model';
import { ObjectId } from 'mongodb';
import User from '../database/models/user.model';
import { sendMail } from "./email.actions";

const API_SECRET_KEY = process.env.PAYSTACK_PUBLIC_TEST_KEY;


export const checkoutOrder = async (order: CheckoutOrderParams): Promise<CheckoutOrderResult> => {
  try {

    if (order.isFree) {

      const mailDetails = {
        buyerId: order.buyerId,
        eventId: order.eventId,
      };
      await createOrder({
        transactionId: Math.floor(Math.random() * 1e10).toString().padStart(10, '0'),
        buyerId: order.buyerId,
        eventId: order.eventId,
        totalAmount: "0",
        createdAt: new Date(),
      });
      sendMail(mailDetails)
      return { success: true, message: 'Order created for free event' };
    }

    // Find the buyer by their ID
    const buyer = await User.findById(order.buyerId);

    // Calculate the price
    const price = order.isFree ? 0 : Number(order.price) * 100;

    // Prepare transaction details
    const transactionDetails = {
      email: buyer.email,
      amount: price,
      currency: "GHS",
      metadata: {
        eventId: order.eventId,
        buyerId: order.buyerId,
      },
    };

    // Initialize the transaction with Paystack
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer sk_test_52e71345d65215548fb96f84cea1ba2ed7e754d3`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionDetails),
    });

    // Handle the response
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      // Return the authorization_url to the client
      if (data.status) {
        return { authorization_url: data.data.authorization_url };
      } else {
        console.error("Transaction initialization failed:", data.message);
        return { error: data.message };
      }
    } else {
      console.error("Transaction initialization failed:", response.statusText);
      return { error: response.statusText };
    }
  } catch (error) {
    console.error("Error processing order:", error);
    return { error: error };
  }
};


export const createOrder = async (order: CreateOrderParams) => {
  try {
    await connectToDatabase();

    const newOrder = await Order.create({
      ...order,
      event: order.eventId,
      buyer: order.buyerId,
    });

    return JSON.parse(JSON.stringify(newOrder));
  } catch (error) {
    handleError(error);
    return { success: false, message: 'Failed to create order', error };
  }
};


// GET ORDERS BY EVENT
export async function getOrdersByEvent({ searchString, eventId }: GetOrdersByEventParams) {
  try {
    await connectToDatabase()

    if (!eventId) throw new Error('Event ID is required')
    const eventObjectId = new ObjectId(eventId)

    const orders = await Order.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'buyer',
          foreignField: '_id',
          as: 'buyer',
        },
      },
      {
        $unwind: '$buyer',
      },
      {
        $lookup: {
          from: 'events',
          localField: 'event',
          foreignField: '_id',
          as: 'event',
        },
      },
      {
        $unwind: '$event',
      },
      {
        $project: {
          _id: 1,
          totalAmount: 1,
          createdAt: 1,
          eventTitle: '$event.title',
          eventId: '$event._id',
          buyer: {
            $concat: ['$buyer.firstName', ' ', '$buyer.lastName'],
          },
        },
      },
      {
        $match: {
          $and: [{ eventId: eventObjectId }, { buyer: { $regex: RegExp(searchString, 'i') } }],
        },
      },
    ])

    return JSON.parse(JSON.stringify(orders))
  } catch (error) {
    handleError(error)
  }
}

// GET ORDERS BY USER
export async function getOrdersByUser({ userId, limit = 3, page }: GetOrdersByUserParams) {
  try {
    await connectToDatabase()

    const skipAmount = (Number(page) - 1) * limit
    const conditions = { buyer: userId }

    const orders = await Order.distinct('event._id')
      .find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)
      .populate({
        path: 'event',
        model: Event,
        populate: {
          path: 'organizer',
          model: User,
          select: '_id firstName lastName',
        },
      })

    const ordersCount = await Order.distinct('event._id').countDocuments(conditions)

    return { data: JSON.parse(JSON.stringify(orders)), totalPages: Math.ceil(ordersCount / limit) }
  } catch (error) {
    handleError(error)
  }
}
