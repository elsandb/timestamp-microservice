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
 * GET timestamps from a date string or unix time value
 * Respond with a JSON object containing a `unix` and a `utc` key.
 * 
 * Example:
 * GET `/api/2015-12-25`
 * OUTPUT: {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
 */
app.get("/api/:date?", function (req, res) {
    const dateInput = req.params.date; // The URL parameter "date"

    // If dateInput is null or undefined
    if (!dateInput) {
        // Return timestamps for the current time
        return res.json({
            unix: Date.now(),
            utc: new Date().toUTCString()
        });
    }
    
    // Parse dateInput and create timestamps with UTC and UNIX format.
    let utcDate = Number(dateInput) ? 
        new Date(Number(dateInput)).toUTCString() : new Date(dateInput).toUTCString();
    let unixTimeValue = Number(dateInput) ? Number(dateInput) : Date.parse(dateInput);

    // If timestamps are valid, return object with timestamps.
    if (!utcDate == "Invalid Date" || unixTimeValue) {
        res.status(200).json({
            unix: unixTimeValue,
            utc: utcDate,
        });
    } else {
        // If date is invalid/null, return {"error": "Invalid Date"}.
        return res.json({ "error": "Invalid Date" });
    }
});


// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
