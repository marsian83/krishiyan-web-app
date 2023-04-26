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
    FuturePrice: { type: Number, default: "18500" },
    expireDateofSowing: { type: Date },
    soilType: {
      type: String,
      enum: ["RED", "BLACK"],
      default: "BLACK",
    },
    months: { type: Number },
    costOfCultivationPerAcre: { type: Number, default: "20000" },
    irrigationType: {
      type: String,
      enum: ["RAINFALL", "CANAL", "Wetland", "Rain fed land"],
      default: "RAINFALL",
    },
    harvestStatus: {
      type: String,
      enum: ["In-progress", "Done"],
      default: "In-progress",
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
