const express = require("express");
const router = express.Router();
const controllers = require("../controllers/todoController");

router.get("/", controllers.home);

router.post("/add-todo", controllers.addTodo);

module.exports = router;
