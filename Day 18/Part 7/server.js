import express from "express";
import colors from "colors";
import dotenv from "dotenv"
import product from "./routes/product.js"
import expressEjsLayouts from "express-ejs-layouts";
import { connectDB } from "./config/mongodb.js";
// init express
const app = express();

// env variable
dotenv.config();
const PORT = process.env.PORT || 4040;

// static folder 
app.use(express.static("public"));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ejs setup
app.set("view engine", "ejs");
app.use(expressEjsLayouts)

// apps routers
app.use(product)

// app listen
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`.bgMagenta);
});