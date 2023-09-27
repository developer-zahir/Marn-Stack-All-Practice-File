import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import custommer from "./routes/custommer.js";
import student from "./routes/stuent.js";
import gallery from "./routes/gallery.js";
import user from "./routes/user.js";

// init express
const app = express();

// env variable
dotenv.config();
const PORT = process.env.PORT;

// static files
app.use(express.static("public"));

// middleware
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

// apps routers
app.use(custommer);
app.use(student);
app.use(gallery);
app.use(user)

// app listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold);
});
