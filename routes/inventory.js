const express = require("express");
const router = express.Router();
const moment = require("moment");
const Inventory = require("../models/inventory");

router.post("/", async (req, res) => {
  const {
    name,
    category,
    measurement,
    volume,
    discription,
    hsn,
    tax,
    date_of_purchase,
    expiry_date,
  } = req.body;
  try {
    const newInventory = new Inventory({
      name,
      category,
      measurement,
      volume,
      discription,
      hsn,
      tax,
      date_of_purchase,
      expiry_date,
    });
    const inventory = await newInventory.save();
    res.json(inventory);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: err,
    });
  }
});
module.exports = router;
