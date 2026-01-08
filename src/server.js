import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASSWORD,
  },
});

app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  console.log(firstName, lastName, email, phone, message);
  try {
    await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: process.env.MAIL_RECEIVER,
      subject: "New Contact Form Submission",
      text: `
          Name: ${firstName} ${lastName}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
      `,
    });

    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email failed" });
  }
});
app.listen(5000, () => console.log(`Server running on port 5000`));

