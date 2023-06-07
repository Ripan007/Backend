import express from "express";
import path from "path";
const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});
app.listen(2000, () => {
  console.log("server is running");
});
// ? why express ? instead of node js to create server
// node js framework
// more  syntactical manner
// routing is easy
// split the  code
// less code
// javascript tempalating engines => A templating engine is a way for developers to interpole strings effectively
