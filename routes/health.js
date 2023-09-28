const express = require("express");
const axios = require("axios");

const router = express.Router();

// Handle GET request to "/health" endpoint
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://opendata.ecdc.europa.eu/covid19/casedistribution/json/"
    );

    // Check if the response status code is 200 (OK)
    if (response.status === 200) {
      res.status(200).json({
        message: "Health check passed",
        uptime: process.uptime(),
        timestamp: Date.now(), 
      });
    } else {
      res.status(500).json({
        error: "Health check failed",
        message: "Unexpected status code from ECDC API",
      });
    }
  } catch (error) {
    // Handle any errors that occur during the health check
    res.status(500).json({
      error: "Health check failed",
      message: error.message, 
    });
  }
});

module.exports = router;
