const express = require("express");
const router = express.Router();
const farmerController = require("../controllers/appFarmerController");

// Route to register crop cultivation data
router.post("/crop/register", farmerController.registerCropCultivation);

// Route to get all crop cultivation data
router.get("/crop", farmerController.getCropCultivations);

// Route to get crop cultivation data by Fid
router.get("/:fid", farmerController.getCropCultivationByFid);
// Route for farmer registration
router.post("/register", farmerController.registerFarmer);

// Route to get all farmers
router.get("/", farmerController.getFarmers);

// Route to get farmers' names by dealer number
router.get("/names/:dealerNumber", farmerController.getFarmerNamesByDealer);

// Route to get all farmer data by dealer number
router.get("/data/:dealerNumber", farmerController.getFarmerDataByDealer);

module.exports = router;
