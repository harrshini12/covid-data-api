# Covid-19 Data API:
This is a Node.js-based API that provides summary information about Covid-19 cases and allows querying by countries. It utilizes the [European Centre for Disease Prevention and Control](https://opendata.ecdc.europa.eu/covid19/casedistribution/json/) public API to fetch the latest Covid-19 case data.

### Prerequisites:
- Node.js and npm should be installed on your machine.

### Installation:

1.  Install dependencies:

    * cd covid-data-api
    * npm install

2.  Start the server:

    * npm start
The server should now be running on http://localhost:3000.

# API Routes
The Covid-19 Data API provides several routes to retrieve different types of information related to Covid-19 cases. These routes are accessible via HTTP requests and return responses in JSON format.

### All Countries Info
* Endpoint: '/allcountriesinfo'
* Method: GET
* Description: Retrieves information about all countries' Covid-19 cases.
* Response Body: Returns an array of objects, where each object represents a country and includes details such as continent, country name,cases, deaths, population and date.
* Example Request:
    GET /allcountriesinfo
* Example Response:
[
  {
    "continent":"Asia",
    "countryName":"Afghanistan",
    "cases":746,
    "deaths":6,
    "population":38041757,
    "date":"14/12/2020"
  },
  {
    "continent":"Africa",
    "countryName":"Egypt",
    "cases":370,"deaths":14,
    "population":100388076,
    "date":"01/12/2020"
  },
  ...
]

### Specific Country Info
* Endpoint: '/specificcountryinfo/:country'
* Method: GET
* Description: Retrieves information about a specific country's Covid-19 cases.
* Parameters: 
    :country - The name of the country (e.g., India, Germany).
* Response Body: Returns an object containing details about the specific country, including totalDeaths, totalCases and totalPopulation.
* Example Request:
    GET /allcountriesinfo/India
* Example Response:
{
  "countryName":"India",
  "totalDeaths":143355,
  "totalCases":9884100,
  "totalPopulation":476879796844
}

### Cases
* Endpoint: '/cases'
* Method: GET
* Description: Retrieves the total number of Covid-19 cases for all country.
* Response Body: Returns an object with the 'cases' property, which represents the total number of cases.
* Example Request:
    GET /cases
* Example Response:
[
{
  "country":"Afghanistan",
  "cases":49273
}
 ...
]

### Deaths
* Endpoint: '/deaths'
* Method: GET
* Description: Retrieves the total number of Covid-19 deaths for all country.
* Response Body:  Returns an object with the 'deaths' property, which represents the total number of deaths.
* Example Request:
    GET /deaths
* Example Response:
[
{
    "country":"Afghanistan",
    "deaths":1971
}
 ...
]

### Health
* Endpoint: '/health'
* Method: GET
* Description: Performs a health check on the API.
* Response Body: 
    * An object with the message property indicating the API's status. If the API is up and running, the message will be "OK".
    * An uptime property representing the number of seconds the API has been running.
    * A timestamp property representing the current timestamp.
* Example Request:
    GET /health
* Example Response:
{
  "message":"Health check passed",
  "uptime":973.840297261,
  "timestamp":1695894269035
}

### Note:
The examples provided are for illustrative purposes, and the actual values may vary based on the current data and server status

### Testing
* To run the tests, execute the following command:
    * npm test
