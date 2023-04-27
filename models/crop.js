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

const crop_stage = {
  Stage1: {
    Name_of_the_Stage: {
      name: String,
      image: String,
    },
    Description: String,
    Disease_Infection: {
      Data: String,
      images: {
        image1: String,
        image2: String,
        image3: String,
      },
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
  Stage2: {
    Name_of_the_Stage: {
      name: String,
      image: String,
    },
    Description: String,
    Disease_Infection: {
      Data: String,
      image: String,
    },
    Pest_infestation: {
      Data: String,
      image: String,
    },
    Fertilizer: {
      Data: String,
      image: String,
    },
    interculturalOperation: String,
  },
  Stage3: {
    Name_of_the_Stage: {
      name: String,
      image: String,
    },
    Description: String,
    Disease_Infection: {
      Data: String,
      image: String,
    },
    Pest_infestation: {
      Data: String,
      image: String,
    },
    Fertilizer: {
      Data: String,
      image: String,
    },
    interculturalOperation: String,
  },
  Stage4: {
    Name_of_the_Stage: {
      name: String,
      image: String,
    },
    Description: String,
    Disease_Infection: {
      Data: String,
      image: String,
    },
    Pest_infestation: {
      Data: String,
      image: String,
    },
    Fertilizer: {
      Data: String,
      image: String,
    },
    interculturalOperation: String,
  },
  Stage5: {
    Name_of_the_Stage: {
      name: String,
      image: String,
    },
    Description: String,
    Disease_Infection: {
      Data: String,
      image: String,
    },
    Pest_infestation: {
      Data: String,
      image: String,
    },
    Fertilizer: {
      Data: String,
      image: String,
    },
    interculturalOperation: String,
  },
  Stage6: {
    Name_of_the_Stage: {
      name: String,
      image: String,
    },
    Description: String,
    Disease_Infection: {
      Data: String,
      image: String,
    },
    Pest_infestation: {
      Data: String,
      image: String,
    },
    Fertilizer: {
      Data: String,
      image: String,
    },
    interculturalOperation: String,
  },
  Stage7: {
    Name_of_the_Stage: {
      name: String,
      image: String,
    },
    Description: String,
    Disease_Infection: {
      Data: String,
      image: String,
    },
    Pest_infestation: {
      Data: String,
      image: String,
    },
    Fertilizer: {
      Data: String,
      image: {
        image1: "",
        image2: "",
      },
    },
    interculturalOperation: String,
  },
  Stage8: {
    Name_of_the_Stage: {
      name: String,
      image: String,
    },
    Description: String,
    Disease_Infection: {
      Data: String,
      image: String,
    },
    Pest_infestation: {
      Data: String,
      image: String,
    },
    Fertilizer: {
      Data: String,
      image: String,
    },
    interculturalOperation: String,
  },
};

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
const variety_information = {
  value: {
    value1: {
      Name: String,
      Area_Adaptation: String,
      Average_yield: String,
      Type_variety: String,
      Speciality: String,
    },
    value2: {
      Name: String,
      Area_Adaptation: String,
      Average_yield: String,
      Type_variety: String,
      Speciality: String,
    },
    value3: {
      Name: String,
      Area_Adaptation: String,
      Average_yield: String,
      Type_variety: String,
      Speciality: String,
    },
    value4: {
      Name: String,
      Area_Adaptation: String,
      Average_yield: String,
      Type_variety: String,
      Speciality: String,
    },
    value5: {
      Name: String,
      Area_Adaptation: String,
      Average_yield: String,
      Type_variety: String,
      Speciality: String,
    },
    value6: {
      Name: String,
      Area_Adaptation: String,
      Average_yield: String,
      Type_variety: String,
      Speciality: String,
    },
    value7: {
      Name: String,
      Area_Adaptation: String,
      Average_yield: String,
      Type_variety: String,
      Speciality: String,
    },
    value8: {
      Name: String,
      Area_Adaptation: String,
      Average_yield: String,
      Type_variety: String,
      Speciality: String,
    },
    value9: {
      Name: String,
      Area_Adaptation: String,
      Average_yield: String,
      Type_variety: String,
      Speciality: String,
    },
    value10: {
      Name: String,
      Area_Adaptation: String,
      Average_yield: String,
      Type_variety: String,
      Speciality: String,
    },
    value11: {
      Name: String,
      Area_Adaptation: String,
      Average_yield: String,
      Type_variety: String,
      Speciality: String,
    },
  },
};
const presowing_practices = {
  Land_Preparation: String,
  Seed_treatment: {
    nameOfChemical: String,
    Dosage: String,
  },
  Pre_sowing: String,
  Soil_Conditions: String,
};
const Nutient = {
  value1: {
    Nutient1: String,
    Notable_Symptoms: String,
    image: String,
    Solution: String,
    description: String,
  },
  value2: {
    Nutient1: String,
    Notable_Symptoms: String,
    image: String,
    Solution: String,
    description: String,
  },
  value3: {
    Nutient1: String,
    Notable_Symptoms: String,
    image: String,
    Solution: String,
    description: String,
  },
  value4: {
    Nutient1: String,
    Notable_Symptoms: String,
    image: String,
    Solution: String,
    description: String,
  },
  value5: {
    Nutient1: String,
    Notable_Symptoms: String,
    image: String,
    Solution: String,
    description: String,
  },
  value6: {
    Nutient1: String,
    Notable_Symptoms: String,
    image: String,
    Solution: String,
    description: String,
  },
  value7: {
    Nutient1: String,
    Notable_Symptoms: String,
    image: String,
    Solution: String,
    description: String,
  },
  value8: {
    Nutient1: String,
    Notable_Symptoms: String,
    image: String,
    Solution: String,
    description: String,
  },
  value9: {
    Nutient1: String,
    Notable_Symptoms: String,
    image: String,
    Solution: String,
    description: String,
  },
  value10: {
    Nutient1: String,
    Notable_Symptoms: String,
    image: String,
    Solution: String,
    description: String,
  },
  value11: {
    Nutient1: String,
    Notable_Symptoms: String,
    image: String,
    Solution: String,
    description: String,
  },
};
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
      Nutient: String,
      Dosage: String,
      age: String,
      Method_application: String,
    },
    value2: {
      Nutient: String,
      Dosage: String,
      age: String,
      Method_application: String,
    },
    value3: {
      Nutient: String,
      Dosage: String,
      age: String,
      Method_application: String,
    },
    value4: {
      Nutient: String,
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
const weather_injuries = {
  value: {
    value1: {
      type_injury: String,
      causes: String,
      symptom: String,
      image: String,
      overcom: String,
    },
    value2: {
      type_injury: String,
      causes: String,
      symptom: String,
      image: String,
      overcom: String,
    },
    value3: {
      type_injury: String,
      causes: String,
      symptom: String,
      image: String,
      overcom: String,
    },
    value4: {
      type_injury: String,
      causes: String,
      symptom: String,
      image: String,
      overcom: String,
    },
  },
};
const Harvest = {
  Physiological: String,
  index: String,
  Average: String,
  Conditions_during: String,
  Post_Harvest: String,
  prevent: String,
  images: {
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
  },
};

const Irrigation_Mgmt = {
  cost_seed_materials: {
    discription: String,
    Cost_Component: String,
  },
  Land_preparation: {
    discription: String,
    Cost_Component: String,
  },
  Cost_sowing: {
    discription: String,
    Cost_Component: String,
  },
  Cost_protectopn: {
    discription: String,
    Cost_Component: String,
  },
  Cots_Fertilizer: {
    discription: String,
    Cost_Component: String,
  },
  Cost_weeding: {
    discription: String,
    Cost_Component: String,
  },
  Cost_Pesticides: {
    discription: String,
    Cost_Component: String,
  },
  Cost_mischallaneous: {
    discription: String,
    Cost_Component: String,
  },
  Cost_Harvesting: {
    discription: String,
    Cost_Component: String,
  },
  Cost_Transportation: {
    discription: String,
    Cost_Component: String,
  },
  Total_cultivation: {
    discription: String,
    Cost_Component: String,
  },
  Total_production: {
    discription: String,
    Cost_Component: String,
  },
  gross: {
    discription: String,
  },
  Net_Profit: {
    discription: String,
    Cost_Component: String,
  },
};
const Faq = {
  value: {
    value1: {
      data: String,
      answer: String,
    },
    value2: {
      data: String,
      answer: String,
    },
    value3: {
      data: String,
      answer: String,
    },
    value4: {
      data: String,
      answer: String,
    },
    value5: {
      data: String,
      answer: String,
    },
    value6: {
      data: String,
      answer: String,
    },
    value7: {
      data: String,
      answer: String,
    },
    value8: {
      data: String,
      answer: String,
    },
    value9: {
      data: String,
      answer: String,
    },
    value10: {
      data: String,
      answer: String,
    },
    value11: {
      data: String,
      answer: String,
    },
    value12: {
      data: String,
      answer: String,
    },
    value13: {
      data: String,
      answer: String,
    },
    value14: {
      data: String,
      answer: String,
    },
    value15: {
      data: String,
      answer: String,
    },
    value16: {
      data: String,
      answer: String,
    },
    value17: {
      data: String,
      answer: String,
    },
    value18: {
      data: String,
      answer: String,
    },
    value19: {
      data: String,
      answer: String,
    },
    value20: {
      data: String,
      answer: String,
    },
    value21: {
      data: String,
      answer: String,
    },
    value22: {
      data: String,
      answer: String,
    },
    value23: {
      data: String,
      answer: String,
    },
    value24: {
      data: String,
      answer: String,
    },
  },
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
    //snowming time
    kharif: {
      type: String,
    },
    rabi: {
      type: String,
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
    cropCycle: { type: String, default: "120" },
    cropStage: crop_stage,
    generalInformation: general_Information,
    varietyInformation: variety_information,
    presowingPractices: presowing_practices,
    nutient: Nutient,
    PestManagement: Pest_Management,
    diseaseManagement: disease_Management,
    nutrientManagement: nutrient_Mgmt,
    WeedMangement: Weed_Mangement,
    weatherInjuries: weather_injuries,
    newHarvest: Harvest,
    IrrigationMgmt: Irrigation_Mgmt,
    faq: Faq,
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
