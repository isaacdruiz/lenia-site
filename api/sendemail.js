const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, business, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // info@leniastudios.com
      pass: process.env.EMAIL_PASS  // your app password
    }
  });

  try {
    await transporter.sendMail({
      from: `"LENIA Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // sends to you
      subject: `🔥 New LENIA Lead: ${name}`,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return res.status(200).json({ message: 'Message sent successfully 🚀' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error sending message ❌' });
  }
}