// Import the library
const express = require("express");
const bodyParser = require('body-parser');
const cors = require ('cors');

// Create app instance
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({
    origin:['http://127.0.0.1:5500', "http://localhost:5500"],
    credentials:true
}));

app.use(function (req, res, next) {

  res.header('Access-Control-Allow-Origin', "http://127.0.0.1:5500");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});



// Request handler/endpoint
app.post("/add", (req, res) => {
  const username = req.body.username;

  console.log(req.body);

  res.status(200).end();
});

// Start up the server 
app.listen(8000, () => {
    console.log("Server started on port 8000");
});