// pages/auth/callback.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    const verifyTransaction = async () => {
      if (code) {
        try {
          const response = await fetch(
            `https://api.paystack.co/transaction/verify/${code}`,
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

        } catch (error) {
          console.error('Error verifying transaction:', error);
        }
      }
    };

    verifyTransaction();
  }, [code]);

  return <p>Processing...</p>;
};

export default Page;
