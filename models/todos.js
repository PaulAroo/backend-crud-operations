const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// _id and timestanps get added automatically

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

const todoModel = mongoose.model("todos", todoSchema);

module.exports = todoModel;
