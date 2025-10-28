import nodemailer from "nodemailer";
import Subscriber from "../models/subscribe.model.js";

const subscribe = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Already subscribed" });
    }

    await Subscriber.create({ email });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Forever Clothing" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to our Newsletter 🎉",
      text: "Thanks for subscribing! We'll keep you updated with the latest news. Your 20% discount code is: 20OFF",
      html: `<p>Thanks for subscribing! 🎉<br/>We'll keep you updated with the latest news.</br>Your 20% discount code is: 20OFF</p>`,
    });

    res.status(200).json({ message: "Subscription email sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

export default subscribe