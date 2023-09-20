const mongoose = require("mongoose");

const crop_stage = [
  {
    sn: Number,
    name: String,
    images: [String],
    lowerLimit_age: Number,
    upperLimit_age: Number,
    description: String,
    disease: [{ type: mongoose.Schema.Types.Mixed }],
    pest: [{ type: mongoose.Schema.Types.Mixed }],
    weed: [{ type: mongoose.Schema.Types.Mixed }],
    disease_link: String,
    weed_link: String,
    pest_link: String,
    Fertilizer: {
      Data: String,
      Dosage: String,
      images: [{ type: String }],
    },
    interculturalOperation: { type: String, default: "" },
  },
];

const cropCalendarSchema = new mongoose.Schema(
  {
    crop: {
      type: mongoose.Schema.ObjectId,
      ref: "Crop",
    },
    stages: crop_stage,
  },
  { timestamps: true }
);

module.exports = mongoose.model("CropCalendar", cropCalendarSchema);
