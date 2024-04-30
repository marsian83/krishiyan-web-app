const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const OTP = require("../models/Otp");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Email_Otp,
    pass: process.env.Email_Otp_Password,
  },
});

router.post("/send-otp-email", async (req, res) => {
  const { email } = req.body;
  console.log(email);

  if (!email) {
    return res.status(400).json({ error: "Email address is required." });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);

  // Add custom HTML styling to the email
  const mailOptions = {
    from: "wetacre0@gmail.com",
    to: email,
    subject: "Email Verification",
    html: `
      <div style="font-family: Arial, sans-serif;">
        <p style="font-size: 18px; color: #333; font-weight: bold;">
          This is Krishiyan
        </p>
        <p style="font-size: 14px; color: #333;">
          The OTP for your verification is:
        </p>
        <p style="font-size: 28px; color: green; font-weight: bold;">
          ${otp}
        </p>
      </div>
    `,
  };

  const otpEntry = new OTP({ phoneNumber: email, otp });
  await otpEntry.save();
  console.log("From the send SMS");
  console.log(otpEntry);

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(`Error sending email to ${email}:`, error);
      return res
        .status(500)
        .json({ error: `Email could not be sent. backend ${res}` });
    } else {
      console.log(`Email sent to ${email}:`, info.response);
      return res.status(200).json({ message: "Email sent successfully." });
    }
  });
});

module.exports = router;
