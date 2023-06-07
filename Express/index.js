import express from "express";
const app = express();
/* ------------------- without using ejs (engine template) ------------------ */
// import path from "path";

// app.get("/", (req, res) => {
// path.resolve() => we get the   absolute value
//   const pathLocation = path.resolve();
//   console.log(pathLocation, "index.html");
//   res.sendFile(path.join(pathLocation, "index.html"));
// });
// app.listen(2000, () => {
//   console.log("server is running");
// });

/* -------------------------------- with ejs -------------------------------- */
app.get("/", (req, res) => {});

// ? why express ? instead of node js to create server
// node js framework
// more  syntactical manner
// routing is easy
// split the  code
// less code
// javascript tempalating engines => A templating engine is a way for developers to interpole strings effectively
