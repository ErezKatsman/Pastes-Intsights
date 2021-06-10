const express = require("express");
const Pastes = require("./pasteModel");
const app = express();

app.use(express.static("client/build"));

app.get("/", (req, res) => {
  Pastes.find({})
    .then((db) => res.json(db))
    .catch(() =>
      res.status(404).json({ success: false, message: "No items found" })
    );
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
