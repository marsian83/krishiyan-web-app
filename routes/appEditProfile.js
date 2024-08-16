const express = require("express");
const router = express.Router();
const fpoOrganizationController = require("../controllers/appEditProfile");

// Route for updating FPO organization profile
router.put("/fpoOrganization", fpoOrganizationController.updateProfile);
router.get("/fpoOrganization/:id", fpoOrganizationController.getProfileById);
module.exports = router;
