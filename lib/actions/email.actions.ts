"use server";

import { CreateMailParams } from "@/types";
import User from "../database/models/user.model";
import Event from "../database/models/event.model";

export const sendMail = async (email: CreateMailParams) => {
  try {

    const buyer = await User.findById(email.buyerId)
    const event = await Event.findById(email.eventId)

    const name = `${buyer.firstName || ""} ${buyer.lastName || ""}`;

    const emailDetails = {
      buyerName: name.trim(),
      buyerEmail:buyer.email,
      eventTitle: event.title,
      eventLocation: event.location,
      eventDate: event.startDateTime
    }
    console.log(emailDetails);



    // Send Email
    const response = await fetch("https://blackstar-events.vercel.app/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailDetails),
    });

    if (!response.ok) {
      throw new Error(`Failed to send email: ${response.statusText}`);
    }

    return await response.json(); // Assuming the response returns JSON

  } catch (error) {
    console.error("Error sending email:", error);
    // return { error: error.message };
  }
};
