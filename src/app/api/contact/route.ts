import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Beautiful HTML template for auto-reply to sender
const getAutoReplyTemplate = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you for contacting Jaskaran Singh</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .container {
            background-color: #ffffff;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: 1px solid #e9ecef;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #3b82f6;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #3b82f6;
            margin-bottom: 10px;
        }
        .subtitle {
            color: #6b7280;
            font-size: 16px;
        }
        .content {
            margin-bottom: 30px;
        }
        .greeting {
            font-size: 20px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 15px;
        }
        .message {
            color: #4b5563;
            margin-bottom: 20px;
            font-size: 16px;
        }
        .highlight {
            background-color: #eff6ff;
            border-left: 4px solid #3b82f6;
            padding: 15px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }
        .contact-info {
            background-color: #f9fafb;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        .contact-icon {
            width: 20px;
            margin-right: 10px;
            color: #3b82f6;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 14px;
        }
        .social-links {
            margin-top: 15px;
        }
        .social-link {
            display: inline-block;
            margin: 0 10px;
            color: #3b82f6;
            text-decoration: none;
        }
        .social-link:hover {
            text-decoration: underline;
        }
        @media (max-width: 600px) {
            body {
                padding: 10px;
            }
            .container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Jaskaran Singh</div>
            <div class="subtitle">Full Stack Developer</div>
        </div>
        
        <div class="content">
            <div class="greeting">Hello ${name},</div>
            
            <div class="message">
                Thank you for reaching out to me through my portfolio website. I've received your message and appreciate you taking the time to contact me.
            </div>
            
            <div class="highlight">
                <strong>I'll get back to you within 24-48 hours</strong> with a detailed response to your inquiry. I'm currently reviewing your message and will provide you with the most relevant information and solutions.
            </div>
            
            <div class="message">
                In the meantime, feel free to explore my portfolio to learn more about my work, skills, and projects. If you have any urgent matters, you can also reach me directly through the contact information below.
            </div>
        </div>
        
        <div class="contact-info">
            <h3 style="margin-top: 0; color: #1f2937;">Quick Contact Information:</h3>
            <div class="contact-item">
                <span class="contact-icon">📧</span>
                <span><strong>Email:</strong> contact@jaskaran.in</span>
            </div>
            <div class="contact-item">
                <span class="contact-icon">🌐</span>
                <span><strong>Website:</strong> <a href="https://jaskaran.in" style="color: #3b82f6;">jaskaran.in</a></span>
            </div>
            <div class="contact-item">
                <span class="contact-icon">📍</span>
                <span><strong>Location:</strong> Amritsar, India</span>
            </div>
        </div>
        
        <div class="footer">
            <p>Best regards,<br><strong>Jaskaran Singh</strong></p>
            <p>Full Stack Developer & Mobile App Developer</p>
            
            <div class="social-links">
                <a href="https://github.com/jaskaran-online" class="social-link">GitHub</a>
                <a href="https://x.com/jaskaran_5ingh" class="social-link">Twitter</a>
                <a href="https://www.figma.com/@jaskaran4704" class="social-link">Figma</a>
            </div>
            
            <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
                This is an automated response. Please do not reply to this email.
            </p>
        </div>
    </div>
</body>
</html>
`;

// HTML template for notification email to admin
const getAdminNotificationTemplate = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .container {
            background-color: #ffffff;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: 1px solid #e9ecef;
        }
        .header {
            background-color: #3b82f6;
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 25px;
            text-align: center;
        }
        .field {
            margin-bottom: 15px;
            padding: 15px;
            background-color: #f9fafb;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
        }
        .field-label {
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 5px;
        }
        .field-value {
            color: #4b5563;
        }
        .message-content {
            white-space: pre-wrap;
            background-color: #f3f4f6;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
        }
        .footer {
            margin-top: 25px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Portfolio Website Notification</p>
        </div>
        
        <div class="field">
            <div class="field-label">Name:</div>
            <div class="field-value">${name}</div>
        </div>
        
        <div class="field">
            <div class="field-label">Email:</div>
            <div class="field-value">${email}</div>
        </div>
        
        <div class="field">
            <div class="field-label">Message:</div>
            <div class="message-content">${message}</div>
        </div>
        
        <div class="footer">
            <p>This message was sent from your portfolio contact form at jaskaran.in</p>
            <p>Time: ${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>
`;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send auto-reply to the sender
    const autoReplyResult = await resend.emails.send({
      from: 'Jaskaran Singh <contact@jaskaran.in>',
      to: [email],
      subject: 'Thank you for contacting me - Jaskaran Singh',
      html: getAutoReplyTemplate(name),
    });

    // Send notification to admin
    const adminNotificationResult = await resend.emails.send({
      from: 'Portfolio Contact <contact@jaskaran.in>',
      to: ['contact@jaskaran.in'],
      subject: `New Contact Form Submission from ${name}`,
      html: getAdminNotificationTemplate(name, email, message),
    });

    if (autoReplyResult.error || adminNotificationResult.error) {
      console.error('Email sending errors:', { autoReplyResult, adminNotificationResult });
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json(
      {
        message: 'Emails sent successfully',
        data: { autoReply: autoReplyResult.data, adminNotification: adminNotificationResult.data },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
