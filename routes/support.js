const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
const SupportHealth = require("../models/supportHealth");
const Farmer = require("../models/farmer");
const Credit = require("../models/credit");
const SupportQuery = require("../models/query");
const SupportCredit = require("../models/supportCredit");
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

    await newHealth.save();

    res.status(200).json({ newHealth });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.post("/credit", async (req, res) => {
  const { creditId, description } = req.body;
  try {
    const creditData = await Credit.findById(creditId);
    if (!creditData)
      return res.status(400).json({ msg: "credit number does not exist." });
    const newCredit = new SupportCredit({
      creditId,
      description,
    });
    await Farmer.findOneAndUpdate(
      { _id: creditId },
      {
        $push: { creditData: newCredit },
      },
      { new: true }
    );

    await newCredit.save();

    res.status(200).json({ newCredit });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.post("/query", async (req, res) => {
  const { farmerId, query } = req.body;
  try {
    const queryData = await Farmer.findById(farmerId);
    if (!queryData)
      return res.status(400).json({ msg: "Farmer does not exist." });
    const newQuery = new SupportQuery({
      farmerId,
      query,
    });
    await Farmer.findOneAndUpdate(
      { _id: farmerId },
      {
        $push: { queryData: newQuery },
      },
      { new: true }
    );

    await newQuery.save();

    res.status(200).json({ newQuery });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;
