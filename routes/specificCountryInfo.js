const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/:country', async (req, res) => {
  const country = req.params.country;
  try {
    const response = await axios.get(
      `https://disease.sh/v3/covid-19/countries/${country}`,
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
