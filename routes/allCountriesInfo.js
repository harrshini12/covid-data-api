const express = require("express");
const axios = require("axios");

const router = express.Router();

// Handle GET request to "/allcountriesinfo" endpoint
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://opendata.ecdc.europa.eu/covid19/casedistribution/json/"
    );

    if (response.status === 200) {
      const data = response.data;

      // Extract relevant country information
      const countries = data.records.map((record) => ({
        continent: record.continentExp,
        countryName: record.countriesAndTerritories,
        cases: record.cases,
        deaths: record.deaths,
        population: record.popData2019,
        date: record.dateRep,
      }));

      res.json(countries);
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
