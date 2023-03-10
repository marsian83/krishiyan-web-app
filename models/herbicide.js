const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const herbicidesSchema = new Schema(
  {
    weedsIds: [
      {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Weeds",
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

module.exports = mongoose.model("Herbicides", herbicidesSchema);
