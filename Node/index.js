// creation  of server , routing
const http = require("http");
const server = http.createServer((req, res) => {
  //   res.end("welcome to the home page");
  //   console.log(req.url);
  if (req.url === "/") {
    res.end(" <h1>home page <h1/>  ");
  } else if (req.url === "/about") {
    res.end(" <h1> about page <h1/>  ");
  } else if (req.url === "/contact") {
    res.end(" <h1> contact page <h1/>  ");
  } else {
    res.end(" <h1> no  page found <h1/>  ");
  }
});
server.listen(1000, () => {
  console.log("server is working");
});

// ? terminology to remember
// server
// api
// database
// routing
// module
//  way of import/ export => commonjs / module (prefer module type)
// run time environment
