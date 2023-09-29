const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const OTP = require("../models/Otp");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "wetacre0@gmail.com",
    pass: "givttdheycxtjlbx",
  },
});

router.post("/send-otp-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email address is required." });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);

  const mailOptions = {
    from: "wetacre0@gmail.com",
    to: email,
    subject: "Email Verification",
    text: `This is Krishiyan. The OTP for your Email verification is: ${otp}`,
  };

  const otpEntry = new OTP({ email, otp });
  await otpEntry.save();
  console.log("From the send SMS");
  console.log(otpEntry);

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(`Error sending email to ${email}:`, error);
      return res.status(500).json({ error: "Email could not be sent." });
    } else {
      console.log(`Email sent to ${email}:`, info.response);
      return res.status(200).json({ message: "Email sent successfully." });
    }
  });
});

module.exports = router;
