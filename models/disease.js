const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const diseasesSchema = new Schema(
  {
    name: String,
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
