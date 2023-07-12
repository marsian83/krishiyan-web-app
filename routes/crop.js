const express = require("express");
const router = express.Router();
const moment = require("moment");
const Crop = require("../models/crop");
const Pesticide = require("../models/pesticide");
const Pest = require("../models/pest");
const Herbicide = require("../models/herbicide");
const Weeds = require("../models/weeds");
const Disease = require("../models/disease");
const Fungicide = require("../models/fungicide");
const crop = require("../models/crop");
const ObjectId = require("mongodb").ObjectId;
const Varieties = require("../models/varities");
// ===================================================== CROP ADVISORY =======================================================================

//Create new crop
router.post("/role-admin/add", async (req, res) => {
  let {
    localName,
    scientificName,
    stages = [{ sn: 1, name: "Germination", images: ["url"] }],
    description = "description",
    csv = {},
  } = req.body;

  try {
    if (!Object.keys(csv).length) {
      const crop = await Crop.findOne({
        $or: [{ localName: localName }, { scientificName: scientificName }],
      });
      if (!crop)
        crop = new Crop({
          ...req.body,
        });
      else {
        crop.stages.push(...stages);
        crop.description = description;
      }
      await Crop.save();
      res.status(201).json({
        message: "Crop created!",
        crop: crop,
      });
    } else {
      csv = csv.data;
      for (let i = 1; i < csv.length; i++) {
        let cropModel = {};
        let stages = {};
        let lName = "",
          sName = " ";
        if (!csv[i][0].length) break;
        for (let j = 0; j < csv[i].length; j++) {
          if (j === 0) {
            lName = csv[i][j];
            cropModel = await Crop.findOne({ localName: lName });
            if (!cropModel) cropModel = new Crop({ localName: lName });
            continue;
          } else if (j == 1) {
            sName = csv[i][j];
            cropModel.scientificName = sName;
          } else if (csv[0][j] == "images") {
            stages.images = [];
            csv[i][j].split(",").forEach((image) => {
              stages.images.push(image);
            });
          } else if (csv[0][j] == "description") {
            cropModel.description = csv[i][j];
          } else {
            stages[csv[0][j]] = csv[i][j];
          }
        }
        cropModel.stages.push(stages);
        await cropModel.save();
      }
      res.status(201).json({ message: "bulk uploaded " });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

router.post("/role-admin/faq/add", async (req, res) => {
  let {
    faq = [{ question: "q1", answer: "a1" }],
    localName,
    scientificName,
    csv,
  } = req.body; //array of [{question,answer}]
  try {
    if (!Object.keys(csv).length) {
      if (!localName && !scientificName)
        throw new Error("localName or scientificName are required");
      const query = localName ? { localName } : { scientificName };
      const crop = await Crop.findOne(query);
      if (!crop) throw new Error("crop not found");
      crop.faq.push(...faq);
      await crop.save();
      res.status(201).json({ crop });
    } else {
      csv = csv.data;
      for (let i = 1; i < csv.length; i++) {
        let cropModel = {};
        let faq = {};
        let lName = "",
          sName = " ";
        if (!csv[i][0].length) break;
        for (let j = 0; j < csv[i].length; j++) {
          if (!j) {
            lName = csv[i][j];
            if (lName) {
              cropModel = await Crop.findOne({ localName: lName });
              continue;
            }
          } else {
            faq[csv[0][j]] = csv[i][j];
          }
        }
        cropModel.faq.push(faq);
        await cropModel.save();
      }
      res.status(201).json({ message: "bulk uploaded " });
    }
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
});

router.post("/role-admin/general/add", async (req, res) => {
  let { generalInformation, localName, scientificName, csv = {} } = req.body;
  //refer generalInformation field in crop model
  try {
    if (!Object.keys(csv).length) {
      if (!localName && !scientificName)
        throw new Error("localName or scientificName are required");
      const query = localName ? { localName } : { scientificName };
      const crop = await Crop.findOne(query);
      if (!crop) throw new Error("crop not found");
      crop.generalInformation = generalInformation;
      await crop.save();
      res.status(201).json({ crop, status: 200 });
    } else {
      csv = csv.data;
      for (let i = 1; i < csv.length; i++) {
        let cropModel = {};
        let generalInformation = {};
        let lName = "",
          sName = " ";
        if (!csv[i][0].length) break;
        for (let j = 0; j < csv[i].length; j++) {
          if (j === 0) {
            lName = csv[i][j];
            if (lName) {
              cropModel = await Crop.findOne({ localName: lName });
              continue;
            }
          } else if (j == 1) {
            sName = csv[i][j];
            if (sName && !lName) {
              cropModel = await Crop.findOne({ scientificName: sName });
              continue;
            }
          } else {
            generalInformation[csv[0][j]] = csv[i][j];
          }
        }
        cropModel.generalInformation = generalInformation;
        await cropModel.save();
      }
      res.status(201).json({ message: "bulk uploaded " });
    }
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
});

router.post("/preSowing", async (req, res) => {
  let { presowingPractices, localName, scientificName, csv = "" } = req.body;
  //refer  presowingpractices field in crop model
  try {
    if (!csv) {
      if (!localName && !scientificName)
        throw new Error("localName or scientificName are required");
      const query = localName ? { localName } : { scientificName };
      const crop = await Crop.findOne(query);
      if (!crop) throw new Error("crop not found");
      crop.presowingPractices = presowingPractices;
      await crop.save();
      res.status(201).json({ crop, status: 200 });
    } else {
      csv = csv.data;
      for (let i = 1; i < csv.length; i++) {
        let cropModel = {};
        let pre = { Seed_treatment: {}, Intercultural_Operations: [] };
        let lName = "",
          sName = " ";
        if (!csv[i][0].length) break;
        for (let j = 0; j < csv[i].length; j++) {
          if (j === 0) {
            lName = csv[i][j];
            if (lName) {
              cropModel = await Crop.findOne({ localName: lName });
              continue;
            }
          } else if (csv[0][j] == "scientificName") {
            sName = csv[i][j];
            if (sName && !lName) {
              cropModel = await Crop.findOne({ scientificName: sName });
              continue;
            }
          } else {
            if (csv[0][j] == "nameOfChemical") {
              pre.Seed_treatment[csv[0][j]] = csv[i][j];
            } else if (csv[0][j] == "Dosage") {
              pre.Seed_treatment[csv[0][j]] = csv[i][j];
            } else if (csv[0][j] == "Intercultural_Operations") {
              csv[i][j].split(",").forEach((image) => {
                pre[csv[0][j]].push(image);
              });
            } else {
              pre[csv[0][j]] = csv[i][j];
            }
          }
        }
        cropModel.presowingPractices = pre;
        await cropModel.save();
      }
      res.status(201).json({ message: "bulk uploaded " });
    }
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
});

router.post("/stage/role-admin/add", async (req, res) => {
  let {
    stages = [{ sn: 1, name: "germination", image: "url" }],
    localName,
    scientificName,
    csv,
  } = req.body; //array of [{question,answer}]
  try {
    if (!csv) {
      if (!localName && !scientificName)
        throw new Error("localName or scientificName are required");
      const query = localName ? { localName } : { scientificName };
      const crop = await Crop.findOne(query);
      if (!crop) throw new Error("crop not found");
      crop.stages.push(...stages);
      await crop.save();
      res.status(201).json({ crop });
    } else {
      res.status(201).json({ message: "csv" });
    }
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
});

router.post("/role-admin/harvest/add", async (req, res) => {
  let {
    newHarvest = {
      Physiological: String,
      index: String,
      Average: String,
      Conditions_during: String,
      Post_Harvest: String,
      prevent: String,
      images: [{ type: String }],
    },
    localName,
    scientificName,
    csv,
  } = req.body; //array of [{question,answer}]
  try {
    if (!csv) {
      if (!localName && !scientificName)
        throw new Error("localName or scientificName are required");
      const query = localName ? { localName } : { scientificName };
      const crop = await Crop.findOne(query);
      if (!crop) throw new Error("crop not found");
      crop.newHarvest = newHarvest;
      await crop.save();
      res.status(201).json({ crop });
    } else {
      csv = csv.data;
      for (let i = 1; i < csv.length; i++) {
        // console.log(csv[i][0]);
        let harvest = {};
        let cropModel = {};
        if (!csv[i][0].length) break;
        for (let j = 0; j < csv[i].length; j++) {
          if (j === 0) {
            lName = csv[i][j];
            cropModel = await Crop.findOne({ localName: lName });
          } else if (csv[0][j] == "images") {
            harvest.images = [];
            csv[i][j].split(/,|\n/).forEach((image) => {
              harvest.images.push(image);
            });
          } else {
            harvest[csv[0][j]] = csv[i][j];
          }
        }
        if (cropModel) {
          cropModel.newHarvest = harvest;
          await cropModel.save();
        } else {
          console.log(csv[i][0]);
        }
      }
      res.status(201).json({ message: "bulk uploaded " });
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json({ msg: e.message });
  }
});

router.post("/irrigation/role-admin/add", async (req, res) => {
  let {
    component = "String",
    image = "String",
    description = "String",
    solutions = [{ name: "String", prodImg: "String", cost: "String" }], //recommended products
    localName,
    scientificName,
    csv,
  } = req.body; //array of [{question,answer}]
  try {
    if (!csv) {
      if (!localName && !scientificName)
        throw new Error("localName or scientificName are required");
      const query = localName ? { localName } : { scientificName };
      const crop = await Crop.findOne(query);
      if (!crop) throw new Error("crop not found");
      const newIrrigationtechnique = {
        component,
        image,
        description,
        solutions,
      };
      crop.irrigation.push(newIrrigationtechnique);
      await crop.save();
      res.status(201).json({ crop });
    } else {
      csv = csv.data;
      for (let i = 1; i < csv.length; i++) {
        let irrigationTechnique = {};
        let cropModel = {};
        if (!csv[i][0].length) break;
        for (let j = 0; j < csv[i].length; j++) {
          if (j === 0) {
            lName = csv[i][j];
            cropModel = await Crop.findOne({ localName: lName });
          } else {
            switch (j) {
              case 1:
            }
            harvest[csv[0][j]] = csv[i][j];
          }
        }
        cropModel.newHarvest = harvest;
        await cropModel.save();
      }
      res.status(201).json({ message: "bulk uploaded " });
    }
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
});

router.post("/role-admin/variety/add", async (req, res) => {
  try {
    let {
      nameOfvariety,
      areaOfadadoption,
      productCondition,
      salientFeatures,
      cropCycle,
      localName,
      scientificName,
      csv,
    } = req.body;
    if (!csv) {
      if (!localName && !scientificName)
        throw new Error("localName or scientificName are required");
      const query = localName ? { localName } : { scientificName };
      const crop = await Crop.findOne(query);
      if (!crop) throw new Error("crop not found");
      const cropId = crop._id;
      const newVaritiesData = new Varieties({
        nameOfvariety,
        areaOfadadoption,
        productCondition,
        salientFeatures,
        cropCycle,
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
    } else {
      csv = csv.data;
      for (let i = 1; i < csv.length; i++) {
        let variety = {};
        let cropModel = {};
        let lName = "",
          sName = " ";
        if (!csv[i][0].length) break;
        for (let j = 0; j < csv[i].length; j++) {
          if (j === 0) {
            lName = csv[i][j];
            if (lName) {
              cropModel = await Crop.findOne({ localName: lName });
              continue;
            }
          } else if (j == 1) {
            sName = csv[i][j];
            if (sName && !lName) {
              cropModel = await Crop.findOne({ scientificName: sName });
              continue;
            }
          } else {
            variety[csv[0][j]] = csv[i][j];
          }
        }
        variety.cropId = cropModel._id;
        const newVaritiesData = new Varieties(variety);
        await newVaritiesData.save();
      }
      res.status(201).json({ message: "bulk uploaded " });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});
router.get("/getvariety/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const varities = await Varieties.findOne({ _id: id });
    res.status(201).json({
      message: "Variety found",
      varities,
    });
  } catch (err) {
    return res.status(500).json({ msg: error.message });
  }
});

router.post("/nutrient/role-admin/add", async (req, res) => {
  let {
    nutrient = {
      name: String,
      role: String,
      description: String,
      Dosage: String,
      age: String,
      Method_application: String,
    },
    localName,
    scientificName,
    csv = "",
  } = req.body; //array of [{question,answer}]
  try {
    if (!csv) {
      if (!localName && !scientificName)
        throw new Error("localName or scientificName are required");
      const query = localName ? { localName } : { scientificName };
      const crop = await Crop.findOne(query);
      if (!crop) throw new Error("crop not found");
      let b = 0;
      for (let nutr of crop.nutrient) {
        if (nutr.name == nutrient.name) {
          nutr = { ...nutr, ...nutrient };
          b = 1;
          break;
        }
      }
      if (!b) crop.nutrient.push(nutrient);
      await crop.save();
      res.status(201).json({ crop, message: "nutrient added!" });
    } else {
      csv = csv.data;
      for (let i = 1; i < csv.length; i++) {
        let cropModel = {};
        let nutrient = {};
        let lName = "",
          sName = " ";
        if (!csv[i][0].length) break;
        for (let j = 0; j < csv[i].length; j++) {
          if (j === 0) {
            lName = csv[i][j];
            if (lName) {
              cropModel = await Crop.findOne({ localName: lName });
              continue;
            }
          } else if (j == 1) {
            sName = csv[i][j];
            if (sName && !lName) {
              cropModel = await Crop.findOne({ scientificName: sName });
              continue;
            }
          } else {
            nutrient[csv[0][j]] = csv[i][j];
          }
        }
        cropModel.nutrient.push(nutrient);
        await cropModel.save();
      }
      res.status(201).json({ message: "bulk uploaded " });
    }
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
});

router.post("/role-admin/nutrient/deficiency/add", async (req, res) => {
  let {
    nutrient,
    deficiency = {
      Notable_Symptoms: String,
      images: [String],
      Solution: String,
    },
    localName,
    scientificName,
    csv,
  } = req.body; //array of [{question,answer}]
  try {
    if (!csv) {
      if (!localName && !scientificName)
        throw new Error("localName or scientificName are required");
      const query = localName ? { localName } : { scientificName };
      const crop = await Crop.findOne(query);
      if (!crop) throw new Error("crop not found");
      let b = 0;
      for (let nutr of crop.nutrient) {
        if (nutr.name == nutrient) {
          nutr.deficiency = deficiency;
          b = 1;
          break;
        }
      }
      if (!b) {
        crop.nutrient.push({
          name: nutrient,
          deficiency,
          role: "",
          description: "",
          Dosage: "",
          age: "",
          Method_application: "",
        });
      }
      await crop.save();
      res.status(201).json({ crop, message: "nutrient deficiency added!" });
    } else {
      res.status(201).json({ message: "csv" });
    }
  } catch (e) {
    return res.status(500).json({ msg: e.message });
  }
});

//Get crops
router.get("/", async (req, res) => {
  try {
    const crops = await Crop.find({});
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});
// fill data for pest
// router.get("/fill-data", async (req, res) => {
//   try {
//     const pest = await new Pest({
//       name: "Pest 3 ", // pest 2
//       pesticidesIds: [],
//       cropsIds: [new ObjectId("642abb7ceb25dc0bf93b525b")],
//     }).save();
//     const pesticide = new Pesticide({
//       name: "Pesticide 3", // pe 2
//       dosagePerAcre: "500",
//       unit: "ml", // 'gram', 'kilogram','ml','litre'
//       dilutionRatioPerAcre: "150-200",
//       stage: "Stage 3", // Stage 1, Stage 2, Stage 3, Stage 4
//       sprayingTime: "Sunlight", // Evening, Afternoon, Sunlight, Night
//       applicationType: "Florial", // Basal, Florial
//       frequency: "3 times for 2 weeks", // 3 times for 2 weeks,2 times for 1 weeks,1 times for 3 weeks
//       pestsIds: [pest._id],
//     });
//     await pesticide.save();
//     pest.pesticidesIds.push(new ObjectId(pesticide._id));
//     await pest.save();
//     res.json({
//       pest,
//       pesticide,
//     });
//   } catch (error) {
//     console.log(error, "ERROR");
//   }
// });

// fill data for herbicide
// router.get("/fill-data", async (req, res) => {
//   try {
//     const weed = await new Weeds({
//       name: "Weed 2 ", // pest 2
//       herbicidesIds: [],
//       cropsIds: [new ObjectId("642abb7ceb25dc0bf93b525b")],
//     }).save();
//     const herbicide = new Herbicide({
//       name: "Herbicide 2", // pe 2
//       dosagePerAcre: "250",
//       unit: "ml", // 'gram', 'kilogram','ml','litre'
//       dilutionRatioPerAcre: "150-200",
//       stage: "Stage 3", // Stage 1, Stage 2, Stage 3, Stage 4
//       sprayingTime: "Sunlight", // Evening, Afternoon, Sunlight, Night
//       applicationType: "Florial", // Basal,Florial
//       frequency: "2 times for 1 weeks", // 3 times for 2 weeks,2 times for 1 weeks,1 times for 3 weeks
//       weedsIds: [weed._id],
//     });
//     await herbicide.save();
//     weed.herbicidesIds.push(new ObjectId(herbicide._id));
//     await weed.save();
//     res.json({
//       weed,
//       herbicide,
//     });
//   } catch (error) {
//     console.log(error, "ERROR");
//   }
// });

//fill data for fungicide
// router.get("/fill-data", async (req, res) => {
//   try {
//     const disease = await new Disease({
//       name: "Disease3 ", // pest 2
//       fungicidesIds: [],
//       cropsIds: [new ObjectId("642abb7ceb25dc0bf93b525b")],
//     }).save();
//     const fungicide = new Fungicide({
//       name: "Fungicide3", // pe 2
//       dosagePerAcre: "500",
//       unit: "ml", // 'gram', 'kilogram','ml','litre'
//       dilutionRatioPerAcre: "150-200",
//       stage: "Stage 3", // Stage 1, Stage 2, Stage 3, Stage 4
//       sprayingTime: "Afternoon", // Evening, Afternoon, Sunlight, Night
//       applicationType: "Night", // Basal,Florial
//       frequency: "1 times for 3 weeks", // 3 times for 2 weeks,2 times for 1 weeks,1 times for 3 weeks
//       diseaseIds: [disease._id],
//     });
//     await fungicide.save();
//     disease.fungicidesIds.push(new ObjectId(fungicide._id));
//     await disease.save();
//     res.json({
//       disease,
//       fungicide,
//     });
//   } catch (error) {
//     console.log(error, "ERROR");
//   }
// });

// Get crop by localName and scientificName
router.post("/get-crop-name", async (req, res) => {
  try {
    // const { localName } = req.body;
    const { localName, scientificName, dateOfSowing } = req.body;
    // $or: [ {localName }, {scientificName} ]

    const crop = await Crop.find({ $or: [{ localName }, { scientificName }] });
    console.log(localName, scientificName, dateOfSowing, "UNIQUE");
    var day = 60 / 5;
    if (dateOfSowing) {
      return res.status(200).json(
        crop.map((_crop) => {
          const timeLine = {};
          let day = 0;
          Object.values(_crop._doc.cropStage).map((step) => {
            day += parseInt(step.Age);

            timeLine[step.Name_of_the_Stage.name] = moment(dateOfSowing)
              .add(day, "days")
              .toDate();
          });
          return {
            ..._crop.toObject(),
            timeLine,
          };
        })
      );
    }
    res.status(200).json(crop);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
});

// Get crop by localName and date

router.post("/cropStage", async (req, res) => {
  try {
    const { Stages } = req.body;
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

router.post("/get-crop-calendar", async (req, res) => {
  try {
    const { localName, createdAt } = req.body;

    const crop = await Crop.find({ $or: [{ localName }, { createdAt }] });
    res.status(200).json(crop);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// ====================================================== CALCULATOR ==============================================================================

// ================================================= FERTILIZER CALCULATOR ==============================================================================

const fertilizer = [
  {
    name: "DAP",
    nitrogenContain: "18",
    phosphorusContain: "46",
    potassiumContain: "0",
    zinc: "0",
  },
  {
    name: "MOP",
    nitrogenContain: "0",
    phosphorusContain: "0",
    potassiumContain: "60",
    zinc: "0",
  },
  {
    name: "urea",
    nitrogenContain: "46",
    phosphorusContain: "0",
    potassiumContain: "0",
    zinc: "0",
  },
  {
    name: "zincSulphate",
    nitrogenContain: "0",
    phosphorusContain: "0",
    potassiumContain: "0",
    zinc: "21",
  },
];

// //Recommended fertilizer
let recomment_fertilizer_phosphorous = fertilizer.filter(
  (val) => val.phosphorusContain > "20"
);

let recomment_fertilizer_nitrogen = fertilizer.filter(
  (val) => val.nitrogenContain > "20"
);

let recomment_fertilizer_potassium = fertilizer.filter(
  (val) => val.potassiumContain > "20"
);
let recomment_fertilizer_zinc = fertilizer.filter((val) => val.zinc > "20");

function nitrogen_calculator(
  required_nitrogen,
  recomment_fertilizer_nitrogen_contains
) {
  return (required_nitrogen / recomment_fertilizer_nitrogen_contains) * 100;
}

// STAGES: Basal,V4,V8

//Stage1 Fertilizer calculator
function Stage1FertilizerCalculater(crop, area) {
  let recommended_product_quantity_phosphorous =
    (crop.cultivationStage.basal.nutrientContains.p /
      recomment_fertilizer_phosphorous[0].phosphorusContain) *
    100;

  //Stage1 nitrogen calculator
  //Nitrogen contained
  let DAPNitrogenContains =
    (recomment_fertilizer_phosphorous[0].nitrogenContain / 100) *
    recommended_product_quantity_phosphorous;

  let totalNitrogenRequirement =
    crop.cultivationStage.basal.nutrientContains.n - DAPNitrogenContains;

  let recommended_product_quantity_nitrogen = nitrogen_calculator(
    totalNitrogenRequirement,
    recomment_fertilizer_nitrogen[0].nitrogenContain
  );

  //Stage1 pottasium calculator
  let recommended_product_quantity_pottasium =
    (crop.cultivationStage.basal.nutrientContains.k /
      recomment_fertilizer_potassium[0].potassiumContain) *
    100;

  //Stage1 zinc calculator
  let recommended_product_quantity_zinc =
    (crop.cultivationStage.basal.nutrientContains.Zn /
      recomment_fertilizer_zinc[0].zinc) *
    100;

  //Response format
  let phosphorous_prod_recommended = {
    name: recomment_fertilizer_phosphorous[0].name,
    quantity: recommended_product_quantity_phosphorous * area,
  };

  let nitrogen_prod_recommended = {
    name: recomment_fertilizer_nitrogen[0].name,
    quantity: recommended_product_quantity_nitrogen * area,
  };

  let pottasium_prod_recommended = {
    name: recomment_fertilizer_potassium[0].name,
    quantity: recommended_product_quantity_pottasium * area,
  };

  let zinc_prod_recommended = {
    name: recomment_fertilizer_zinc[0].name,
    quantity: recommended_product_quantity_zinc * area,
  };
  return {
    phosphorous_prod_recommended,
    nitrogen_prod_recommended,
    pottasium_prod_recommended,
    zinc_prod_recommended,
  };
}

//Stage2 Fertilizer calculator
function Stage2FertilizerCalculater(crop, area) {
  let recommended_product_quantity = nitrogen_calculator(
    crop.cultivationStage.V4.nutrientContains.n,
    recomment_fertilizer_nitrogen[0].nitrogenContain
  );
  return {
    name: recomment_fertilizer_nitrogen[0].name,
    quantity: recommended_product_quantity * area,
  };
}

//Stag3 Fertilizer calculator
function Stage3FertilizerCalculater(crop, area) {
  let recommended_product_quantity = nitrogen_calculator(
    crop.cultivationStage.V4.nutrientContains.n,
    recomment_fertilizer_nitrogen[0].nitrogenContain
  );
  return {
    name: recomment_fertilizer_nitrogen[0].name,
    quantity: recommended_product_quantity * area,
  };
}

router.post("/calculator", async (req, res) => {
  try {
    const { localName, area } = req.body;
    const crop = await Crop.findOne({ localName });

    let stage1_fertilizer_data = Stage1FertilizerCalculater(crop, area);
    let stage2_fertilizer_data = Stage2FertilizerCalculater(crop, area);
    let stage3_fertilizer_data = Stage3FertilizerCalculater(crop, area);

    res.status(200).json({
      STAGE1: {
        fertilizer: stage1_fertilizer_data,
        nutrients: ["Nitrogen", "Potassium", "Phosphorous", "Zinc"],
        cropStage: "Basal",
      },
      STAGE2: {
        fertilizer: stage2_fertilizer_data,
        nutrients: ["Nitrogen"],
        cropStage: "V4",
      },
      STAGE3: {
        fertilizer: stage3_fertilizer_data,
        nutrients: ["Nitrogen"],
        cropStage: "V8",
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// ========================================pesticide CALCULATOR===========================================================

// let recomment_fertilizer_phosphorous = fertilizer.filter(
//   (val) => val.phosphorusContain > "20"
// );

// let recomment_fertilizer_nitrogen = fertilizer.filter(
//   (val) => val.nitrogenContain > "20"
// );

// let recomment_fertilizer_potassium = fertilizer.filter(
//   (val) => val.potassiumContain > "20"
// );
// let recomment_fertilizer_zinc = fertilizer.filter((val) => val.zinc > "20");

// function nitrogen_calculator(
//   required_nitrogen,
//   recomment_fertilizer_nitrogen_contains
// ) {
//   return (required_nitrogen / recomment_fertilizer_nitrogen_contains) * 100;
// }

// let e1 = pesticide.filter(
//   (val) => val.Maize.Pest1Pesticide1 > "250"
// );

// let e2 = pesticide.filter(
//   (val) => val.Maize.Pest1Pesticide2 > "500"
// );

// let e3 = pesticide.filter(
//   (val) => val.Maize.Pest1Pesticide3 > "250"
// );
// function pesticide1_calculator(){
//   return(maize.pesticide1)*2
// }

const pesticide = [
  {
    name: "MaizePest1 Pesticide 1",
    Dosage_per_acre: "250",
    Dilution_Ratio: "150-200",
  },
  {
    name: "MaizePest1 Pesticide 2",
    Dosage_per_acre: "250",
    Dilution_Ratio: "150-200",
  },
  {
    name: "MaizePest1 Pesticide 3",
    Dosage_per_acre: "250",
    Dilution_Ratio: "150-200",
  },
];

function pesticide1_calculator(crop, area) {
  let Dosage = 250;
  return {
    quantity: Dosage * area,
  };
}
function pesticide2_calculator(crop, area) {
  let Dosage = 500;
  return {
    quantity: (Dosage * (area / 2)) / 2,
  };
}
function pesticide3_calculator(crop, area) {
  let Dosage = 500;
  return {
    quantity: (Dosage * area) / 2,
  };
}

router.post("/pesticide-calculator", async (req, res) => {
  try {
    const { localName, area } = req.body;
    const crop = await Crop.findOne({ localName });

    let E1_pesticide_data = pesticide1_calculator(crop, area);
    let E2_pesticide_data = pesticide2_calculator(crop, area);
    let E3_pesticide_data = pesticide3_calculator(crop, area);

    res.status(200).json({
      DilutionRatio: {
        water: "150-200",
      },
      E1: {
        // pesticide: E1_pesticide_data,
        cropStage: "MaizePest1Pesticde 1",
        calculation: E1_pesticide_data,
      },
      E2: {
        // pesticide: E2_pesticide_data,

        cropStage: "MaizePest1Pesticde 2",
        calculation: E2_pesticide_data,
      },
      E3: {
        // pesticide: E3_pesticide_data,

        cropStage: "MaizePest1Pesticde 3",
        calculation: E3_pesticide_data,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.get("/problems", (req, res) => {
  try {
    const [localName] = req.body;
    const problems = Crop.find(localName);
    res.json(problems);
  } catch (error) {}
});

module.exports = router;
