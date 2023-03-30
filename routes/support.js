const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
const SupportHealth = require("../models/supportHealth");
const Farmer = require("../routes/farmer");

router.post("/crop-health", async (req, res) => {
  const { farmerId, crop, category, description } = req.body;
  try {
    const cultivationData = await Farmer.findById(farmerId);
    if (!cultivationData)
      return res.status(400).json({ msg: "Farmer does not exist." });
    const newHealth = new SupportHealth({
      farmerId,
      crop,
      category,
      description,
    });
    await Farmer.findOneAndUpdate(
      { _id: farmerId },
      {
        $push: { cultivationData: newHealth },
      },
      { new: true }
    );

    const health = await newHealth.save();

    res.status(200).json({ health });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;
