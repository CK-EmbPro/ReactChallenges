const express = require('express');
const todoControllers = require('../controllers/todoControllers')
const router = express.Router();

router.route("/getTodos").get(todoControllers.getTodos)
router.route("/getTodoById/:id").get(todoControllers.getTodoById)
router.route("/addTodo").post(todoControllers.addTodo)
router.route("/editTodo/:id").put(todoControllers.updateTodo)
router.route("/deleteTodo/:id").delete(todoControllers.deleteTodo)

module.exports = router;