const http = require("http");
const dotenv = require("dotenv").config();

//  server port
const PORT = process.env.PORT || 5000;

// create server
http
  .createServer(function (req, res) {
    res.write("hellow js");
    res.end();
  })
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
