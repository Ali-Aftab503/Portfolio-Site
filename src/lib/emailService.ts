import emailjs from '@emailjs/browser';

// Initialize EmailJS once
if (typeof window !== 'undefined') {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
}

export async function sendEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, // Will send to your email
      }
    );
    return response;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
}