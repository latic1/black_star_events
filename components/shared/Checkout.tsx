import React, { useEffect } from 'react'
// import { loadStripe } from '@stripe/stripe-js';

import { IEvent } from '@/lib/database/models/event.model';
import { Button } from '../ui/button';
import { checkoutOrder } from '@/lib/actions/order.actions';

// loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = ({ event, userId }: { event: IEvent, userId: string }) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  const onCheckout = async () => {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId
    }

    await checkoutOrder(order);
  }

  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? 'Get Ticket' : 'Buy Ticket'}
      </Button>
    </form>
  )
}

export default Checkout





// import axios from 'axios';

// const API_SECRET_KEY = 'yoursecretkey';//Test Secret Key for Test mode on

// const transactionDetails = {
//   email: 'customer@email.com',
//   amount: 10000,
//   metadata: {
//     custom_fields: [
//       {
//         display_name: "Customer's name",
//         variable_name: "customer_name",
//         value: "John Doe"
//       }
//     ]
//   }
// };

// axios.post('https://api.paystack.co/transaction/initialize', transactionDetails, {
//   headers: {
//     Authorization: `Bearer ${API_SECRET_KEY}`
//   }
// })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });