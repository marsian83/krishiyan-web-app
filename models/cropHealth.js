const mongoose = require("mongoose");

const HealthSchema = new mongoose.Schema(
  {
    cropsIds: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Crop",
      },
    ],

    category: {
      type: String,
      enum: ["pest", "Disease", "Weed", "Deficiency"],
    },
    description: {
      type: String,
    },  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Heath", HealthSchema);
