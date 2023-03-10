const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const fungicidesSchema = new Schema(
  {
    diseaseIds: [
      {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Diseases",
      },
    ],
    name: String,
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

module.exports = mongoose.model("Fungicides", fungicidesSchema);
