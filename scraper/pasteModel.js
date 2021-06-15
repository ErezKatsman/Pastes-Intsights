const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PasteSchema = new Schema(
  {
    _id: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: false },
    date: { type: Date, required: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Paste", PasteSchema);
