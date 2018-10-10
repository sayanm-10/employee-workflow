const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");

// API routes
// const api = require('./server/routes/api');

const app = express();
app.use(bodyParser.json());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist')));

// Set API routes
// app.use('/api', api);

// Catch all other routes and return the index file
app.get('/', (req, res) => {
    res.status(200).send("Base API")
});

app.get('*', (req, res) => {
    res.status(404).json({error: "404 Page Not Found"});
});

// get PORT if available
const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => console.log(`API running on localhost:${port}`));