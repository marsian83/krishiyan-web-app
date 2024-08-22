const express = require("express");
const { signUp, signIn } = require("../controllers/proUser");
const router = express.Router();

// Route for user sign-up
router.post("/sign-up", signUp);

// Route for user sign-in
router.post("/sign-in", signIn);

module.exports = router;
