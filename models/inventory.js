const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
  measurement: {
    type: String,
    required: true,
  },
  volume: {
    type: Number,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  hsn: {
    type: String,
    required: true,
  },
  tax: {
    type: String,
    required: true,
  },
  date_of_purchase: {
    type: Date,
    require: true,
  },
  expiry_date: {
    type: Date,
    require: true,
  },
});

module.exports = mongoose.model("Inventory", inventorySchema);
