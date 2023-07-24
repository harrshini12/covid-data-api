const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const CORS_ORIGIN = process.env.CORS_ORIGIN;
if (CORS_ORIGIN) {
  app.use(
    cors({
      origin: CORS_ORIGIN
    })
  );
}

// Require the route files
const allCountriesInfoRouter = require('./routes/allCountriesInfo');
const specificCountryInfoRouter = require('./routes/specificCountryInfo');
const casesRouter = require('./routes/cases');
const todayCasesRouter = require('./routes/todayCases');
const deathsRouter = require('./routes/deaths');
const todayDeathsRouter = require('./routes/todayDeaths');
const healthRouter = require('./routes/health');

// Use the route files with the appropriate URL path
app.use('/allcountriesinfo', allCountriesInfoRouter);
app.use('/specificcountryinfo', specificCountryInfoRouter);
app.use('/cases', casesRouter);
app.use('/todaycases', todayCasesRouter);
app.use('/deaths', deathsRouter);
app.use('/todaydeaths', todayDeathsRouter);
app.use('/health', healthRouter);

// Start the server and store the server instance
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export both the app and server instance
module.exports = { app, server };
