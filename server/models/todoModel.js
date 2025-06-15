const pool = require("../config/db");

exports.createTodo = async (description) => {
  const result = await pool.query(
    "INSERT INTO todo (description) VALUES ($1) RETURNING *;",
    [description]
  );
  return result.rows[0];
};

exports.getAllTodos = async () => {
  const result = await pool.query("SELECT * FROM todo;");
  return result.rows;
};

exports.getTodoById = async (id) => {
  const result = await pool.query("SELECT * FROM todo WHERE todo_id = $1;", [
    id,
  ]);
  return result.rows[0];
};

exports.updateTodo = async (id, description) => {
  await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2;", [
    description,
    id,
  ]);
};

exports.deleteTodo = async (id) => {
  await pool.query("DELETE FROM todo WHERE todo_id = $1;", [id]);
};
