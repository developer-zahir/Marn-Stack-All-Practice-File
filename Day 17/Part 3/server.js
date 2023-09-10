import express from "express";
import colors from "colors";
import dotenv from "dotenv";

// env config
dotenv.config();

// srever port
const PORT = process.env.PORT || 5000;

// express init
const app = express();

// static file
app.use(express.static("public"));

// app support
app.use(express.text());
app.use(express.json());

// app rout
app.get("/user", (req, res) => {
  res.send("Tumi right jaygay acho");
  console.log(req.body);
});

app.get("/user/:cell/:email", (req, res) => {
  console.log(req.params);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
