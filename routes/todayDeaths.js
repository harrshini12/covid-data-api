const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://disease.sh/v3/covid-19/all');
    const todayDeaths = response.data.todayDeaths;
    res.json({ todayDeaths });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
