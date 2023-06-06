import express from "express";
import path from "path";
const app = express();
app.get("/", (req, res) => {
  //   res.send("home page");
  console.log(path.resolve());
  //   res.sendFile("./index.html");
});
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
