"use server"

import { CheckoutOrderParams } from "@/types"
import User from "@/lib/database/models/user.model";

export const checkoutOrder = async (order: CheckoutOrderParams) => {
    try {


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
                custom_fields: [
                    {
                        display_name: buyer.username,
                        variable_name: "customer_name",
                        value: buyer.username // Use the actual username instead of a hardcoded value
                    }
                ]
            }
        };

        // Initialize the transaction with Paystack
        const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                Authorization: `Bearer pk_test_85ae40ccfe9eb873828dd0aa1a5d084268ea48f0`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transactionDetails)
        });

        // Handle the response
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            // Return the authorization_url to the client
            if (data.status) {
                return { authorization_url: data.data.authorization_url };
            } else {
                console.error('Transaction initialization failed:', data.message);
                return { error: data.message };
            }
        } else {
            console.error('Transaction initialization failed:', response.statusText);
            return { error: response.statusText };
        }
    } catch (error) {
        console.error('Error processing order:', error);
        return { error: error };
    }
};
