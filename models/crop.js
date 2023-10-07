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
    importantActivity: String,
    diseaseManagement: String,

    interculturalOperation: String,

    synpfomImage: String,
  },
  V4: {
    description: String,
    nutrientContains: {
      n: String,
      p: String,
      k: String,
      Zn: String,
    },
    importantActivity: String,
    diseaseManagement: String,

    interculturalOperation: String,

    synpfomImage: String,
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
  GF: {
    //  description:String,
    importantActivity: String,
    diseaseManagement: String,

    interculturalOperation: String,

    synpfomImage: String,
  },
};

const crop_stage = [
  {
    sn: Number,
    name: String,
    images: [String],
    lowerLimit_age: Number,
    upperLimit_age: Number,
    description: String,
    disease: [{ type: mongoose.Schema.Types.Mixed }],
    pest: [{ type: mongoose.Schema.Types.Mixed }],
    weed: [{ type: mongoose.Schema.Types.Mixed }],
    Fertilizer: {
      Data: String,
      Dosage: String,
      images: [{ type: String }],
    },
    interculturalOperation: { type: String, default: "" },
  },
];
const general_Information = {
  Kharif: String,
  Rabi: String,
  Zaid: String,
  Optimum_temperature: String,
  Rainfall_requirement: String,
  Recommended_soil: String,
  pH_soil: String,
  Spacing: String,
  Seed_rate: String,
  Average_yield: String,
  Intercrop: String,
};
const variety = [
  {
    name: String,
    Area_Adaptation: String,
    Average_yield: String,
    Type_variety: String,
    Speciality: String,
  },
];
const presowing_practices = {
  Land_Preparation: String,
  Seed_treatment: {
    nameOfChemical: String,
    Dosage: String,
  },
  Intercultural_Operations: [String],
  Soil_Conditions: String,
};
const nutrient = [
  {
    name: String,
    deficiency: {
      Notable_Symptoms: String,
      images: [String],
      Solution: String,
    },
    role: String,
    description: String,
    Dosage: String,
    age: String,
    Method_application: String,
  },
];
const Pest_Management = [
  {
    name: String,
    scientificName: String,
    characteristic: String,
    symptoms: String,
    images: [String],
    solutions: String,
  },
];

const disease_Management = [
  {
    name: String,
    causal: String,
    characteristics: String,
    symptoms: String,
    images: [String ],
    solutions: String,
    treatmentMethod: String,
  },
];

const weedManagement = {
  category: String,
  name: String,
  scientificName: String,
  image: String,
  solutions: String,
  recommendation: String,
};
const weatherInjuries = [
  {
    type_injury: String,
    causes: String,
    symptoms: String,
    image: String,
    overcome: String,
  },
];
const Harvest = {
  Maturity: String,
  index: String,
  Average: String,
  Conditions_during: String,
  Post_Harvest: [{ losses: String, images: [String] }],
  prevent: String,
  images: [{ type: String }],
};

const Irrigation_Mgmt = {
  cost_seed_materials: {
    description: String,
    Cost_Component: String,
  },
  Land_preparation: {
    description: String,
    Cost_Component: String,
  },
  Cost_sowing: {
    description: String,
    Cost_Component: String,
  },
  Cost_protection: {
    description: String,
    Cost_Component: String,
  },
  Cost_Fertilizer: {
    description: String,
    Cost_Component: String,
  },
  Cost_weeding: {
    description: String,
    Cost_Component: String,
  },
  Cost_Pesticides: {
    description: String,
    Cost_Component: String,
  },
  Cost_miscellaneous: {
    description: String,
    Cost_Component: String,
  },
  Cost_Harvesting: {
    description: String,
    Cost_Component: String,
  },
  Cost_Transportation: {
    description: String,
    Cost_Component: String,
  },
  Total_cultivation: {
    description: String,
    Cost_Component: String,
  },
  Total_production: {
    description: String,
    Cost_Component: String,
  },
  gross: {
    description: String,
  },
  Net_Profit: {
    description: String,
    Cost_Component: String,
  },
};
const Faq = [{ question: String, answer: String }];
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
    faq: Faq,

    stages: crop_stage, //sn is serial number
    newHarvest: Harvest,
    presowingPractices: presowing_practices,
    cropCycle: { type: Number },
    cropStage: crop_stage, // bhayankar
    generalInformation: general_Information,
    nutrient: nutrient,
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
    organicMatter: {
      type: String,
      // required: true,
    },
    season: {
      type: Array,
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
    // [nitrogen: {
    //   type: String,
    //   // required: true,
    // },
    // phosporous: {
    //   type: String,
    //   // required: true,
    // },
    // potash: {
    //   type: String,
    //   // required: true,
    // },
    // zinc: {
    //   type: String,
    //   // required: true,]
    // },

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
    irrigation: [
      {
        criticalStage: String,
        age: String,
        methodology: String,
        operations: String,
      },
    ],
    cultivationStage: cultivation_stage, //Cultivation Stages
    rainfall: String,
    image: String,

    pestManagement: Pest_Management,
    diseaseManagement: disease_Management,
    // nutrientManagement: nutrient_Mgmt,
    weedManagement: [weedManagement],
    weatherInjuries: weatherInjuries,
    IrrigationMgmt: Irrigation_Mgmt,
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
    dateOfSowing: {
      type: String,
      // required: true,
    },
    postHarvest: {
      type: String,
      // required: true,
    },
    varitiesId: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Varities",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crop", CropSchema);
