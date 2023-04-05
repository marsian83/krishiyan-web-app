const mongoose = require("mongoose");

const addressInfo = {
  state: String,
  city: String,
  zip: String,
  street: String,
};

const FarmerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      unique: true,
      required: true,
    },
    mobileIsWhatsapp: {
      type: Boolean,
      required: true,
      default: false,
    },
    address: addressInfo,
    totalLandArea: {
      type: Number,
      required: true,
    },
    dealer_farmer_relation: {
      type: Number,
      required: true,
    },
    plantation_type: {
      type: String,
      enum: ["ORGANIC", "NON-ORGANIC", "BOTH"],
      default: "NON-ORGANIC",
    },
    cultivationData: [
      {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "FarmerCultivation",
      },
    ],
    creditData: [
      {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Credit",
      },
    ],
    creditLimit: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Dealer",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Farmer", FarmerSchema);
