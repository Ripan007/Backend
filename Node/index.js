const http = require("http");
const server = http.createServer((req, res) => {
  //   res.end("welcome to the home page");
  //   console.log(req.url);
});
server.listen(1000, () => {
  console.log("server is working");
});
