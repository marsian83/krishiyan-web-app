const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },

    otp: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Otp", OtpSchema);
