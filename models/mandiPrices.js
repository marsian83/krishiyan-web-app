const mongoose = require("mongoose");

const mandiPriceSchema = new mongoose.Schema({
  state: String,
  district: String,
  market: String,
  commodity: String,
  variety: String,
  grade: String,
  arrival_date: String,
  min_price: Number,
  max_price: Number,
  modal_price: Number,
});

const MandiPrice = mongoose.model("MandiPrice", mandiPriceSchema);

module.exports = MandiPrice;
