const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// API routes
const api = require('./server/routes/api');

const app = express();
app.use(bodyParser.json());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '/dist/employee-workflow')));

// Set CORS and API routes
app.use(cors());
api(app);

// Catch the base route to check if server is responding
app.get('/', (req, res) => {
    // res.status(200).send("Base API")
    res.sendFile(__dirname + '/dist/employee-workflow/index.html');
    // res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('*', (req, res) => {
    res.status(404).json({error: "404 Page Not Found"});
});

// get PORT if available else 3000
const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => console.log(`API running on localhost:${port}`));
