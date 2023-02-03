import {
  ADDTODO,
  DELETETODO,
  EDITTODO,
  FILTERTODO,
  CHECKTODO,
} from "../actiontype/actionType";

export const addtodo = (newTODO) => {
  return {
    type: ADDTODO,
    payload: newTODO,
  };
};
export const checktodo = (id, isDone) => {
  return {
    type: CHECKTODO,
    payload: { id, isDone },
  };
};
export const edittodo = (Id, newDescription, isDoneNew) => {
  return {
    type: EDITTODO,
    payload: {
      Id,
      newDescription,
      isDoneNew,
    },
  };
};
export const deletetodo = (Id) => {
  return {
    type: DELETETODO,
    payload: Id,
  };
};
export const filtertodo = (status) => {
  return {
    type: FILTERTODO,
    payload: status,
  };
};
