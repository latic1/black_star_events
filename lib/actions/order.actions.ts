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
    // If the event is free, create the order directly
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
      await sendMail(mailDetails)

      return { success: true, message: 'Order created for free event' };
    }

    // Find the buyer by their ID
    const buyer = await User.findById(order.buyerId);

    // Calculate the price
    const price = Number(order.price) * 100; // Convert to cents for Paystack

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
        Authorization: `Bearer ${API_SECRET_KEY}`,
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
