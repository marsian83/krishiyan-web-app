const express = require("express");
const router = express.Router();
const bankDetailsController = require("../controllers/appBankDetails");

// Route for creating or updating bank details
router.post("/bankDetails", bankDetailsController.createOrUpdateBankDetails);

// Route for fetching bank details by UID
router.get("/bankDetails/:uid", bankDetailsController.getBankDetailsByUid);

module.exports = router;
