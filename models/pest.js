const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const pestsSchema = new Schema(
  {
    name: String,
    pesticidesIds: [
      {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Pesticides",
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

module.exports = mongoose.model("Pests", pestsSchema);
