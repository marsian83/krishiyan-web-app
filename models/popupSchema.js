// PopupModel.js
const mongoose = require("mongoose");

const popupSchema = new mongoose.Schema({
  title: String,
  price: String,
  quantity: String,
  moisture: String,
  foreignMatter: String,
  fibre: String,
  debris: String,
  protein: String,
  description: String,
});

module.exports = mongoose.model("Popup", popupSchema);
