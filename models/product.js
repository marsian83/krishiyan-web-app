const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    tradeName: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      enum: ["FERTILIZER", "PESTICIDE", "FUNGICIDE", "HERBICIDE"], //
      default: "",
      required: true,
    },
    measuringUnit: {
      type: String,
      required: true,
    },
    volume: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
