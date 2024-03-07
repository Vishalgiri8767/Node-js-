// Server Instantiate.
const express = require("express");
const app = express();

// Activate the server at port 3000
app.listen(3000, () => {
  console.log("server started on port number 3000");
});


// Used to parse req.body in express -> put or post
const bodyParser = require("body-parser");

// specifically parse the json data & add it to the request.body object
app.use(bodyParser.json());

//route
app.get("/", (req, res) => {
  res.send("hello jii, first node app");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car submitted successfully");
});
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/my_database")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

