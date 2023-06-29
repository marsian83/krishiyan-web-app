const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const varitiesSchema = new Schema(
  {
    localName: {
      type: String,
    },
    scientificName: {
      type: String,
    },
    nameOfvariety: {
      type: String,
    },
    areaOfadadoption: {
      type: String,
    },
    productCondition: {
      type: String,
    },
    salientFeatures: {
      type: String,
    },
    Parentage: {
      type: String,
    },
    DevelopedBy: {
      type: String,
    },
    ScientistsInvolved: {
      type: String,
    },
    Notification: [
      {
        Number: {
          type: String,
        },
        Date: Date,
      },
    ],
    Yield: [
      {
        Av: {
          type: Number,
        },
        Pot: {
          type: String,
        },
      },
    ],
    SpecialFeatures: {
      type: String,
    },
    cropCycle: {
      type: String,
    },
    avgYieldPerAcre: {
      type: String,
    },
    costPerAcre: {
      type: String,
    },
    expectedPrice: {
      type: String,
    },
    maturityIndex: {
      type: String,
    },
    cropId: mongoose.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Varities", varitiesSchema);
