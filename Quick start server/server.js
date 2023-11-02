import express from "express";
import colors from "colors";
import dotenv from "dotenv";


// init express
const app = express();


// env variable
dotenv.config();
const PORT = process.env.PORT || 5000;


// static folder
app.use(express.static("public"));


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow.bold);
})