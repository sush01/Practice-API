const express = require("express");
const mongoose = require("mongoose");
var app = express();
const port = 4200;

const urlPath = "/home";

app.get(urlPath, (req, res) => {
  const responseData = {
    name: "Firstname",
    lastname: "Lastname",
  };
  return res.json(responseData);
});

app.get("/", (req, res) => {
  res.send("Hello Sushila!");
});

// connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://kandelsushila242:ScaYVu1syDI@sush01.jdsiwju.mongodb.net/Sush-API?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB is  connected successfully");

    //Start Express server after MongoDB connection is successful
    app.listen(port, () => {
      console.log("Nope API is running on port 4200");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
