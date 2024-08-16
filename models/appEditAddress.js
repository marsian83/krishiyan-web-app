const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    pincode: {
      type: String,
    },
    district: {
      type: String,
    },
    state: {
      type: String,
    },
    address: {
      type: String,
    },
    village: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Address", AddressSchema);
