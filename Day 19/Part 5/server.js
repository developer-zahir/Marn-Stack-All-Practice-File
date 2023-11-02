import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { mongodbConnection } from "./config/mongodb.js";
import studentRoute from "./routes/student.js";
// init express
const app = express();

// env variable
dotenv.config();
const PORT = process.env.PORT || 5000;

// static folder
app.use(express.static("public"));

// middleware
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

// router
app.use(studentRoute);

// app listen
app.listen(PORT, () => {
  mongodbConnection();
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
