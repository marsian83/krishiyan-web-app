const express = require("express");
const router = express.Router();
const Varities = require("../models/varities");
const Crop = require("../models/crop");
const pesticideModel = require("../models/pesticide");
const diseaseModel = require("../models/disease");
const pestModel = require("../models/pest");
const weedModel = require("../models/weeds");
const herbicideModel = require("../models/herbicide");
const fungicide = require("../models/fungicide");
const crop = require("../models/crop");

const dbPopulateAll = async (docs, fields, projections = {}) => {
  // console.log(docs);
  for (const doc of docs) {
    if (!Object.keys(doc).length) continue;
    for (const field of fields) {
      const options = { path: field };
      if (projections[field]) {
        options.select = projections[field];
      }
      await doc.populate(options);
    }
  }
  return docs;
  /* Example Usage
  const users = await User.find({ isActive: true });
  await populateFieldsForArrayOfDocs(users, ['posts', 'friends'], {
    posts: 'title body',
    friends: 'name age'
  });
  */
};

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

/**Get routes ***/

router.get("/disease/:localName", async (req, res) => {
  const { localName } = req.params;
  try {
    const crop = await Crop.findOne({ localName });
    if (!crop) throw new Error("crop does not exist.");
    console.log(crop._id);
    const diseaseDocs = await diseaseModel.find({
      cropsIds: crop._id,
    });
    await dbPopulateAll(diseaseDocs, ["fungicidesIds"], {
      fungicidesIds:
        "name productId inventory type dosagePerAcre unit dilutionRatioPerAcre stage sprayingTime applicationType frequency",
    });
    if (!diseaseDocs) throw new Error("diseases not found");
    res.status(200).json(diseaseDocs);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});
router.get("/pest/:localName", async (req, res) => {
  const { localName } = req.params;
  try {
    const crop = await Crop.findOne({ localName });
    if (!crop) throw new Error("crop does not exist.");
    console.log(crop._id);
    const pestDocs = await pestModel.find({
      cropsIds: crop._id,
    });
    await dbPopulateAll(pestDocs, ["pesticidesIds"], {
      pesticidesIds:
        "name productId inventory type dosagePerAcre unit dilutionRatioPerAcre stage sprayingTime applicationType frequency",
    });
    if (!pestDocs) throw new Error("diseases not found");
    res.status(200).json(pestDocs);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});
router.get("/weed/:localName", async (req, res) => {
  const { localName } = req.params;
  try {
    const crop = await Crop.findOne({ localName });
    if (!crop) throw new Error("crop does not exist.");
    console.log(crop._id);
    const weedDocs = await weedModel.find({
      cropsIds: crop._id,
    });
    await dbPopulateAll(weedDocs, ["herbicidesIds"], {
      herbicidesIds:
        "name productId inventory type dosagePerAcre unit dilutionRatioPerAcre stage sprayingTime applicationType frequency",
    });
    if (!weedDocs) throw new Error("diseases not found");
    res.status(200).json(weedDocs);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

router.post("/role-admin/disease", async (req, res) => {
  const {
    localName, //of the crop
    disease, //name of the pest
    images = [], //Array
    description = "", // of the pest
    solutions = [
      {
        productId: 0,
        name: "pest",
        inventory: 10,
        type: "In-Organic",
      }, //array of objects
    ],
    csv = {},
  } = req.body;
  try {
    if (Object.keys(csv).length === 0) {
      console.log("After authentication");
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
      const crop = Crop.findOne({ localName });
      if (!crop) throw new Error({ message: "crop does not exist." });
      diseaseDoc.cropsIds.push(crop._id);
      const newDisease = await diseaseDoc.save();
      res.status(201).json({
        newDisease,
        status: "success",
      });
    } else {
      //For handling csv uploads
      res.status(200).json({ msg: "csv file uploaded" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/role-admin/pest", async (req, res, next) => {
  const {
    localName, //of the crop
    pest, //name of the pest
    images = [], //Array
    description = "", // of the pest
    solutions = [
      { productId: 0, name: "pest", inventory: 10, type: "In-Organic" }, //array of objects
    ],
    csv = {},
  } = req.body;
  try {
    console.log("After authentication");
    if (Object.keys(csv).length === 0) {
      const existingpestDoc = await pestModel.findOne({ name: pest });
      const pestDoc = !existingpestDoc
        ? new pestModel({
            name: pest,
            images,
            description,
          })
        : existingpestDoc;
      const pesticidesIds = [];
      for (let sol of solutions) {
        const existingPest = await pesticideModel.findOne({ name: sol.name });
        if (!existingPest) {
          const pesticide = new fungicide(sol);
          await pesticide.save();
          pesticidesIds.push(pesticide._id);
        } else {
          pesticidesIds.push(existingPest._id);
          continue;
        }
      }
      pestDoc.pesticidesIds.push(...pesticidesIds);
      const crop = Crop.findOne({ localName });
      if (!crop) throw new Error("crop does not exist.");
      pestDoc.cropsIds.push(crop._id);
      const newpest = await pestDoc.save();
      res.status(201).json({ newpest, status: "success" });
    } else {
      //For handling csv uploads
      res.status(200).json({ msg: "csv file uploaded" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/role-admin/weed", async (req, res) => {
  const {
    localName, //of the crop
    weed, //name of the pest
    images = [], //Array
    description = "", // of the pest
    solutions = [
      { productId: 0, name: "pest", inventory: 10, type: "In-Organic" }, //array of objects
    ],
    csv = {},
  } = req.body;
  try {
    if (Object.keys(csv).length === 0) {
      const existingweedDoc = await weedModel.findOne({ name: weed });
      const weedDoc = !existingweedDoc
        ? new weedModel({
            name: weed,
            images,
            description,
          })
        : existingweedDoc;
      const herbicidesIds = [];
      for (let sol of solutions) {
        const existingHerb = await herbicideModel.findOne({ name: sol.name });
        if (!existingHerb) {
          const herbicide = new fungicide(sol);
          await herbicide.save();
          herbicidesIds.push(herbicide._id);
        } else {
          herbicidesIds.push(existingHerb._id);
          continue;
        }
      }
      weedDoc.herbicidesIds.push(...herbicidesIds);
      const crop = Crop.findOne({ localName });
      if (!crop) throw new Error({ message: "crop does not exist." });
      weedDoc.cropsIds.push(crop._id);
      const newweed = await weedDoc.save();
      res.status(201).json({ newweed, status: "success" });
    } else {
      //For handling csv uploads
      res.status(200).json({ msg: "csv file uploaded" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
