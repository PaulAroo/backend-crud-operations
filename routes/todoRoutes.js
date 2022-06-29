const express = require("express");
const router = express.Router();
const controllers = require("../controllers/todoController");

router.get("/", controllers.home);

router.post("/add-todo", controllers.addTodo);

router.put("/update-todo", controllers.updateTodo);

router.delete("/delete-todo/:id", controllers.deleteTodo);

router.get("/all-todos", controllers.fetchTodos);

module.exports = router;
