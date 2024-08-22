const Field = require("../models/proField");

exports.addField = async (req, res) => {
  try {
    const { fieldId, geoLocation, contactNumber, sensorIds } = req.body;

    const field = new Field({ fieldId, geoLocation, contactNumber, sensorIds });
    await field.save();

    res.status(201).json({ message: "Field added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.updateField = async (req, res) => {
  try {
    const { fieldId } = req.params;
    const updatedData = req.body;

    const field = await Field.findOneAndUpdate({ fieldId }, updatedData, {
      new: true,
    });
    if (!field) {
      return res.status(404).json({ message: "Field not found" });
    }

    res.status(200).json({ message: "Field updated successfully", field });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getFieldByContact = async (req, res) => {
  try {
    const { contactNumber } = req.params;
    const fields = await Field.find({ contactNumber });

    if (fields.length === 0) {
      return res.status(404).json({ message: "No fields found" });
    }

    res.status(200).json(fields);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getFieldById = async (req, res) => {
  try {
    const { fieldId } = req.params;
    const field = await Field.findOne({ fieldId });

    if (!field) {
      return res.status(404).json({ message: "Field not found" });
    }

    res.status(200).json(field);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
