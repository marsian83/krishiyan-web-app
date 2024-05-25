const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    unique: true,
    required: true,
  },
  state: String,
  city: String,
  zip: String,
  street: String,
  mobileIsWhatsapp: {
    type: Boolean,
    required: true,
    default: false,
  },
  totalLandArea: String,
  dealer_farmer_relation: String,

  plantation_type: {
    type: String,

    default: "NON-ORGANIC",
  },
  dealer_mobile: {
    type: String,
    required: true,
    default: "0000000000",
  },
  crops: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Registration", registrationSchema);
