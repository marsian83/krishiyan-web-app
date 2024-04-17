const express = require("express");
const router = express.Router();
const FpoRegistration = require("../models/DataModel");

// Route to store data
router.post("/store-data", async (req, res) => {
  try {
    const newRegistration = new FpoRegistration(req.body);
    await newRegistration.save();
    res.status(201).json({ message: "FPO registration successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error during registration!" });
  }
});

// Route to retrieve and show data
router.get("/show-data", async (req, res) => {
  try {
    const data = await FpoRegistration.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
