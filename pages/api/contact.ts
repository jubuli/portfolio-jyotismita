import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

type Data = {
    message: string;
};

const sendMail = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method Not Allowed' });
        return;
    }

    const { name, email, subject, message } = req.body;
    console.log(email)
    if (!name || !email || !subject || !message) {
        res.status(400).json({ message: 'Bad Request: Missing required fields' });
        return;
    }

    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: 'somanathbarik0727@gmail.com', // Replace with your email
            pass: process.env.EMAIL_PASSWORD, // Use your environment variable
        },
        secure: true,
    });

    const mailData = {
        from: email, // Sender's email
        to: 'somanathbarik0727@gmail.com', // Your email to receive the message
        subject: `${subject}`,
        text: `${message} | Sent from: ${email}`,
        html: `<div>${message}</div><p>Sent from: ${email}</p>`,
    };
    try {
        const info = await transporter.sendMail(mailData);
        console.log('Email sent: ', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default sendMail;
