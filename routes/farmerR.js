const express = require("express");
const router = express.Router();
const Registration = require("../models/farmerRegistration");

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      mobile,
      state,
      city,
      zip,
      street,
      mobileIsWhatsapp,
      totalLandArea,
      dealer_farmer_relation,
      plantation_type,
    } = req.body;

    const registration = new Registration({
      name,
      mobile,
      state,
      city,
      zip,
      street,
      mobileIsWhatsapp,
      totalLandArea,
      dealer_farmer_relation,
      plantation_type,
    });

    await registration.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
    console.log("error server", error.message);
  }
});

router.get("/phone-numbers", async (req, res) => {
  try {
    const phoneNumbers = await Registration.find({}, "mobile").catch((err) =>
      console.error(err)
    );
    res.json(phoneNumbers);
    if (!phoneNumbers) {
      return res.status(404).json({ message: "No phone numbers found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/phoneNumbers/:mobile", async (req, res) => {
  try {
    const phoneNumber = await Registration.findOne({
      mobile: req.params.mobile,
    });
    res.json(phoneNumber);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
