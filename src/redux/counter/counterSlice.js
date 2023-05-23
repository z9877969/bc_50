// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "../../createSlice";

const counterSlice = createSlice({
  name: "counter",
  initialState: 250,
  reducers: {
    decrement(state, { payload }) {
      return state - payload;
    },
    increment(state, { payload }) {
      return state + payload;
    },
    reset() {
      return 250;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("sometype", (state) => state);
    builder.addCase("sometype1", (state) => state);
    builder.addCase("sometype2", (state) => state);
  },
});

export const { decrement, increment, reset } = counterSlice.actions;

export default counterSlice.reducer;
