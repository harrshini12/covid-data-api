const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    await axios.get('https://disease.sh/v3/covid-19/all');

    res.status(200).json({
      message: 'OK',
      uptime: process.uptime(),
      timestamp: Date.now(),
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Health check failed', message: error.message });
  }
});

module.exports = router;
