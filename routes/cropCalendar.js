const express = require("express");
const router = express.Router();
const moment = require("moment");
const Crop = require("../models/crop");

router.post("/role-admin/stage/add", async (req, res, next) => {
  let {
    sn = 1, //stage number
    lowerLimit_age = 15,
    upperLimit_age = 20, //if stage lasts 15 to 20 days
    disease = "", //array of objects
    pest = "", //array of objects
    weed = "", //array of objects
    Fertilizer = "", //array of objects
    localName,
    csv = "",
  } = req.body;
  try {
    if (!csv) {
      if (!localName)
        throw new Error("localName or scientificName are required");
      const query = { localName };
      const crop = await Crop.findOne(query);
      if (!crop) throw new Error("crop not found");
      const stageIn = crop.stages.findIndex((stage) => stage.sn === sn);
      if (stageIn == -1) throw new Error("stage not found");
      let stage = crop.stages[stageIn];
      stage.lowerLimit_age = lowerLimit_age;
      stage.upperLimit_age = upperLimit_age;
      stage.disease = disease;
      stage.pest = pest;
      stage.weed = weed;
      stage.Fertilizer = Fertilizer;
      await crop.save();
      res.status(201).json({ crop });
    } else {
      csv = csv.data;
      for (let i = 1; i < csv.length; i++) {
        // console.log(csv[i][0]);
        let cropModel = {};
        let stage = {};
        if (!csv[i][0].length) break;
        for (let j = 0; j < csv[i].length; j++) {
          if (j === 0) {
            lName = csv[i][j].trim();
            cropModel = await Crop.findOne({
              localName: { $regex: lName, $options: "i" },
            });
            if (!cropModel) {
              console.log("crop not found", lName);
              break;
            }
          } else if (csv[0][j] == "sn") {
            let stageIn = cropModel.stages.findIndex((stage) => {
              return stage.sn == csv[i][j];
            });
            if (stageIn == -1) throw new Error("stage not found");
            stage = cropModel.stages[stageIn];
          } else if (csv[0][j].contains("age")) {
            stage.csv[0][j] = +csv[i][j];
          } else {
            stage[csv[0][j]] = csv[i][j];
          }
        }
        if (cropModel) await cropModel.save();
      }
      res.status(201).json({ message: "bulk uploaded " });
    }
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
});

module.exports = router;
