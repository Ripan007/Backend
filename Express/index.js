import express from "express";
// setting up view engine
app.set("view engine", "ejs");
const app = express();
app.get("/", (req, res) => {});
app.listen(1000, () => {
  console.log("server executed");
});

// ? why express ? instead of node js to create server
// node js framework
// more  syntactical manner
// routing is easy
// split the  code
// less code
// javascript tempalating engines => A templating engine is a way for developers to interpole strings effectively
