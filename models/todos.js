const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// _id and timestanps get added automatically
// but decided to override the _id

const todoSchema = new Schema(
  {
    _id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

const todoModel = mongoose.model("todos", todoSchema);

module.exports = todoModel;
