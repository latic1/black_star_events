import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { createOrder } from '@/lib/actions/order.actions';

export async function POST(request: Request) {
  const API_SECRET_KEY = process.env.API_SECRET_KEY!;

  
  const body = await request.text();
  const signature = request.headers.get('x-paystack-signature') as string;

  let event;
  try {
    event = JSON.parse(body);
  } catch (err) {
    return NextResponse.json({ message: 'Invalid JSON payload', error: err });
  }

  function verify(event: any, signature: string): boolean {
    const hmac = crypto.createHmac('sha512', API_SECRET_KEY);
    const expectedSignature = hmac.update(JSON.stringify(event)).digest('hex');
    return expectedSignature === signature;
  }

  if (!verify(event, signature)) {
    return NextResponse.json({ message: 'Invalid signature' }, { status: 400 });
  }

  // Get the event type
  const eventType = event.event;

  // CREATE
  if (eventType === 'charge.success') {    
    const { id, amount, metadata } = event.data;

    const order = {
        transactionId: id,
      eventId: metadata?.eventId || '',
      buyerId: metadata?.buyerId || '',
      totalAmount: amount ? (amount / 100).toString() : '0',
      createdAt: new Date(),
    };

    const newOrder = await createOrder(order);
    
    return NextResponse.json({ message: 'OK', order: newOrder });
  }

  return new Response('', { status: 200 });
}
