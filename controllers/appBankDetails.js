const BankDetails = require("../models/appBankDetails");

// Create or Update Bank Details
exports.createOrUpdateBankDetails = async (req, res) => {
  try {
    const { uid, bankName, accountName, accountNumber, ifscCode } = req.body;

    // Check if UID is provided
    if (!uid) {
      return res.status(400).send({
        success: false,
        message: "UID is required",
        error: {
          code: "UID_REQUIRED",
          description: "UID must be provided to create or update bank details.",
        },
      });
    }

    let bankDetailsEntry = await BankDetails.findOneAndUpdate(
      { uid },
      { bankName, accountName, accountNumber, ifscCode },
      { new: true, upsert: true } // upsert creates a new document if no document matches the query
    );

    const message = bankDetailsEntry.wasNew
      ? "Bank details created successfully"
      : "Bank details updated successfully";

    res.status(201).send({
      success: true,
      message,
      data: bankDetailsEntry,
    });
  } catch (error) {
    console.error("Error creating or updating bank details:", error);
    res.status(400).send({
      success: false,
      message: "Error creating or updating bank details",
      error: {
        code: "BANK_DETAILS_CREATION_OR_UPDATE_ERROR",
        description: error.message,
      },
    });
  }
};

// Get Bank Details by UID
exports.getBankDetailsByUid = async (req, res) => {
  try {
    const { uid } = req.params;

    // Check if UID is valid
    if (!uid) {
      return res.status(400).send({
        success: false,
        message: "UID is required",
        error: {
          code: "UID_REQUIRED",
          description: "UID must be provided to retrieve bank details.",
        },
      });
    }

    const bankDetails = await BankDetails.findOne({ uid });

    if (!bankDetails) {
      return res.status(404).send({
        success: false,
        message: "Bank details not found",
        error: {
          code: "BANK_DETAILS_NOT_FOUND",
          description: `No bank details found with UID: ${uid}`,
        },
      });
    }

    res.status(200).send({
      success: true,
      message: "Bank details retrieved successfully",
      data: bankDetails,
    });
  } catch (error) {
    console.error("Error retrieving bank details:", error);
    res.status(400).send({
      success: false,
      message: "Error retrieving bank details",
      error: {
        code: "BANK_DETAILS_RETRIEVAL_ERROR",
        description: error.message,
      },
    });
  }
};
