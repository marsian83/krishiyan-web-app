const express = require("express");
const router = express.Router();
const otherDetailsController = require("../controllers/appOtherDetails");

// Route for creating or updating other details
router.post("/otherDetails", otherDetailsController.createOrUpdateOtherDetails);

// Route for fetching other details by UID
router.get("/otherDetails/:uid", otherDetailsController.getOtherDetailsByUid);

module.exports = router;
