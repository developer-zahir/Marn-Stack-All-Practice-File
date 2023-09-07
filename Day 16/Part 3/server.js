const express = require("express");
const dotenv = require("dotenv").config();

// server port
const PORT = process.env.PORT || 5000;

// init express
const app = express();
app.use(express.static("public"));



app.get("/", (req, res) => {
  res.send("This is home page");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/contact", (req, res) => {
  res.send("This is contact page");
});

app.get("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

// listen server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
