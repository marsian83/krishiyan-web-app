const express = require("express");
const router = express.Router();
const cropController = require("../controllers/appCropAdvisory");

// Route to get all crop names
router.get("/crops", cropController.getAllCropNames);

// Route to get detailed information based on crop name
router.get("/crops/:name", cropController.getCropDetailsByName);

module.exports = router;
