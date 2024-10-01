import { EmailTemplate } from '@/components/shared/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
export async function POST(request: Request) {


    const body = await request.text();
    const ticketDetail = JSON.parse(body);

    console.log("tickets: ", ticketDetail);


    try {
        const { data, error } = await resend.emails.send({
            from: 'Black Star Events <Events@latic.online>',
            to: ticketDetail.buyerEmail,
            subject: 'Hello world',
            react: EmailTemplate(ticketDetail),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
