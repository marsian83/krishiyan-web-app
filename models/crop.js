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
    image: String,
    description: String,
    Description: String,
    Disease_Infection: {
      Data: String,
      images: [String],
    },
    Pest_infestation: {
      Data: String,
      image: String,
    },
    Fertilizer: {
      Data: String,
      images: {
        image1: "",
        image2: "",
      },
    },
    Weed_mangement: {
      Data: String,
      image: String,
    },
    interculturalOperation: String,
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
const variety_information = [
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
    nutrient: String,
    Notable_Symptoms: String,
    image: String,
    Solution: String,
    description: String,
  },
];
const Pest_Management = {
  value: {
    Value1: {
      name_pest: String,
      scientificName: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
    },
    Value2: {
      name_pest: String,
      scientificName: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
    },
    Value3: {
      name_pest: String,
      scientificName: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
    },
    Value4: {
      name_pest: String,
      scientificName: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
    },
    Value5: {
      name_pest: String,
      scientificName: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
    },
    Value6: {
      name_pest: String,
      scientificName: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
    },
    Value7: {
      name_pest: String,
      scientificName: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
    },
    Value8: {
      name_pest: String,
      scientificName: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
    },
    Value9: {
      name_pest: String,
      scientificName: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
    },
  },
};

const disease_Management = {
  value: {
    value1: {
      name: String,
      causal: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
      Method_treatment: String,
    },
    value2: {
      name: String,
      causal: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
      Method_treatment: String,
    },
    value3: {
      name: String,
      causal: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
      Method_treatment: String,
    },
    value4: {
      name: String,
      causal: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
      Method_treatment: String,
    },
    value5: {
      name: String,
      causal: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
      Method_treatment: String,
    },
    value6: {
      name: String,
      causal: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
      Method_treatment: String,
    },
    value7: {
      name: String,
      causal: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
      Method_treatment: String,
    },
    value8: {
      name: String,
      causal: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
      Method_treatment: String,
    },
    value9: {
      name: String,
      causal: String,
      characteristic: String,
      Notable_Symptoms: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
      Solution: String,
      Method_treatment: String,
    },
  },
};
const nutrient_Mgmt = {
  value: {
    value1: {
      nutrient: String,
      Dosage: String,
      age: String,
      Method_application: String,
    },
    value2: {
      nutrient: String,
      Dosage: String,
      age: String,
      Method_application: String,
    },
    value3: {
      nutrient: String,
      Dosage: String,
      age: String,
      Method_application: String,
    },
    value4: {
      nutrient: String,
      Dosage: String,
      age: String,
      Method_application: String,
    },
  },
};

const Weed_Mangement = {
  value: {
    value1: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value2: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value3: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value4: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value5: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value6: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value7: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value7: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value8: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value9: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value10: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value11: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value12: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value13: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value14: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
    value15: {
      type_weed: String,
      weed_name: String,
      scientificName: String,
      image: String,
      solution: String,
      reccomendation: String,
    },
  },
};
const weather_injuries = [
  {
    type_injury: String,
    causes: String,
    symptom: String,
    image: String,
    overcom: String,
  },
];
const Harvest = {
  Physiological: String,
  index: String,
  Average: String,
  Conditions_during: String,
  Post_Harvest: String,
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
  Cost_protectopn: {
    description: String,
    Cost_Component: String,
  },
  Cots_Fertilizer: {
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

    varietyInformation: variety_information,
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
    cultivationStage: cultivation_stage, //Cultivation Stages
    rainfall: String,
    image: String,

    PestManagement: Pest_Management,
    diseaseManagement: disease_Management,
    nutrientManagement: nutrient_Mgmt,
    WeedMangement: Weed_Mangement,
    weatherInjuries: weather_injuries,
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
        required: true,
        ref: "Varities",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crop", CropSchema);
