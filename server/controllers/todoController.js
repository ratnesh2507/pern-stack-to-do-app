const Todo = require("../models/todoModel");

exports.create = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await Todo.createTodo(description);
    res.json(newTodo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.getAll = async (req, res) => {
  try {
    const todos = await Todo.getAllTodos();
    res.json(todos);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.getTodoById(id);
    res.json(todo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await Todo.updateTodo(id, description);
    res.json("Todo was updated!");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.deleteTodo(id);
    res.json("Todo was deleted");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
