import { useState } from "react";

function InputTodo() {
  const [description, setDescription] = useState("");

  async function onSubmitForm(e) {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <h1 className="text-center mt-5">PERN Stack To-Do List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control w-50 mr-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add To-do</button>
      </form>
    </>
  );
}

export default InputTodo;
