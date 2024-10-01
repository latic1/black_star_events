import { EmailDetailParams } from "@/types";
import * as React from "react";

export const EmailTemplate: React.FC<Readonly<EmailDetailParams>> = ({
  buyerName,
  eventTitle,
  eventDate,
  eventLocation,
}) => (
  <div>
    <h1>Congratulations , {buyerName}!</h1>
    <p>
      We are thrilled to confirm your successful registration for {eventTitle}!
    </p>
    <p>Here are the event details for your reference:</p>
    {/* <p>Date: {eventDate}</p> */}
    <p> Venue: {eventLocation}</p>
  </div>
);
