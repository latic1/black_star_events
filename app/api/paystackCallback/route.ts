export async function GET(req: Request) {
    // Extract query parameters from the URL
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get('reference');
    const trxref = searchParams.get('trxref');

    // If there are no headers, error out
    if (!reference || !trxref || reference !== trxref) {
        return new Response('Invalid reference', {
            status: 400,
        });
    }

    try {
        // Initialize the transaction verification with Paystack
        const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (data.status === 'success') {
            // Handle successful verification
            return new Response(JSON.stringify({ message: 'Transaction verified successfully', data: data.data }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(JSON.stringify({ message: 'Transaction verification failed', data: data.data }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        console.error("Error processing order:", error);
        // return { error: error };
    }
}
