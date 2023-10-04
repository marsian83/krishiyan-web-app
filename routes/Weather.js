// routes/weather.js
const express = require("express");
const router = express.Router();
const axios = require("axios");

const api = {
  key: "8cf34e0b1b25927289fe47be2864830a",
  base: "https://api.openweathermap.org/data/2.5/weather?",
};

router.get("/weather", async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const response = await axios.get(
      `${api.base}lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`
    );
    const weatherData = response.data;
    res.json(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
