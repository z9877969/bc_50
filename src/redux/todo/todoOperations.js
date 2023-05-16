import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "../../services/firebaseApi";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const addTodo = createAsyncThunk("todo/add", async (form, thunkApi) => {
  // dispatch({type: "todo/add/pending"})
  try {
    const todo = await addTodoApi(form);
    return todo; // {type: "todo/add/fulfilled", payload: todo}
  } catch (error) {
    return thunkApi.rejectWithValue(error.message); // {type: "todo/add/rejected", payload: error.message}
  }
});

export const getTodo = createAsyncThunk(
  "todo/get",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getTodoApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeTodo = createAsyncThunk(
  "todo/remove",
  async (id, { rejectWithValue }) => {
    try {
      await removeTodoApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTodoStatus = createAsyncThunk(
  "todo/update/status",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const status = await updateTodoStatusApi(id, data);
      return { ...status, id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
