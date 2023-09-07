const http = require("http");
const dotenv = require("dotenv").config();
const express = require("express");

// server port
const PORT = process.env.PORT || 5000;

// init express
const app = express();

// static folder
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.get('/booking', (req, res)=>{
    res.sendFile(__dirname + "/public/booking.html");
})




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
