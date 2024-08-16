const express = require("express");
const router = express.Router();
const addressController = require("../controllers/appEditAddressController");

// Route for creating or updating an address
router.post("/address", addressController.createOrUpdateAddress);

// Route for getting address by UID
router.get("/address/:uid", addressController.getAddressByUID);

module.exports = router;
