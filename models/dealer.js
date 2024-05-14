const mongoose = require("mongoose");

const DealerSchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fullAddress: {
      type: String,
    },
    numberOfFarmers: {
      type: Number,
    },
    password: {
      type: String,
      // required: true,
    },
    mobile: {
      type: Number,
      required: true,
      // required: true,
    },
    organizationName: {
      type: String,
    },
    crops: [
      {
        type: String,
        required: true,
      },
    ],
    excel_data_download: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dealer", DealerSchema);
