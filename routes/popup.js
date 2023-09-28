// api.js
const express = require("express");
const router = express.Router();
const Popup = require("../models/popupSchema");

// POST route to save the form data to the database
router.post("/create-popup", async (req, res) => {
  try {
    const {
      title,
      price,
      quantity,
      moisture,
      foreignMatter,
      fibre,
      debris,
      protein,
      description,
      image,
    } = req.body;

    const popup = new Popup({
      title,
      price,
      quantity,
      moisture,
      foreignMatter,
      fibre,
      debris,
      protein,
      description,
      image,
    });

    await popup.save();

    if (popup._id) {
      console.log("Popup created successfully:", popup._id);
      res.json({ success: true });
    } else {
      console.error("Failed to create popup.");
      res.status(500).json({ success: false, error: "Failed to create popup" });
    }
  } catch (error) {
    console.error("Error creating popup:", error);
    res.status(500).json({ success: false, error: "Failed to create popup" });
  }
});

router.get("/popups", async (req, res) => {
  try {
    const popups = await Popup.find();
    res.json({ success: true, popups });
  } catch (error) {
    console.error("Error fetching popups:", error);
    res.status(500).json({ success: false, error: "Failed to fetch popups" });
  }
});

router.delete("/delete-all-popups", async (req, res) => {
  console.log("hello from delete all popups");
  try {
    const deleteResult = await Popup.deleteMany({});

    if (deleteResult.deletedCount > 0) {
      console.log("All popups deleted successfully.");
      res.json({ success: true, message: "All popups deleted successfully" });
    } else {
      console.error("No popups found to delete.");
      res
        .status(200)
        .json({ success: false, error: "No popups found to delete" });
    }
  } catch (error) {
    console.error("Error deleting all popups:", error);
    res.status(500).json({ success: false, error: "Failed to delete popups" });
  }
});

module.exports = router;
