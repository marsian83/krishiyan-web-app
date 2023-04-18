const mongoose = require("mongoose");

const DealerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      unique: true,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dealer", DealerSchema);
