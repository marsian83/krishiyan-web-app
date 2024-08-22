const Sensor = require("../models/proSensor");

exports.addSensor = async (req, res) => {
  try {
    const {
      fieldId, // Updated key to match schema
      contactNumber,
      sensorId,
      N,
      P,
      K,
      pH,
      rainfall,
      geoLocation,
      date,
    } = req.body;

    const sensor = new Sensor({
      fieldId, // Updated key to match schema
      contactNumber,
      sensorId,
      N,
      P,
      K,
      pH,
      rainfall,
      geoLocation,
      date,
    });
    await sensor.save();

    res.status(201).json({ message: "Sensor added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.updateSensor = async (req, res) => {
  try {
    const { sensorId } = req.params;
    const updatedData = req.body;

    const sensor = await Sensor.findOneAndUpdate({ sensorId }, updatedData, {
      new: true,
    });
    if (!sensor) {
      return res.status(404).json({ message: "Sensor not found" });
    }

    res.status(200).json({ message: "Sensor updated successfully", sensor });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getSensorsByContact = async (req, res) => {
  try {
    const { contactNumber } = req.params;
    const sensors = await Sensor.find({ contactNumber });

    if (sensors.length === 0) {
      return res.status(404).json({ message: "No sensors found" });
    }

    res.status(200).json(sensors);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getSensorById = async (req, res) => {
  try {
    const { sensorId } = req.params;
    const sensor = await Sensor.findOne({ sensorId });

    if (!sensor) {
      return res.status(404).json({ message: "Sensor not found" });
    }

    res.status(200).json(sensor);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
