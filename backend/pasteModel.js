const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PasteSchema = new Schema(
  {
    _id: { type: String, requie: true, unique: true },
    author: { type: String, requie: true },
    title: { type: String, requie: true },
    content: { type: String, requie: true },
    date: { type: Date, require: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Paste", PasteSchema);
