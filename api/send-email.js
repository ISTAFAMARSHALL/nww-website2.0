require('dotenv').config();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail({ to, from, subject, text, html }) {
  try {
    const msg = {
      to,
      from,
      subject,
      text,
      html,
    };
    await sgMail.send(msg);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error('Error response body:', error.response.body);
    }
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      fullName,
      email,
      linkedIn,
      goals,
    } = req.body;

    try {
      await sendEmail({
        to: 'istafamarshall@me.com',
        from: 'istafamarshall@me.com',
        subject: 'Leadership Lunch Form Submission',
        text: `New Leadership Lunch form submission from ${fullName}`,
        html: `
          <h3>New Leadership Lunch Form Submission</h3>
          <ul>
            <li><strong>Full Name:</strong> ${fullName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>LinkedIn Profile URL:</strong> ${linkedIn}</li>
            <li><strong>Goals for Attending:</strong> ${goals}</li>
          </ul>
        `,
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}
