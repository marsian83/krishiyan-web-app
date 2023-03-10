const express = require("express");
const router = express.Router();
const moment = require("moment");
const Crop = require("../models/crop");
const Pesticide = require("../models/pesticide");
const Fungicide =require("../models/fungicide")
const Pest = require("../models/pest");
const ObjectId = require("mongodb").ObjectId;

//Get fungicide by crop name
router.get("/:diseageId", async (req, res) => {
  try {
    const Fungicides = await Fungicide.find({});
    const { diseageId } = req.params;
    const fungicidesWithdiseageId = Fungicides.filter((diseage) =>
    diseage.diseaseIds.includes(diseageId)
    );
    res.status(200).json(fungicidesWithdiseageId);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;