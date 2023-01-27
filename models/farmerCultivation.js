const mongoose = require("mongoose");

const FarmerCultivationSchema = new mongoose.Schema(
  {
    slotNumber: String,
    area: String,
    areaCode: String,
    areaType: String,
    crop: String,
    variety: String,
    dateOfSowing: { type: String, default: new Date().getTime() },
    adoptedSeason: String,
    currentStage: String,
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "farmer" },
    farmerId: mongoose.Types.ObjectId
  },
  { timestamps: true }
);

module.exports = mongoose.model("FarmerCultivation", FarmerCultivationSchema);
