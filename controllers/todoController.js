const todoModel = require("../models/todos");

const home = (req, res) => {
  todoModel.find({}, (err, data) => {
    if (err) return res.status(404).json({ err: "no data found" });
    else return res.json({ data });
  });
};

const addTodo = (req, res) => {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({ error: "empty request body" });
  else {
    const { _id, title, description } = req.body;
    todoModel.create({ _id, title, description }, (err, data) => {
      if (err) return res.status(400).json({ error: "failed to save" });
      else return res.status(201).json({ message: "todo created", data });
    });
  }
};

const updateTodo = (req, res) => {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({ error: "empty request body" });
  else {
    const { _id, title, description } = req.body;
    todoModel.findOneAndUpdate(
      { _id },
      { title, description },
      { returnDocument: "after" },
      (err, data) => {
        if (err) return res.status(400).json({ error: "failed to update" });
        else return res.status(200).json({ message: "todo updated", data });
      }
    );
  }
};

const deleteTodo = (req, res) => {
  const id = req.params.id;
  console.log(id);
  todoModel.findByIdAndDelete(id, (err, data) => {
    if (err) return res.status(400).json({ error: "failed to delete" });
    else return res.status(200).json({ message: "todo deleted", data });
  });
};

const fetchTodos = (req, res) => {
  todoModel.find({}, (err, data) => {
    if (err) return res.status(404).json({ err: "no data found" });
    else return res.json({ data });
  });
};

module.exports = { home, addTodo, updateTodo, deleteTodo, fetchTodos };
