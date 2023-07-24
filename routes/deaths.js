const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://disease.sh/v3/covid-19/all');
    const deaths = response.data.deaths;
    res.json({ deaths });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
