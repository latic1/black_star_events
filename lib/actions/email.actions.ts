"use server";

export const sendMail = async (email: string) => {
  try {
    // Prepare email details
    const emailDetails = {
      email: email,
    };

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
