import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { from, name, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'jaskaransingh4704@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      reply_to: from,
      text: `Name: ${name}\nEmail: ${from}\nMessage: ${message}`,
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
