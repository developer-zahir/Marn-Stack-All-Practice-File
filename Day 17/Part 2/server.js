import express from "express";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();

// server port
const PORT = process.env.PORT || 5000;

// express initialization
const app = express();

// static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgMagenta);
});
