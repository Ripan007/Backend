import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("home page");
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
// javascript tempalating engines
