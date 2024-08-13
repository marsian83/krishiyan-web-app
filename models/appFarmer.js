const mongoose = require("mongoose");

const appFarmerSchema = new mongoose.Schema(
  {
    dealerNumber: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    whatsappNumber: {
      type: String,
      required: true,
      unique: true,
    },
    totalOwnedFarm: {
      type: Number,
      required: true,
    },
    geoLocationOwnedFarm: {
      type: String,
      required: true,
    },
    totalLeaseFarm: {
      type: Number,
      required: true,
    },
    geoLocationLeaseFarm: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    village: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    typeOfCultivationPractice: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    accountName: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
    ifscCode: {
      type: String,
      required: true,
    },
    pan: {
      type: String,
      required: true,
    },
    aadhaarNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("appFarmer", appFarmerSchema);
