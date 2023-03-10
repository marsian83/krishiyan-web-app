const express = require("express");
const router = express.Router();
const moment = require("moment");
const Crop = require("../models/crop");
const Pesticide = require("../models/pesticide");
const Pest = require("../models/pest");
const ObjectId = require("mongodb").ObjectId;

//Get pests by crop name
router.get("/:cropId", async (req, res) => {
  try {
    const pests = await Pest.find({});
    const { cropId } = req.params;
    const pestsWithCropName = pests.filter((pest) =>
      pest.cropsIds.includes(cropId)
    );
    console.log(cropId, pests, pestsWithCropName);
    res.status(200).json(pestsWithCropName);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;