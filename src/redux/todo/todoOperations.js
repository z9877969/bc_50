import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "../../services/firebaseApi";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorHandler } from "../error/errorHandler";

export const addTodo = createAsyncThunk(
  "todo/add",
  async (form, { rejectWithValue, getState, dispatch }) => {
    const { localId, idToken } = getState().auth;
    try {
      const todo = await addTodoApi({ todo: form, localId, idToken });
      return todo;
    } catch (error) {
      dispatch(errorHandler({ error, cb: () => addTodo(form) }));
      return rejectWithValue(error.message);
    }
  }
);

export const getTodo = createAsyncThunk(
  "todo/get",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const { localId, idToken } = getState().auth;
    try {
      const data = await getTodoApi({ localId, idToken });
      return data;
    } catch (error) {
      dispatch(errorHandler({ error, cb: getTodo }));
      return rejectWithValue(error.message);
    }
  }
);

export const removeTodo = createAsyncThunk(
  "todo/remove",
  async (id, { rejectWithValue, getState, dispatch }) => {
    const { localId, idToken } = getState().auth;
    try {
      await removeTodoApi({ id, localId, idToken });
      return id;
    } catch (error) {
      dispatch(errorHandler({ error, cb: () => removeTodo(id) }));
      return rejectWithValue(error.message);
    }
  }
);

export const updateTodoStatus = createAsyncThunk(
  "todo/update/status",
  async ({ id, data }, { rejectWithValue, getState, dispatch }) => {
    const { localId, idToken } = getState().auth;
    try {
      const status = await updateTodoStatusApi({ id, data, localId, idToken });
      return { ...status, id };
    } catch (error) {
      dispatch(
        errorHandler({ error, cb: () => updateTodoStatus({ id, data }) })
      );
      return rejectWithValue(error.message);
    }
  }
);
