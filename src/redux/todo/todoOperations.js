import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "../../services/firebaseApi";
import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  getTodoError,
  getTodoRequest,
  getTodoSuccess,
  removeTodoError,
  removeTodoRequest,
  removeTodoSuccess,
  updateTodoStatusError,
  updateTodoStatusRequest,
  updateTodoStatusSuccess,
} from "./todoSlice";

export const addTodo = (form) => {
  return (dispatch) => {
    dispatch(addTodoRequest());
    addTodoApi({ ...form, isDone: false })
      .then((todo) => dispatch(addTodoSuccess(todo)))
      .catch((err) => dispatch(addTodoError(err.message)));
  };
};

export const getTodo = () => (dispatch) => {
  dispatch(getTodoRequest());
  getTodoApi()
    .then((data) => dispatch(getTodoSuccess(data)))
    .catch((err) => dispatch(getTodoError(err.message)));
};

export const removeTodo = (id) => (dispatch) => {
  dispatch(removeTodoRequest());

  removeTodoApi(id)
    .then((data) => dispatch(removeTodoSuccess(id)))
    .catch((err) => dispatch(removeTodoError(err.message)));
};

export const updateTodoStatus = (id, data) => (dispatch) => {
  dispatch(updateTodoStatusRequest()); // request

  updateTodoStatusApi(id, data)
    .then((status) => dispatch(updateTodoStatusSuccess({ ...status, id }))) // success | p: {isDone: true, id}
    .catch((err) => dispatch(updateTodoStatusError(err.message))); // error
};
