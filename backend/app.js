const express = require("express");
const Pastes = require("./pasteModel");
const app = express();

app.use(express.static("client/build"));

app.get("/", async (req, res) => {
  const db = await Pastes.find({});
  res.json(db);
});

// app.post("/", async (req, res) => {
//   await Pastes.insertMany({
//     author: "erez",
//     title: "hello",
//     content: "hello",
//     date: new Date(),
//   });
//   res.send("ok");
// });

module.exports = app;
