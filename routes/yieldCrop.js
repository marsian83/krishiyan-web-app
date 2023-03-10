const express = require("express");
const router = express.Router();
const moment = require("moment");
const Crop = require("../models/crop");
const Variteyes = require("../models/varities");
const ObjectId = require("mongodb").ObjectId;

//Get weeds by crop name
router.get("/:cropId", async (req, res) => {
  try {
    const variteyes = await Variteyes.find({});
    const { cropId } = req.params;
    const variteyesWithCropName = variteyes.filter(
      (variteye) => variteye.cropId?.toString() == cropId
    );
    // console.log(cropId, variteyes, variteyesWithCropName);
    res.status(200).json(variteyesWithCropName);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;
