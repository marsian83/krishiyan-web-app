const mongoose = require("mongoose");

// const varietyOption = {
//   cultivar: String,
//   aicprCenter: String,
//   mode: String, //public/private
//   notificationNumber: String,
//   areaOfAdaption: String,
//   averageYeild: String,
//   season: String,
//   type: String,
// };

const cultivation_stage = {
  basal: {
    description: String,
    nutrientContains: {
      n: String,
      p: String,
      k: String,
      Zn: String,
    },
  },
  V4: {
    description: String,
    nutrientContains: {
      n: String,
      p: String,
      k: String,
      Zn: String,
    },
  },
  V8: {
    description: String,
    nutrientContains: {
      n: String,
      p: String,
      k: String,
      Zn: String,
    },
  },
  VT: String,
  GF: String,
};

const CropSchema = new mongoose.Schema(
  {
    localName: {
      type: String,
      required: true,
    },
    scientificName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cropTypes: {
      type: Array,
    },
    // varieties: [
    //   varietyOption
    // ],
    states: {
      type: Array,
    },
    averageProductivity: {
      type: String,
      // required: true,
    },
    climate: {
      type: Array,
    },
    temperature: {
      type: String,
      // required: true,
    },
    soil: {
      type: String,
      // required: true,
    },
    ph: {
      type: String,
      // required: true,
    },
    organicMatter: {
      type: String,
      // required: true,
    },
    season: {
      type: Array,
    },
    seedRate: {
      type: String,
      // required: true,
    },
    spacing: {
      type: String,
      // required: true,
    },
    beforeSowing: {
      type: String,
      // required: true,
    },
    afterSowing: {
      type: String,
      // required: true,
    },
    seedTreatment: {
      type: String,
      // required: true,
    },
    nutrientMgmt: {
      type: Array,
    },
    others: {
      type: String,
      // required: true,
    },
    nitrogen: {
      type: String,
      // required: true,
    },
    phosporous: {
      type: String,
      // required: true,
    },
    potash: {
      type: String,
      // required: true,
    },
    zinc: {
      type: String,
      // required: true,
    },
    pestMgmt: [
      {
        name: String,
        image: String,
        description: String,
        solution: [
          {
            name: String,
            prodImg: String,
          },
        ], //recommended products
      },
    ],
    irrigationMgmt: [
      {
        name: String,
        image: String,
        description: String,
        solution: [
          {
            name: String,
            prodImg: String,
          },
        ], //recommended products
      },
    ],
    cultivationStage: cultivation_stage,  //Cultivation Stages
    rainfall: String,
    image: String,
    diseaseMgmt: [
      {
        name: String,
        image: String,
        description: String,
        solution: [
          {
            name: String,
            prodImg: String,
          },
        ], //recommended products
      },
    ],
    harvest: {
      type: String,
      // required: true,
    },
    postHarvest: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crop", CropSchema);
