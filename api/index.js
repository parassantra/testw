const express = require("express");

const app = express();

const { router } = require("./router");

app.use("/users", router);

app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
  });
});

app.listen(3000, () => {
  console.log("app running on 3000");
});
