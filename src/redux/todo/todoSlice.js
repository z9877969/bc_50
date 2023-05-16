import {
  addTodo,
  getTodo,
  removeTodo,
  updateTodoStatus,
} from "./todoOperations";

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
      prepare(e) {
        return {
          payload: e.target.value,
        };
      },
    },
  },
  extraReducers: (builder) => {
    // addCase | addMatcher |
    builder
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(getTodo.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(removeTodo.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((el) => el.id !== payload);
      })
      .addCase(updateTodoStatus.fulfilled, (state, { payload }) => {
        const idx = state.items.findIndex((el) => el.id === payload.id);
        state.items[idx] = { ...state.items[idx], ...payload };
      })
      .addMatcher(
        (action) => {
          if (
            action.type.startsWith("todo") &&
            action.type.endsWith("/pending")
          )
            return true;
        },
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => {
          if (
            action.type.startsWith("todo") &&
            action.type.endsWith("/rejected")
          )
            return true;
        },
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        (action) => {
          if (
            action.type.startsWith("todo") &&
            action.type.endsWith("/fulfilled")
          )
            return true;
        },
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const {
  removeTodoRequest,
  removeTodoSuccess,
  removeTodoError,
  updateTodoStatusRequest,
  updateTodoStatusSuccess,
  updateTodoStatusError,
  updateStatus,
  changeFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
