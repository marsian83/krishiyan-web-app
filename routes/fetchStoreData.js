// fetchAndStoreData.js

const mongoose = require("mongoose");
const axios = require("axios");

const MandiPrice = require("../models/mandiPrices");

const isValidNumber = (value) => {
  return !isNaN(value) && value !== "NA";
};

const fetchDataAndStoreInDB = async () => {
  try {
    const response = await axios.get(
      "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001f665d8c53ebc4d9f7c6cbee1f85aa583&format=json&limit=10000"
    );
    console.log("inside fetch try block");
    const records = response.data.records;

    // Iterate through each record
    for (const record of records) {
      // Update or insert into the MandiPrice collection
      if (
        !isValidNumber(record.min_price) ||
        !isValidNumber(record.max_price)
      ) {
        // Skip this record if min_price or max_price is not a valid number

        continue;
      }

      const filter = {
        state: record.state,
        district: record.district,
        market: record.market,
        commodity: record.commodity,
        variety: record.variety,
        grade: record.grade,
        arrival_date: record.arrival_date,
      };
      console.log(filter);
      const updatedRecord = await MandiPrice.findOneAndUpdate(filter, record, {
        upsert: true, // If record doesn't exist, insert a new one
        new: true, // Return the updated record if it exists
      });

      // If you want to store in MandiPrice model as well, create a new instance and save it
    }

    console.log("Data fetched and stored successfully!");
  } catch (error) {
    console.error("Error fetching or storing data:", error);
  }
};

module.exports = {
  fetchDataAndStoreInDB,
};
