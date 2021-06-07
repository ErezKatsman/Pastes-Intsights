const express = require("express");
const app = express();

app.use(express.static("client/build"));

app.get("/", (req, res) => {
  res.send("hello");
});

module.exports = app;
