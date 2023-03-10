const express = require("express");
const router = express.Router();
const moment = require("moment");
const Crop = require("../models/crop");
const Pest = require("../models/pest");
const Herbicide = require("../models/herbicide")
const ObjectId = require("mongodb").ObjectId;

//Get pests by crop name
router.get("/:weedId", async (req, res) => {
  try {
    const herbicides = await Herbicide.find({});
    const { weedId } = req.params;
    const herbicidesWithWeedId = herbicides.filter((weed) =>
      weed.weedsIds.includes(weedId)
    );
    res.status(200).json(herbicidesWithWeedId);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;