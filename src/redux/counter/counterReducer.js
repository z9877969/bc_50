import {
  counterDecrementAction,
  incrementCounterAction,
  resetCounterAction,
} from "./counterActions";

import { createReducer } from "@reduxjs/toolkit";

// const counterReducer = (state = 200, action) => {
//   switch (action.type) {
//     case COUNTER_DECREMENT:
//       return state - action.payload;
//     case COUNTER_RESET:
//       return 200;
//     case COUNTER_INCREMENT:
//       return state + action.payload;
//     default:
//       return state;
//   }
// };

const counterReducer = createReducer(150, (builder) => {
  builder
    .addCase(counterDecrementAction, (state, { payload }) => {
      return state - payload;
    })
    .addCase(resetCounterAction, () => 150)
    .addCase(incrementCounterAction, (state, { payload }) => state + payload);
});

export default counterReducer;
