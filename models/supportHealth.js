const mongoose = require("mongoose");

const SupportHealthSchema = new mongoose.Schema(
  {
    crop: {
      type: String,
    },
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "farmer" },
    farmerId: mongoose.Types.ObjectId,
    category: {
      type: String,
      enum: ["Pest", "Disease", "Weed", "Deficiency"],
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SupportHealth", SupportHealthSchema);
