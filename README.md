# Covid-19 Data API:
This is a Node.js-based API that provides summary information about Covid-19 cases and allows querying by countries. It utilizes the disease.sh public API to fetch the latest Covid-19 case data.

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
* Response Body: Returns an array of objects, where each object represents a country and includes details such as country name,cases, deaths, todaycases, todaydeaths, and more.
* Example Request:
    GET /allcountriesinfo
* Example Response:
[
  {
    "country": "Germany",
    "cases": 38428685,
    "deaths": 174352,
    "todaycases": 0,
    "todaydeaths": 0,
    ...
  },
  {
    "country": "UK",
    "cases": 24618436,
    "deaths": 226278,
    "todaycases": 0,
    "todaydeaths": 0,
    ...
  },
  ...
]

### Specific Country Info
* Endpoint: '/specificcountryinfo/:country'
* Method: GET
* Description: Retrieves information about a specific country's Covid-19 cases.
* Parameters: 
    :country - The name of the country (e.g., usa, uk, germany).
* Response Body: Returns an object containing details about the specific country, including cases, deaths, todaycases, todaydeaths, and more.
* Example Request:
    GET /allcountriesinfo/germany
* Example Response:
{
  "country": "Germany",
    "cases": 38428685,
    "deaths": 174352,
    "todaycases": 0,
    "todaydeaths": 0,
    ...
}

### Cases
* Endpoint: '/cases'
* Method: GET
* Description: Retrieves the total number of Covid-19 cases worldwide.
* Response Body: Returns an object with the 'cases' property, which represents the total number of cases.
* Example Request:
    GET /cases
* Example Response:
{
    "cases":690956917
}

### Today's Cases
* Endpoint: '/todaycases'
* Method: GET
* Description: Retrieves the number of new Covid-19 cases reported today worldwide.
* Response Body: Returns an object with the 'todayCases' property, which represents the number of cases reported today.
* Example Request:
    GET /todaycases
* Example Response:
{
    "todayCases":3
}

### Deaths
* Endpoint: '/deaths'
* Method: GET
* Description: Retrieves the total number of Covid-19 deaths worldwide.
* Response Body:  Returns an object with the 'deaths' property, which represents the total number of deaths.
* Example Request:
    GET /deaths
* Example Response:
{
    "deaths":6895913
}

### Today's Deaths
* Endpoint: '/todaydeaths'
* Method: GET
* Description: Retrieves the number of new Covid-19 deaths reported today worldwide.
* Response Body: Returns an object with the 'todayDeaths' property, which represents the number of deaths reported today.
* Example Request:
    GET /todaydeaths
* Example Response:
{
  "todayDeaths": 0
}

### 
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
  "message": "OK",
  "uptime": 2152.502061791,
  "timestamp": 1688297069982
}

### Note:
The examples provided are for illustrative purposes, and the actual values may vary based on the current data and server status

### Testing
* To run the tests, execute the following command:
    * npm test

