const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const weedsSchema = new Schema(
  {
    name: String,
    herbicidesIds: [
      {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Herbicides",
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

module.exports = mongoose.model("Weeds", weedsSchema);
