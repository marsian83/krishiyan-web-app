const mongoose = require("mongoose");

const addressInfo = {
  state: String,
  city: String,
  zip: String,
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
    creditLimit:{
      type:Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Farmer", FarmerSchema);
