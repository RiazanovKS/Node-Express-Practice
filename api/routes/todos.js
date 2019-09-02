const express = require('express')
import TodoList from '../../utils/helpers/todos'
const router = express.Router()

const todoList = new TodoList()

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /todos',
    todos: todoList.todos
  })
})

router.post('/', (req, res, next) => {
  todoList.addTodo(req.body.title)
  res.status(201).json({
    message: 'Handling POST requests to /products',
    todo: req.body.todo
  })
})

router.delete('/:todoId', (req, res, next) => {
  todoList.deleteTodo
  res.status(200).json({
    message: `Delete ${todoId}`
  })
})

module.exports = router
