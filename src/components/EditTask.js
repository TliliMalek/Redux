import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edittodo } from "./js/action/todoAction";

const EditTask = ({ Id, description, isDone }) => {
  console.log(Id, "EditTask");
  const [toggle, setToggle] = useState(false);
  const [newdescripition, setnewdescripition] = useState(description);
  const [isDonenew, setisDonenew] = useState(isDone);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setnewdescripition(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(edittodo(Id, newdescripition, isDonenew));
    setToggle(false);
  };
  return (
    <div>
      <Button onClick={() => setToggle(true)}>Edit</Button>
      {toggle ? (
        <div>
          <input type="text" value={newdescripition} onChange={handleChange} />
          <Button onClick={() => setisDonenew(!isDone)}>Change state</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EditTask;
