const express = require("express");
const router = express.Router();
const moment = require("moment");
const Crop = require("../models/crop");
const Pesticide = require("../models/pesticide");
const weed = require('../models/weeds')
const ObjectId = require("mongodb").ObjectId;

//Get weeds by crop name
router.get("/:cropId", async (req, res) => {
  try {
    const weeds = await weed.find({});
    const { cropId } = req.params;
    const weedsWithCropName = weeds.filter((weed) =>
      weed.cropsIds.includes(cropId)
    );
    console.log(cropId, weeds, weedsWithCropName);
    res.status(200).json(weedsWithCropName);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;