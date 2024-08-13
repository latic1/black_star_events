import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        // Extract reference from the URL search params
        const url = new URL(request.url);
        const reference = url.searchParams.get('reference');

        // Check if reference is provided
        if (!reference) {
            console.error("No reference provided.");
            return new NextResponse("Reference is required.", { status: 400 });
        }

        console.log("code: ",reference);
        
        // Initialize the transaction verification with Paystack
        const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            method: 'GET',
            headers: {
                Authorization: `Authorization: Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
        });


        // Check if the response is ok
        if (!response.ok) {
            console.error(`Error fetching transaction: ${response.statusText}`);
            return new NextResponse("Error fetching transaction.", { status: response.status });
        }

        // Parse the response data
        const data = await response.json();
        console.log(data);

        // Return the data as a JSON response
        return new NextResponse(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        console.error("Error processing order:", error);
        return new NextResponse("Error processing order.", { status: 500 });
    }
}



// export async function GET(req: Request) {
//     // Extract query parameters from the URL
//     const { searchParams } = new URL(req.url);
//     const reference = searchParams.get('reference');
//     const trxref = searchParams.get('trxref');

//     // If there are no headers, error out
//     if (!reference || !trxref || reference !== trxref) {
//         return new Response('Invalid reference', {
//             status: 400,
//         });
//     }

//     try {
//         // Initialize the transaction verification with Paystack
//         const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
//             method: 'GET',
//             headers: {
//                 Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
//                 'Content-Type': 'application/json',
//             },
//         });

//         const data = await response.json();

//         if (data.status === 'success') {
//             // Handle successful verification
//             return new Response(JSON.stringify({ message: 'Transaction verified successfully', data: data.data }), {
//                 status: 200,
//                 headers: { 'Content-Type': 'application/json' },
//             });
//         } else {
//             return new Response(JSON.stringify({ message: 'Transaction verification failed', data: data.data }), {
//                 status: 400,
//                 headers: { 'Content-Type': 'application/json' },
//             });
//         }
//     } catch (error) {
//         console.error("Error processing order:", error);
//         // return { error: error };
//     }
// }
