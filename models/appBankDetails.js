const mongoose = require("mongoose");

const BankDetailsSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true, // Ensure UID is unique
  },
  bankName: {
    type: String,
  },
  accountName: {
    type: String,
  },
  accountNumber: {
    type: String,
  },
  ifscCode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BankDetails", BankDetailsSchema);
