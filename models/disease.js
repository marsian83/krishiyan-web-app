const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const diseasesSchema = new Schema(
  {
    name: String,
    images: [{ type: String }],
    description: { type: String },
    fungicidesIds: [
      {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Fungicides",
      },
    ],
    cropsIds: [
      {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Crop",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Diseases", diseasesSchema);
