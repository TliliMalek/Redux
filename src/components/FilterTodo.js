import React from "react";
import { useDispatch } from "react-redux";
import { filtertodo } from "./js/action/todoAction";

const FilterTodo = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <select
        name=""
        id=""
        onChange={(e) => dispatch(filtertodo(e.target.value))}
      >
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notdone">Not Done</option>
      </select>
    </div>
  );
};

export default FilterTodo;
