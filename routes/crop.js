const express = require("express");
const router = express.Router();
const Crop = require("../models/crop");

// ===================================================== CROP ADVISORY =======================================================================

//Create new crop
router.post("/", async (req, res) => {
  const information = req.body;
  const newCrop = new Crop({
    ...information,
  });
  try {
    await newCrop.save();
    res.status(201).json({
      message: "Crop created!",
      crop: newCrop,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
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

//Recommended fertilizer
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
        cropStage:'Basal'
      },
      STAGE2: {
        fertilizer: stage2_fertilizer_data,
        nutrients: ["Nitrogen"],
        cropStage:'V4'
      },
      STAGE3: {
        fertilizer: stage3_fertilizer_data,
        nutrients: ["Nitrogen"],
        cropStage:'V8'
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;
