const express = require("express");
const router = express.Router();
const Varities = require("../models/varities");
const Crop = require("../models/crop");

// create varities................................
router.post("/", async (req, res) => {
  try {
    const {
      nameOfvariety,
      areaOfadadoption,
      productCondition,
      salientFeatures,
      cropCycle,
      cropId,
    } = req.body;
    const crop = await Crop.findById(cropId);
    if (!crop) return res.status(400).json({ msg: "crop does not exist." });
    const newVaritiesData = new Varities({
      nameOfvariety,
      areaOfadadoption,
      productCondition,
      salientFeatures,
      cropId,
    });

    await Crop.findOneAndUpdate(
      { _id: cropId },
      {
        $push: { varitiesId: newVaritiesData },
      },
      { new: true }
    );

    await newVaritiesData.save();
    res.status(201).json({
      message: "Varities created!",
      newVaritiesData,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
