const express = require("express");
const axios = require("axios");

const router = express.Router();
const MandiPrice = require("../models/mandiPrices");
const { fetchDataAndStoreInDB } = require("./fetchStoreData");

// API endpoint to get filter options
router.get("/filter-options", async (req, res) => {
  try {
    const mandiData = await MandiPrice.find();

    const filterOptions = {};

    mandiData.forEach((item) => {
      // Create or update state
      filterOptions[item.state] = filterOptions[item.state] || {};

      // Create or update district
      filterOptions[item.state][item.district] =
        filterOptions[item.state][item.district] || {};

      // Add commodity to the district if it doesn't exist already
      filterOptions[item.state][item.district].commodities =
        filterOptions[item.state][item.district].commodities || [];

      if (
        !filterOptions[item.state][item.district].commodities.includes(
          item.commodity
        )
      ) {
        filterOptions[item.state][item.district].commodities.push(
          item.commodity
        );
      }
    });

    res.json(filterOptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// API route to fetch MandiPrice data based on state, district, and commodity
router.get("/mandi-prices", async (req, res) => {
  const { state, district, commodity } = req.query;
  console.log("mandi price backend hit");
  console.log("mandi price backend vakues ", state, district, commodity);
  try {
    const query = {};

    if (state) query.state = state;
    if (district) query.district = district;
    if (commodity) query.commodity = commodity;

    const result = await MandiPrice.find(query);
    console.log("this is backend mandi price result ", result);
    res.json(result);
  } catch (error) {
    console.error("Error fetching MandiPrice data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/fetch-and-store-data", async (req, res) => {
  try {
    await fetchDataAndStoreInDB();

    res.json({
      message: "Data fetch and store process initiated successfully.",
    });
  } catch (error) {
    console.error("Error initiating data fetch and store process:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/mandi-prices", async (req, res) => {
  try {
    // Delete all records
    const result = await MandiPrice.deleteMany({});

    res.json({
      message: `Deleted ${result.deletedCount} records of Mandi Prices`,
    });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
