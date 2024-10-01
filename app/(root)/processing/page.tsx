"use client";
import { sendMail } from "@/lib/actions/email.actions";
import { createOrder } from "@/lib/actions/order.actions";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const reference = searchParams.get("reference");


  useEffect(() => {
    const verifyTransaction = async () => {
      if (reference) {
        try {
          const response = await fetch(
            `https://api.paystack.co/transaction/verify/${reference}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer sk_test_52e71345d65215548fb96f84cea1ba2ed7e754d3`,
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          console.log(data);

          const { id, amount, metadata } = data.data;

          if (!metadata) {
            throw new Error("Metadata is missing in the response");
          }

          const mailDetails = {
            eventId: metadata?.eventId || "",
            buyerId: metadata?.buyerId || "",
          };

          const order = {
            transactionId: id,
            eventId: metadata?.eventId || "",
            buyerId: metadata?.buyerId || "",
            totalAmount: amount ? (amount / 100).toString() : "0",
            createdAt: new Date(),
          };

          // Execute order creation and email sending in parallel
          await Promise.all([createOrder(order), sendMail(mailDetails)]);

          // Redirect user to profile
          router.push("/profile");
        } catch (error) {
          console.error("Error verifying transaction:", error);
          // Optional: Show user feedback or redirect to error page
        }
      }
    };

    verifyTransaction();
  }, [reference, router]);

  return (
    <div className="h-[80vh] bg-slate-50 flex flex-col items-center justify-center">
      <p className="text-3xl mb-10 font-semibold">Processing Order</p>
      <img src="/progress-indicator.gif" alt="" className="w-80 h-80" />
    </div>
  );
};

export default Page;
