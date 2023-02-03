import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletetodo } from "./js/action/todoAction";

const DeleteTodo = ({ Id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(deletetodo(Id))}>X</Button>
    </div>
  );
};

export default DeleteTodo;
