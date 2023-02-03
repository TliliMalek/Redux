import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo, deletetodo } from "./js/action/todoAction";

export const Addtask = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const handleAddTask = () => {
    dispatch(addtodo(description));
    setDescription("");
  };
  return (
    <>
      <h1>Todo List</h1>
      <form>
        {/* onSubmit={onFormSubmit} */}
        <input
          className="add_input"
          type="text"
          placeholder="Enter a Todo..."
          // value={input}
          value={description}
          required
          // onChange={onINputChange}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* <button className="add" type="submit">{editTodo ? "Save" : "Add"}</button> */}
        <button className="add" onClick={handleAddTask}>
          Add
        </button>
      </form>
    </>
  );
};
