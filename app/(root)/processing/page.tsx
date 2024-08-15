"use client"
import { useEffect } from "react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { reference } = router.query;

  useEffect(() => {
    // Ensure the router is ready before accessing its properties
    if (!router.isReady) return;

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
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log(data); // Handle the response data

          // Additional code to handle the data, like redirecting or displaying a message
          
        } catch (error) {
          console.error('Error verifying transaction:', error);
        }
      }
    };

    verifyTransaction();
  }, [router.isReady, reference]); // Add router.isReady and reference as dependencies

  return <p>Processing...</p>;
};

export default Page;

