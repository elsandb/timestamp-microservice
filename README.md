# Timestamp Microservice Project - [FreeCodeCamp](https://www.freecodecamp.org)

This repository contains a full stack JavaScript app providing an API endpoint for retrieving timestamps. 

The project is built on top of freeCodeCamp's boilerplate code, available [here](https://github.com/freeCodeCamp/boilerplate-project-timestamp/). 

The implementation of the API endpoint follows the specifications given in the [challenge description/project requirements](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice).

## Usage
Clone this repo, run `npm install`, then `npm run start` -> the server will start in watch mode (i.e.,`node --watch index.js`), which means that changes in the code will be recompiled when saved (you will see changes in the browser when changes are made in the code). Go to `http://localhost:3000` in your browser, and you should se the index page of the Timestamp microservice.

**API endpoint: `/api/<date_or_unix>`**
- Param `date_or_unix`: Optional. A date on the format `yyyy-mm-dd` OR a unix time value (for example `1451001600000`).
- Response: JSON object containing the date at UTC and UNIX format.

Example:
- `/api/2015-12-25`
- OUTPUT: {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
