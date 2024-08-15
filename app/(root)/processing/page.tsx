"use client";
import { sendMail } from "@/lib/actions/email.actions";
import { createOrder } from "@/lib/actions/order.actions";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const reference = searchParams.get("reference");

  // console.log("reference:::::", reference);

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
          // console.log(data);

          const { id, amount, metadata } = data.data;

          if (!metadata) {
            throw new Error("Metadata is missing in the response");
          }

          // console.log(metadata.eventId);
          // console.log(metadata.buyerId);

          const order = {
            transactionId: id,
            eventId: metadata?.eventId || "",
            buyerId: metadata?.buyerId || "",
            totalAmount: amount ? (amount / 100).toString() : "0",
            createdAt: new Date(),
          };

          const newOrder = await createOrder(order);
          await sendMail("laticlatif2@gmail.com");
          router.push("/profile");
        } catch (error) {
          console.error("Error verifying transaction:", error);
        }
      }
    };

    verifyTransaction();
  }, [reference, router]);

  return (
    <div className="max-h-screen bg-slate-50">
      <p>Processing...</p>
    </div>
  );
};

export default Page;
