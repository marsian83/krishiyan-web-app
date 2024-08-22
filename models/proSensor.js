const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
  fieldId: { type: String, required: true }, // Use fieldId instead of fid
  contactNumber: { type: String, required: true },
  sensorId: { type: String, required: true },
  N: { type: Number, required: true }, // Nitrogen level
  P: { type: Number, required: true }, // Phosphorus level
  K: { type: Number, required: true }, // Potassium level
  pH: { type: Number, required: true }, // pH level
  rainfall: { type: Number, required: true }, // Rainfall level
  geoLocation: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  date: { type: Date, default: Date.now }, // Date of the sensor data
});

module.exports = mongoose.model("Sensor", sensorSchema);
