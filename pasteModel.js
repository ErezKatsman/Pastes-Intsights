const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PasteSchema = new Schema({
  author: { type: String, requie: true },
  title: { type: String, requie: true },
  content: { type: String, requie: true },
  date: { type: Date, require: true },
});

module.exports = mongoose.model("Paste", PasteSchema);
