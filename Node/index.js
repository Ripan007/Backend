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
