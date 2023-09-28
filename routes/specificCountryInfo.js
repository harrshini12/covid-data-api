const express = require("express");
const axios = require("axios");

const router = express.Router();

// Handle GET request to "/specificcountryinfo" endpoint
router.get("/:country", async (req, res) => {
  const country = req.params.country;

  try {
    const response = await axios.get(
      "https://opendata.ecdc.europa.eu/covid19/casedistribution/json/"
    );

    if (response.status === 200) {
      const data = response.data.records;

      // Filter data for the specified country
      const countryData = data.filter(
        (record) =>
          record.countriesAndTerritories.toLowerCase() === country.toLowerCase()
      );

      // Calculate the total sum of deaths, cases, and population for the specified country
      let totalDeaths = 0;
      let totalCases = 0;
      let totalPopulation = 0;

      countryData.forEach((record) => {
        totalDeaths += record.deaths;
        totalCases += record.cases;
        totalPopulation += record.popData2019 || 0;
      });

      // Create an object with the totals and country name
      const countryInfo = {
        countryName: country,
        totalDeaths,
        totalCases,
        totalPopulation,
      };

      res.json(countryInfo);
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
