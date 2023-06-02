/* --------- type of  module =>  file based , build in , third party -------- */

// ? exporting
// const a = 100;
// module.exports = a;
// ? file based module

// exporting file
// const a = {
//   average: (a, b) => {
//     console.log((a + b) / 2);
//   },
//   percentage: (a, b) => {
//     console.log((a / b) * 100);
//   },
// };

// module.exports = a;

// build in  module

// const fs = require("fs");

// async way
// fs.readFile("sample.txt", "utf-8", (error, data) => {
//   if (error) {
//     throw error;
//   } else {
//     console.log(data);
//   }
// });

// sync way
// const a = fs.readFileSync("sample.txt", "utf-8");
// console.log(a);
// this  way also we could able to execute

// const { readFileSync, read } = require("fs");
// const a = readFileSync("sample.txt", "utf-8");
// console.log(a);

// const fs = require("fs");
// async
// const a = "try to learn node";
// fs.writeFile("sample1.txt", a, () => {
//   console.log("done");
// });
// previous value  get updated
// const b = "did it , try ones agin";
// fs.writeFile("sample1.txt", b, () => {
//   console.log("done ones again");
// });

// sync
// a = "print this messaege";
// fs.writeFileSync("sample1.txt", a);

// const pokemon = require("pokemon");
// console.log(pokemon.all());
// console.log(pokemon.random());

// build in  module path , os , file , http => cover

/* ---------------------------   create a  server -------------------------- */

// const http = require("http");
// const fs = require("fs");
// const home = fs.readFileSync("./index.html");
// const port = 400;
// const hostname = "localhost";
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     return res.end(home);
//   } else if (req.url === "/about") {
//     return res.end(" show about page ");
//   } else {
//     return res.end("page not  found");
//   }
// });

// server.listen(port, hostname, () => {
//   console.log("server is  working");
// });

/* -------------------------------------------------------------------------- */
/*                                   express                                  */
/* -------------------------------------------------------------------------- */
// try to figure out the real scenario , where it should  have used
/* -------------------------------------------------------------------------- */
/*                                core  modules                               */
/* -------------------------------------------------------------------------- */
// const os = require("os");
// if (os.platform() == "win32") {
//   console.log("windows");
// }

// os.cpus().forEach((cpu, index) => {
//   console.log(`cpu:${index}:${cpu.model}`);
// });

// console.log(os.freemem());
// file system module
// fs.mkdir("test13", (error) => {
//   if (error) return error;
//   else {
//     console.log("created");
//   }
// });
// fs.mkdir("test")
//   .then(() => {
//     console.log("file created");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fs.writeFile("test/test.txt", "hello")
//   .then(() => {
//     console.log("file created");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fs.appendFile("test/test.txt ", "many more line of text");

/* -------------------------------------------------------------------------- */
/*                                   module                                   */
/* -------------------------------------------------------------------------- */

import { addCart } from "./test.js";
addCart("shirt", 4);
