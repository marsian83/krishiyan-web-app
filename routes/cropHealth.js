const express = require("express");
const router = express.Router();
const Varities = require("../models/varities");
const Crop = require("../models/crop");
const crop = require("../models/crop");
const diseaseModel = require("../models/disease");
const pest = require("../models/pest");
const weeds = require("../models/weeds");
const fungicide = require("../models/fungicide");
const crop = require("../models/crop");
// create varities................................
router.post("/", async (req, res) => {
  try {
    const {
      SuportCategory,
      category,
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

router.post("/disease", async (req, res) => {
  const {
    localName,
    disease,
    images,
    description,
    solutions = [
      { productId: 0, name: "Disease", inventory: 10, type: "In-Organic" },
    ],
    csv,
  } = req.body;
  try {
    if (!csv) {
      const existingDiseaseDoc = await diseaseModel.findOne({ name: disease });
      const diseaseDoc = !existingDiseaseDoc
        ? new diseaseModel({
            name: disease,
            images,
            description,
          })
        : existingDiseaseDoc;
      const fungicidesIds = [];
      for (let sol of solutions) {
        const existingFung = await fungicide.findOne({ name: sol.name });
        if (!existingFung) {
          const fung = new fungicide(sol);
          await fung.save();
          fungicidesIds.push(fung._id);
        } else {
          fungicidesIds.push(existingFung._id);
          continue;
        }
      }
      diseaseDoc.fungicidesIds.push(...fungicidesIds);
      const crop = crop.findOne({ localName });
      if (!crop) throw new Error({ message: "crop does not exist." });
      diseaseDoc.cropsIds.push(crop._id);
      const newDisease = await diseaseDoc.save();
      res.status(201).json({ newDisease });
    } else {
      //For handling csv uploads
      res.status(200).json({ msg: "csv file uploaded" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/pest", async (req, res) => {
  try {
    const { scientificName, name } = req.body;
    const crop = await crop.findOne({ scientificName });
    if (!crop) throw new Error({ message: "crop does not exist." });
    const pestDoc = await pest.findOne({ name });
    if (!pestDoc) throw new Error({ message: "pest does not exist." });
    pestDoc.cropsIds.push(crop._id);
    const updatedPestDoc = await pestDoc.save();
    res.status(201).json({ updatedPestDoc });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/weed", async (req, res) => {
  try {
    const { scientificName, name } = req.body;
    const crop = await crop.findOne({ scientificName });
    if (!crop) throw new Error({ message: "crop does not exist." });
    const weedDoc = await weeds.findOne({ name });
    if (!weedDoc) throw new Error({ message: "weed does not exist." });
    pestDoc.cropsIds.push(crop._id);
    const updatedPestDoc = await pestDoc.save();
    res.status(201).json({ updatedPestDoc });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
