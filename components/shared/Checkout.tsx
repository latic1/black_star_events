"use client";
// import React, { useEffect } from "react";
import { IEvent } from "@/lib/database/models/event.model";
import { Button } from "../ui/button";
import { checkoutOrder } from "@/lib/actions/order.actions";
import { FormEvent } from "react";

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  const onCheckout = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId,
    };

    checkoutOrder(order).then((result)=>{
      if (result.authorization_url) {
        window.location.href = result.authorization_url;
      } else {
        console.error("Checkout failed:", result.error);
      }
    }).catch((error)=>{console.error("something went wrong")})
  };

  return (
    <form onSubmit={onCheckout}>
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? "Get Ticket" : "Buy Ticket"}
      </Button>
    </form>
  );
};

export default Checkout;
