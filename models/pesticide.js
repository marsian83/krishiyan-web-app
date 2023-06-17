const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const pesticidesSchema = new Schema(
  {
    productId: Number,
    name: String,
    inventory: Number,
    type: String,
    dosagePerAcre: String,
    unit: String,
    dilutionRatioPerAcre: String,
    stage: String,
    sprayingTime: String,
    applicationType: String,
    frequency: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pesticides", pesticidesSchema);
