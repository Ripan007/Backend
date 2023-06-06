/* ---------------------------- server , routing ---------------------------- */
// ? creation  of server , routing
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("welcome to the home page");
//   console.log(req.url);
//   if (req.url === "/") {
//     res.end(" <h1>home page <h1/>  ");
//   } else if (req.url === "/about") {
//     res.end(" <h1> about page <h1/>  ");
//   } else if (req.url === "/contact") {
//     res.end(" <h1> contact page <h1/>  ");
//   } else {
//     res.end(" <h1> no  page found <h1/>  ");
//   }
// });
// server.listen(1000, () => {
//   console.log("server is working");
// });

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

import { performancePercentage } from "./feature.js";
console.log(performancePercentage());
/* ------------------------------- module end ------------------------------- */
// ? terminology to remember

// server
// api
// database
// routing
// module => build in module , third party module , file based module
//  way of import/ export => commonjs / module (prefer module type)
// run time environment
