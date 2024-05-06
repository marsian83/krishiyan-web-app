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

//email check
router.post("/check-email", async (req, res) => {
  console.log("function check email entered");
  try {
    // Extract the email from the request body
    const { email } = req.body;

    // Query the database to check if an email already exists
    const existingFpo = await FpoRegistration.findOne({ emailAddress: email });

    // If an FPO with the provided email address is found
    if (existingFpo) {
      console.log("response gu=iven");
      return res
        .status(200)
        .json({ exists: true, message: "Email already exists." });
    } else {
      // If no FPO with the provided email address is found
      return res
        .status(200)
        .json({ exists: false, message: "Email does not exist." });
    }
  } catch (error) {
    // Handle any errors that occur during the query
    console.error("Error checking email:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
