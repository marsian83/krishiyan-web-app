const express = require("express");
const router = express.Router();
const moment = require("moment");
const Crop = require("../models/crop");
const Pesticide = require("../models/pesticide");
const Pest = require("../models/pest");
const ObjectId = require("mongodb").ObjectId;

//Get pests by crop name
router.get("/:pestId", async (req, res) => {
  try {
    const pesticides = await Pesticide.find({});
    const { pestId } = req.params;
    const pesticidesWithPestId = pesticides.filter((pest) =>
      pest.pestsIds.includes(pestId)
    );
    res.status(200).json(pesticidesWithPestId);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;