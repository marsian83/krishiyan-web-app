const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  fieldId: { type: String, required: true },
  geoLocation: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  contactNumber: { type: String, required: true },
  sensorIds: [{ type: String }],
});

module.exports = mongoose.model("Field", fieldSchema);
