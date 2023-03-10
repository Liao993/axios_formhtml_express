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
    const username = req.body.username;
    const category = req.body.category;
    const subcategory = req.body.sub;
    const userPicture = req.files.userPicture;

    console.log(req.body);

    res.send(`
      Your username is: ${username}
      Uploaded image name is: ${userPicture.name}
      Category: ${category}
      Subcategory: ${subcategory}
    `);
});

// Start up the server 
app.listen(8000, () => {
    console.log("Server started on port 8000");
});