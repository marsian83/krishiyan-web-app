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
    enum: ["Organic", "In Organic", "Both"],
    default: "NON-ORGANIC",
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
