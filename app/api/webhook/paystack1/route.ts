import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { createOrder } from '@/lib/actions/order.actions';

export async function POST(request: Request) {
  const API_SECRET_KEY = process.env.API_SECRET_KEY!;

  const body = await request.text();
  const signature = request.headers.get('x-paystack-signature') as string;

  if (!signature) {
    return NextResponse.json({ message: 'Missing signature' }, { status: 400 });
  }

  let event;
  try {
    event = JSON.parse(body);
  } catch (err) {
    return NextResponse.json({ message: 'Invalid JSON payload', error: err });
  }

  const verify = (event: any, signature: string): boolean => {
    const hmac = crypto.createHmac('sha512', API_SECRET_KEY);
    const expectedSignature = hmac.update(JSON.stringify(event)).digest('hex');
    return expectedSignature === signature;
  };

  if (!verify(event, signature)) {
    return NextResponse.json({ message: 'Invalid signature' }, { status: 400 });
  }

  // Send early response to acknowledge the event
  const response = new Response('', { status: 200 });

  // Process the event asynchronously
  (async () => {
    const eventType = event.event;

    if (eventType === 'charge.success') {
      const { id, amount, metadata } = event.data;

      const order = {
        transactionId: id,
        eventId: metadata?.eventId || '',
        buyerId: metadata?.buyerId || '',
        totalAmount: amount ? (amount / 100).toString() : '0',
        createdAt: new Date(),
      };

      try {
        // await sendEmail();
        // const newOrder = await createOrder(order);
        // Log the created order or handle as needed
      } catch (err) {
        console.error('Failed to process event', err);
        // Optionally log the error to an external service
      }
    }
  })();

  return response;
}
