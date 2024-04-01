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
      dealer_mobile,
      crops,
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
      dealer_mobile,
      crops,
    });

    await registration.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
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

router.get("/check-farmer/:mobile", async (req, res) => {
  const mobile = req.params.mobile;

  try {
    const farmer = await Registration.findOne({ mobile });

    if (farmer) {
      res.json({ exists: true, farmer });
    } else res.json({ exists: false });
  } catch (error) {
    console.log(error);
  }
});

// Get all farmers
router.get("/farmers", async (req, res) => {
  try {
    const farmers = await Registration.find();
    res.json(farmers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get farmers by dealer mobile
router.get("/farmers/:dealer_mobile", async (req, res) => {
  try {
    const farmers = await Registration.find({
      dealer_mobile: req.params.dealer_mobile,
    });
    res.json(farmers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
