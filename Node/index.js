// creation  of server , routing
const http = require("http");
const server = http.createServer((req, res) => {
  //   res.end("welcome to the home page");
  //   console.log(req.url);
  if (req.url === "/") {
    res.end(" <h1>home page <h1/>  ");
  }
});
server.listen(1000, () => {
  console.log("server is working");
});
