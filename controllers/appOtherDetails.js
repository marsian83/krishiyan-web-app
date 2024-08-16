const OtherDetails = require("../models/appOtherDetails");

// Create or Update Other Details
exports.createOrUpdateOtherDetails = async (req, res) => {
  try {
    const { uid, panCardNumber, gstNumber, udyamNumber, aadhaarNumber } =
      req.body;

    // Check if UID is provided
    if (!uid) {
      return res.status(400).send({
        success: false,
        message: "UID is required",
        error: {
          code: "UID_REQUIRED",
          description:
            "UID must be provided to create or update other details.",
        },
      });
    }

    let otherDetailsEntry = await OtherDetails.findOneAndUpdate(
      { uid },
      { panCardNumber, gstNumber, udyamNumber, aadhaarNumber },
      { new: true, upsert: true } // upsert creates a new document if no document matches the query
    );

    const message = otherDetailsEntry.wasNew
      ? "Other details created successfully"
      : "Other details updated successfully";

    res.status(201).send({
      success: true,
      message,
      data: otherDetailsEntry,
    });
  } catch (error) {
    console.error("Error creating or updating other details:", error);
    res.status(400).send({
      success: false,
      message: "Error creating or updating other details",
      error: {
        code: "OTHER_DETAILS_CREATION_OR_UPDATE_ERROR",
        description: error.message,
      },
    });
  }
};

// Get Other Details by UID
exports.getOtherDetailsByUid = async (req, res) => {
  try {
    const { uid } = req.params;

    // Check if UID is valid
    if (!uid) {
      return res.status(400).send({
        success: false,
        message: "UID is required",
        error: {
          code: "UID_REQUIRED",
          description: "UID must be provided to retrieve other details.",
        },
      });
    }

    const otherDetails = await OtherDetails.findOne({ uid });

    if (!otherDetails) {
      return res.status(404).send({
        success: false,
        message: "Other details not found",
        error: {
          code: "OTHER_DETAILS_NOT_FOUND",
          description: `No other details found with UID: ${uid}`,
        },
      });
    }

    res.status(200).send({
      success: true,
      message: "Other details retrieved successfully",
      data: otherDetails,
    });
  } catch (error) {
    console.error("Error retrieving other details:", error);
    res.status(400).send({
      success: false,
      message: "Error retrieving other details",
      error: {
        code: "OTHER_DETAILS_RETRIEVAL_ERROR",
        description: error.message,
      },
    });
  }
};
