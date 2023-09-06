const http = require("http");
const colors = require("colors");
const dotenv = require("dotenv").config();

// server port
const PORT = process.env.PORT || 6060;

// create server
http
  .createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, "text/html");
      res.write(`<h1>Home page</h1>`);
    } else if (req.url === "/about" && req.method === "GET") {
      res.writeHead(200, "text/html");
      res.write(`<h1>About page</h1>`);
    } else if (req.url === "/contact" && req.method === "GET") {
      res.writeHead(200, "text/html");
      res.write(`<h1>Contact page</h1>`);
    } else {
      res.writeHead(404, "text/html");
      res.write(`<h1>Page not found</h1>`);
    }

    // res.writeHead(200, "aplication/json");
    // res.write(`{"name" : "Md Zahirul Islam","roll": "441916", "age" : 20}`);
    res.end();
    // console.log(req.method);
  })
  .listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgMagenta);
  });
