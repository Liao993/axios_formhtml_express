// Import the library
const express = require("express");
const bodyParser = require('body-parser');

// Create app instance
const app = express();

// Set up middleware
app.use(bodyParser.json());
//app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Request handler/endpoint
app.post("/add", (req, res) => {
    let username = req.body.username;
    let category = req.body.category;
    let subcategory = req.body.sub;
    let userPicture = req.files.userPicture;
    console.log(`${username}, ${category}, ${subcategory}` );
    res.send(`
      Your username is: ${username}
      Uploaded image name is: ${userPicture.name}
      Category: ${category}
      Subcategory: ${subcategory}
    `);
});

// Start up the server (my live server is 5500)
app.listen(5500, () => {
    console.log("Server started on port 5500");
});