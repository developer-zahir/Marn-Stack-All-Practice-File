import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { addStudent, deleteStudent, getAllStudent } from "./controllers/studentControllers";

// environment veriable
dotenv.config();
const PORT = process.env.PORT || 5000;

// express init
const app = express();

// use express middleware
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

// static file
app.use(express.static("public"));

// app routes
app.get("/student", getAllStudent);
app.post("/add-student", addStudent);
app.delete("/delete-student", deleteStudent);

// server listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
