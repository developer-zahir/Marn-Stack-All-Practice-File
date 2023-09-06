const http = require("http");
const colors = require("colors");
// create server
http
  .createServer((req, res) => {
    res.write("I love node");
    res.end();
  })
  .listen(5050, () => {
    console.log("server is running on port 5050".bgGreen.white);
  });
