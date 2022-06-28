const todoModel = require("../models/todos");

const home = (req, res) => {
  return res.json({ message: "hello" });
};

const addTodo = (req, res) => {
  if (Object.keys(req.body).length === 0)
    return res.status(400).json({ error: "empty request body" });
  else {
    const { title, description } = req.body;
    todoModel.create({ title, description }, (err, data) => {
      if (err) return res.status(400).json({ error: "failed to save" });
      else return res.status(201).json({ message: "todo created", data });
    });
  }
};

const updateTodo = (req, res) => {};

const deleteTodo = (req, res) => {};

const fetchTodos = (req, res) => {};

module.exports = { home, addTodo };
