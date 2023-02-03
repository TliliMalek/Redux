import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

import EditTask from "./EditTask";
import DeleteTodo from "./DeleteTodo";

function Task({ isDone, description, Id }) {
  console.log(Id, "TASk");
  //   const tasks = useSelector((state) => state.tasks);
  return (
    <>
      {isDone ? (
        <Card
          bg="success"
          key="success"
          text="success"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header style={{ color: "black" }}>{description}del</Card.Header>

          <Card.Body
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <EditTask isDone={isDone} Id={Id} description={description} />
            <DeleteTodo Id={Id} />
          </Card.Body>
        </Card>
      ) : (
        <Card
          bg="danger"
          key="danger"
          text="danger"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Header style={{ color: "black" }}>{description}</Card.Header>
          <Card.Body
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <EditTask
              style={{}}
              isDone={isDone}
              Id={Id}
              description={description}
            />
            <DeleteTodo Id={Id} />
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default Task;
