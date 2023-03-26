const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
const Heath = require("../models/cropHealth");

router.get("/crop-health", async (req, res) => {
  const { category, cropsIds, description } = req.body;
  try {
    const newHealth = new Heath({ category, cropsIds, description });
    const health = await newHealth.save();

    res.status(200).json(health);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;
