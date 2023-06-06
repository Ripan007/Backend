/* ---------------------------- server , routing ---------------------------- */
// ? creation  of server , routing
// const http = require("http");
import http from "http";
import fs from "fs";
// const home = fs.readFileSync("./index.html");
// const home = fs.readFile("./index.html", (err, data) => {
//   console.log(data);
// });

import { performancePercentage } from "./feature.js";

const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.url === "/") {
    res.end(
      `<h1> the performancePercentage is ${performancePercentage()}<h1/>  `
    );
  } else if (req.url === "/about") {
    res.end(
      ` <p> the performancePervcentage is ${performancePercentage()}<p/> `
    );
  } else if (req.url === "/contact") {
    fs.readFile("./index.html", (err, data) => {
      res.end(data);
    });
  } else {
    res.end(" <h1> no  page found <h1/>  ");
  }
});
server.listen(1000, () => {
  console.log("server is working");
});

/* -------------------------- server , routing end -------------------------- */
/* --------------------------------- module --------------------------------- */

// import name from "./feature.js";
// import { name2, name3 } from "./feature.js";
// import name, { name2, name3 } from "./feature.js";
// console.log("accessing", name, name2, name3);
// console.log("defaut", name);
// console.log("name based", name2, name3);
// import * as allName from "./feature.js";
// console.log(allName.default);
// console.log(allName.name2);
// console.log(allName.name3);
// import myName from "./feature.js";
// console.log(myName);
// import { name } from "./feature.js";
// console.log(name);

// import { sum } from "./feature.js";
// console.log(sum(2, 2));

/* ------------------------------- module end ------------------------------- */
// ? terminology to remember

// server
// api
// database
// routing
// module => build in module , third party module , file based module
// inbuild module(core modules) => path , http ,file system(fs),os
//  way of import/ export => commonjs / module (prefer module type)
// run time environment
// method => get => read , post=>create ,put => update , delete
