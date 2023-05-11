import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
  },
  reducers: {
    add: {
      reducer(state, { payload }) {
        return {
          ...state,
          items: [...state.items, payload],
        };
      },
      prepare(form) {
        return {
          payload: { ...form, isDone: false, id: uuidv4() },
        };
      },
    },
    remove(state, { payload }) {
      return {
        ...state,
        items: state.items.filter((el) => el.id !== payload),
      };
    },
    updateStatus(state, { payload }) {
      return {
        ...state,
        items: state.items.map((el) =>
          el.id !== payload ? el : { ...el, isDone: !el.isDone }
        ),
      };
    },
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
});

export const { add, remove, updateStatus, changeFilter } = todoSlice.actions;

export default todoSlice.reducer;
