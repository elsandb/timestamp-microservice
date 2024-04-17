// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});


/**
 * GET Current time timestamp
 * Respond with JSON obj containing a `unix` and a `utc` key.
 */
app.get("/api/", function (req, res) {
  res.json({ unix: Date.now(), utc: new Date(Date.now()) });
});


/**
 * GET timestamps from a date string or unix time value
 * Respond with a JSON object containing a `unix` and a `utc` key.
 * 
 * Example:
 * GET `/api/2015-12-25`
 * OUTPUT: {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
 */
app.get("/api/:date?", function (req, res) {
    const dateInput = req.params.date; // The URL parameter "date"
    console.log("dateInput: " + dateInput);

    // The goal is to return an object with the date on UTC and unix format.
    let utcDate = Number(dateInput) ? new Date(Number(dateInput)) : new Date(dateInput);
    let unixDate = Number(dateInput) ? Number(dateInput) : Date.parse(dateInput) ;
    console.log("UTC: " + utcDate);
    console.log("UNIX: " + unixDate);

    // Return {"error": "Invalid Date"} if the unix or utc date is invalid/null.
    if (utcDate == "Invalid Date" || !unixDate) {
        console.log("UTC or UNIX is invalid/null --> Invalid input");
        return res.json({
            "error": "Invalid Date"
        });
    } else {
        // Return an object containing the two date formats 
        res.status(200).json({
            unix: unixDate,
            utc: `${utcDate.toUTCString()}`,
        });
    }
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
