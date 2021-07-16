const express = require("express");
const Pastes = require("./pasteModel");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.static("client/build"));

app.get("/", (req, res) => {
  Pastes.find({})
    .then((db) => res.json(db))
    .catch(() =>
      res.status(404).json({ success: false, message: "No items found" })
    );
});

module.exports = app;
