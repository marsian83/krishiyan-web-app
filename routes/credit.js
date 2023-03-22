const express = require("express");
const router = express.Router();
const Credit = require("../models/credit");

router.get("/", async (req, res) => {
  try {
    const credits = await Credit.find({});
    res.status(200).json(credits);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});
module.exports = router;
