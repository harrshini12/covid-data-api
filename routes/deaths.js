const express = require("express");
const axios = require("axios");

const router = express.Router();

// Handle GET request to "/deaths" endpoint
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://opendata.ecdc.europa.eu/covid19/casedistribution/json/"
    );

    if (response.status === 200) {
      const data = response.data.records;

      // Create an array to store objects with country name, cases, and deaths
      const countryData = [];

      // Calculate the sum of the deaths for each country
      data.forEach((record) => {
        const countryName = record.countriesAndTerritories;
        const deaths = record.deaths;

        // Check if the country is already in the array
        const existingCountry = countryData.find(
          (item) => item.country === countryName
        );

        if (existingCountry) {
          // If the country exists, add the deaths to the existing total
          existingCountry.deaths += deaths;
        } else {
          // If the country is not in the array, add it with the deaths
          countryData.push({ country: countryName, deaths });
        }
      });

      res.json(countryData);
    } else {
      console.error("Failed to fetch data from the URL");
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
