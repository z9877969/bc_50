import {
  TODO_ADD,
  TODO_CHANGE_PRIORITY,
  TODO_REMOVE,
  TODO_UPDATE_STATUS,
} from "./todoConstants";

export const addTodo = (todo) => {
  return {
    type: TODO_ADD,
    payload: todo,
  };
};

export const removeTodo = (id) => ({
  type: TODO_REMOVE,
  payload: id,
});

export const updateTodoStatus = (id) => ({
  type: TODO_UPDATE_STATUS,
  payload: id,
});

export const changePriority = (value) => ({
  type: TODO_CHANGE_PRIORITY,
  payload: value,
});

// const foo = () => ({a: 5})
