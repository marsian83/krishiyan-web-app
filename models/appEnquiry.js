const mongoose = require("mongoose");

const CommoditySchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true, // UID is required
  },
  operation: {
    type: String,
  },
  commodity: {
    type: String,
  },
  variety: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  moisture: {
    type: String,
  },
  localGradeSpecification: {
    type: String,
  },
  size: {
    type: String,
  },
  count: {
    type: String,
  },
  price: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  origin: {
    type: String,
  },
  location: {
    type: String,
  },
  photoVideoLink: {
    type: String,
  },
  comments: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false, // Default value for verified is false
  },
});

module.exports = mongoose.model("Commodity", CommoditySchema);
