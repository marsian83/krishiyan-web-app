const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const diseasesSchema = new Schema(
  {
    name: String,
    images: [{ type: String }],
    description: { type: String },
    causalAgent: String,
    symptoms: [String],
    charecteristic: String,
    fungicidesIds: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Fungicides",
      },
    ],
    cropsIds: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Crop",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Diseases", diseasesSchema);
