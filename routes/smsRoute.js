const express = require("express");
const sendSMS = require("../services/smsService"); // Adjust the path as needed

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const phoneNumber = req.query.mobile;
    const smsResponse = await sendSMS(phoneNumber);
    res.json(smsResponse);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
