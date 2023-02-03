import React from "react";
import { useSelector } from "react-redux";
import { Addtask } from "./AddTask";
import EditTask from "./EditTask";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const status = useSelector((state) => state.status);

  //   console.table(tasks);
  return (
    <div>
      {tasks
        .filter((el) =>
          status == "done"
            ? el.isDone != false
            : status == "notdone"
            ? el.isDone != true
            : el
        )
        .map(({ description, isDone, Id }) => (
          <div>
            <Task isDone={isDone} Id={Id} description={description} />
          </div>
        ))}
      <Addtask />
    </div>
  );
};

export default ListTask;
