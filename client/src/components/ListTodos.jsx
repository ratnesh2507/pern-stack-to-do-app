import { useEffect, useState } from "react";

function ListTodos() {
  const [todos, setTodos] = useState([]);

  //Delete todo
  async function deleteTodo(id) {
    try {
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  //Loading all todos
  useEffect(function () {
    async function getTodos() {
      try {
        const response = await fetch("http://localhost:5000/todos");
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        console.error(err.message);
      }
    }
    getTodos();
  }, []);
  return (
    <>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>To-do Description</th>
            <th>Edit To-do</th>
            <th>Delete To-do</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListTodos;
