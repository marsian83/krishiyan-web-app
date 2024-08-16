const mongoose = require("mongoose");

const OtherDetailsSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  panCardNumber: {
    type: String,
  },
  gstNumber: {
    type: String,
  },
  udyamNumber: {
    type: String,
  },
  aadhaarNumber: {
    type: String,
  },
});

module.exports = mongoose.model("OtherDetails", OtherDetailsSchema);
