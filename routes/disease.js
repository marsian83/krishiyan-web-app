const express = require("express");
const router = express.Router();
const moment = require("moment");
const Crop = require("../models/crop");
const ObjectId = require("mongodb").ObjectId;
const Disease = require("../models/disease")

//Get pests by crop name
router.get("/:cropId", async (req, res) => {
  try {
    const diseases = await Disease.find({});
    const { cropId } = req.params;
    const diseaseWithCropName = diseases.filter((disease) =>
    disease.cropsIds.includes(cropId)
    );
    console.log(cropId, diseases, diseaseWithCropName);
    res.status(200).json(diseaseWithCropName);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;