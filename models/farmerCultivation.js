const mongoose = require("mongoose");

const FarmerCultivationSchema = new mongoose.Schema(
  {
    // slotNumber: String,
    area: String,
    // areaCode: String,
    // areaType: String,
    crop: String,
    variety: String,
    dateOfSowing: { type: Date },
    soilType: {
      type: String,
      enum: ["RED", "BLACK"],
      default: "BLACK",
    },
    irrigationType: {
      type: String,
      enum: ["RAINFALL", "CANAL", "Wetland", "Rain fed land"],
      default: "RAINFALL",
    },
    fertilizer: {
      type: String,
      enum: ["ORGANIC", "INORGANIC", "HYBRID", "BOTH"],
      default: "RAINFALL",
    },
    // adoptedSeason: String,
    // currentStage: String,
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "farmer" },
    farmerId: mongoose.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model("FarmerCultivation", FarmerCultivationSchema);
