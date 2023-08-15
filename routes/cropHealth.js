const express = require("express");
const router = express.Router();
const Varities = require("../models/varities");
const Crop = require("../models/crop");
const pesticideModel = require("../models/pesticide");
const diseaseModel = require("../models/disease");
const pestModel = require("../models/pest");
const weedModel = require("../models/weeds");
const herbicideModel = require("../models/herbicide");
const fungicideModel = require("../models/fungicide");
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
    const crop = await Crop.findOne();
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
    console.log(weedDocs);
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

router.get("/pesticide/:pesticideId", async (req, res) => {
  // try {
  //   if (
  //     !req.body ||
  //     !req.body.pesticideIds ||
  //     !Array.isArray(req.body.pesticideIds)
  //   ) {
  //     return res.status(400).json({
  //       msg: "Invalid request body. Please provide an array of pesticideIds.",
  //     });
  //   }

  //   const pesticideIds = req.body.pesticideIds;
  //   const pesticides = await pesticideModel.find({
  //     _id: { $in: pesticideIds },
  //   });

  //   if (pesticides.length === 0) throw new Error("Pesticides not found");

  //   res.status(200).json(pesticides);
  // } catch (err) {
  //   res.status(500).json({ msg: err.message });
  // }
  try {
    const Pesticide = await pesticideModel.findById(req.params.fungicideId);
    if (!Pesticide) throw new Error("Pesticide not found");
    console.log(Pesticide);
    res.status(200).json(Pesticide);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get("/fungicide/:fungicideId", async (req, res) => {
  try {
    const Fungicide = await fungicideModel.findById(req.params.fungicideId);
    if (!Fungicide) throw new Error("Fungicide not found");
    console.log(Fungicide);
    res.status(200).json(Fungicide);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
router.get("/herbicide/:herbicideId", async (req, res) => {
  try {
    const Herbicide = await herbicideModel.findById(req.params.herbicideId);
    if (!Herbicide) throw new Error("Herbicide not found");
    res.status(200).json(Herbicide);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/role-admin/disease", async (req, res) => {
  let {
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
      const crop = await Crop.findOne({ localName });
      if (!crop) throw new Error({ message: "crop does not exist." });
      diseaseDoc.cropsIds.push(crop._id);
      const newDisease = await diseaseDoc.save();
      res.status(201).json({
        newDisease,
        status: "success",
      });
    } else {
      csv = csv.data;
      for (let i = 1; i < csv.length; i++) {
        let cropModel = {},
          diseaseDoc = {},
          solution = {},
          fungicideDoc = {};
        let images = [];
        if (!csv[i][0].length) break;
        console.log(i);
        for (let j = 0; j < csv[i].length; j++) {
          if (j === 0) {
            lName = csv[i][j].trim();
            if (lName) {
              cropModel = await Crop.findOne({
                localName: { $regex: lName, $options: "i" },
              });
              continue;
            }
          } else if (csv[0][j] == "disease") {
            diseaseDoc = await diseaseModel.findOne({
              name: { $regex: csv[i][j].trim(), $options: "i" },
            });
            if (!diseaseDoc)
              diseaseDoc = new diseaseModel({ name: csv[i][j].trim() });
          } else if (csv[0][j] == "images") {
            csv[i][j].split(/,|\n/).forEach((image) => {
              images.push(image);
            });
            if (diseaseDoc.images?.length) continue;
            else diseaseDoc.images = images;
          } else if (csv[0][j] == "description")
            diseaseDoc.description = csv[i][j];
          else if (csv[0][j] == "name") {
            fungicideDoc = await fungicideModel.findOne({
              name: { $regex: csv[i][j].trim(), $options: "i" },
            });
            if (!fungicideDoc)
              fungicideDoc = new fungicideModel({ name: csv[i][j].trim() });
          } else solution[csv[0][j]] = csv[i][j];
        }
        if (!cropModel) continue;
        if (diseaseDoc.cropsIds){
          let a = 0;
          for (let cid of diseaseDoc.cropsIds) {
            if (cid.equals(cropModel._id)) {
              a = 1;
              break;
            }
          }
          if (!a) diseaseDoc.cropsIds.push(cropModel._id);
        }
        else diseaseDoc.cropsIds = [cropModel._id];
        for (let key of Object.keys(solution)) {
          fungicideDoc[key] = solution[key];
        }
        await fungicideDoc.save();
        diseaseDoc.fungicidesIds.push(fungicideDoc._id);
        await diseaseDoc.save();
      }

      res.status(200).json({ msg: "csv file uploaded" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/role-admin/pest", async (req, res, next) => {
  let {
    localName, //of the crop
    pest, //name of the pest
    images = [], //Array
    description = "", // of the pest
    solutions = [
      { productId: 0, name: "Pesticide1", inventory: 10, type: "In-Organic" }, //array of objects
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
          const pesticide = new pesticideModel(sol);
          await pesticide.save();
          pesticidesIds.push(pesticide._id);
        } else {
          pesticidesIds.push(existingPest._id);
          continue;
        }
      }
      pestDoc.pesticidesIds.push(...pesticidesIds);
      const crop = await Crop.findOne({ localName });
      if (!crop) throw new Error("crop does not exist.");
      pestDoc.cropsIds.push(crop._id);
      const newpest = await pestDoc.save();
      res.status(201).json({ newpest, status: "success" });
    } else {
      csv = csv.data;
      for (let i = 1; i < csv.length; i++) {
        let cropModel = {},
          pestDoc = {},
          solution = {},
          pesticideDoc = {};
        let images = [];
        if (!csv[i][0].length) break;
        console.log(i);
        for (let j = 0; j < csv[i].length; j++) {
          if (j === 0) {
            lName = csv[i][j].trim();
            if (lName) {
              cropModel = await Crop.findOne({
                localName: { $regex: lName, $options: "i" },
              });
              continue;
            }
          } else if (csv[0][j] == "pest") {
            pestDoc = await pestModel.findOne({
              name: { $regex: csv[i][j].trim(), $options: "i" },
            });
            if (!pestDoc) pestDoc = new pestModel({ name: csv[i][j].trim() });
          } else if (csv[0][j] == "images") {
            csv[i][j].split(/,|\n/).forEach((image) => {
              images.push(image);
            });
            if (pestDoc.images?.length) continue;
            else pestDoc.images = images;
          } else if (csv[0][j] == "description")
            pestDoc.description = csv[i][j];
          else if (csv[0][j] == "name") {
            pesticideDoc = await pesticideModel.findOne({
              name: { $regex: csv[i][j].trim(), $options: "i" },
            });
            if (!pesticideDoc)
              pesticideDoc = new pesticideModel({ name: csv[i][j].trim() });
          } else solution[csv[0][j]] = csv[i][j];
        }
        if (!cropModel) continue;
        if (pestDoc.cropsIds) {
          let a = 0;
          for (let cid of pestDoc.cropsIds) {
            if (cid.equals(cropModel._id)) {
              a = 1;
              break;
            }
          }
          if (!a) pestDoc.cropsIds.push(cropModel._id);
        } else pestDoc.cropsIds = [cropModel._id];
        for (let key of Object.keys(solution)) {
          pesticideDoc[key] = solution[key];
        }
        await pesticideDoc.save();
        pestDoc.pesticidesIds.push(pesticideDoc._id);
        await pestDoc.save();
      }

      res.status(200).json({ msg: "csv file uploaded" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/role-admin/weed", async (req, res) => {
  let {
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
          const herbicide = new herbicideModel(sol);
          await herbicide.save();
          herbicidesIds.push(herbicide._id);
        } else {
          herbicidesIds.push(existingHerb._id);
          continue;
        }
      }
      weedDoc.herbicidesIds.push(...herbicidesIds);
      const crop = await Crop.findOne({ localName });
      if (!crop) throw new Error({ message: "crop does not exist." });
      weedDoc.cropsIds.push(crop._id);
      const newweed = await weedDoc.save();
      res.status(201).json({ newweed, status: "success" });
    } else {
      csv = csv.data;
      for (let i = 1; i < csv.length; i++) {
        let cropModel = {},
          weedDoc = {},
          solution = {},
          herbicideDoc = {};
        let images = [];
        if (!csv[i][0].length) break;
        console.log(i);
        for (let j = 0; j < csv[i].length; j++) {
          if (j === 0) {
            lName = csv[i][j].trim();
            if (lName) {
              cropModel = await Crop.findOne({
                localName: { $regex: lName, $options: "i" },
              });
              continue;
            }
          } else if (csv[0][j] == "weed") {
            weedDoc = await weedModel.findOne({
              name: { $regex: csv[i][j].trim(), $options: "i" },
            });
            if (!weedDoc) weedDoc = new weedModel({ name: csv[i][j].trim() });
          } else if (csv[0][j] == "images") {
            csv[i][j].split(/,|\n/).forEach((image) => {
              images.push(image);
            });
            if (weedDoc.images?.length) continue;
            else weedDoc.images = images;
          } else if (csv[0][j] == "description")
            weedDoc.description = csv[i][j];
          else if (csv[0][j] == "name") {
            herbicideDoc = await herbicideModel.findOne({
              name: { $regex: csv[i][j].trim(), $options: "i" },
            });
            if (!herbicideDoc)
              herbicideDoc = new herbicideModel({ name: csv[i][j].trim() });
          } else solution[csv[0][j]] = csv[i][j];
        }
        if (!cropModel) continue;
        if (weedDoc.cropsIds) {
          let a = 0;
          for (let cid of weedDoc.cropsIds) {
            if (cid.equals(cropModel._id)) {
              a = 1;
              break;
            }
          }
          if (!a) weedDoc.cropsIds.push(cropModel._id);
        } else weedDoc.cropsIds = [cropModel._id];
        for (let key of Object.keys(solution)) {
          herbicideDoc[key] = solution[key];
        }
        await herbicideDoc.save();
        weedDoc.herbicidesIds.push(herbicideDoc._id);
        await weedDoc.save();
      }

      res.status(200).json({ msg: "csv file uploaded" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
