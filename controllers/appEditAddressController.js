const Address = require("../models/appEditAddress");

// Create or Update Address
exports.createOrUpdateAddress = async (req, res) => {
  try {
    const { uid, pincode, district, state, address, village } = req.body;

    let addressEntry = await Address.findOneAndUpdate(
      { uid },
      { pincode, district, state, address, village },
      { new: true, upsert: true } // upsert creates a new document if no document matches the query
    );

    const message = addressEntry.wasNew
      ? "Address created successfully"
      : "Address updated successfully";

    res.status(201).send({
      success: true,
      message,
      data: { address: addressEntry },
    });
  } catch (error) {
    console.error("Error creating or updating address:", error);
    res.status(400).send({
      success: false,
      message: "Error creating or updating address",
      error: {
        code: "ADDRESS_CREATION_OR_UPDATE_ERROR",
        description: error.message,
      },
    });
  }
};

// Get Address by UID
exports.getAddressByUID = async (req, res) => {
  try {
    const { uid } = req.params;

    const addressEntry = await Address.findOne({ uid });

    if (!addressEntry) {
      return res.status(404).send({
        success: false,
        message: "Address not found",
        error: {
          code: "ADDRESS_NOT_FOUND",
          description: `No address found for UID: ${uid}`,
        },
      });
    }

    res.status(200).send({
      success: true,
      message: "Address retrieved successfully",
      data: { address: addressEntry },
    });
  } catch (error) {
    console.error("Error retrieving address:", error);
    res.status(400).send({
      success: false,
      message: "Error retrieving address",
      error: {
        code: "ADDRESS_RETRIEVAL_ERROR",
        description: error.message,
      },
    });
  }
};
