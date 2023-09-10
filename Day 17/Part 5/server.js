import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import studentRouter from "./routes/student.js";
import staffRouter from "./routes/staff.js";

// env config
dotenv.config();
const PORT = process.env.PORT || 5000;

// express init
const app = express();

// static files
app.use(express.static("public"));

// app support
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

// apps routers
app.use(studentRouter);
app.use(staffRouter);

app.listen(PORT, () => {
  console.log(`Server running in on port ${PORT}`.bgBlue);
});
