import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import student_route from "./route/student.js";

// env variables
dotenv.config();
const PORT = process.env.PORT || 5000;

// init express
const app = express();

// static files
app.use(express.static("public"));

// middleware
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(student_route);

// listen server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold);
});
