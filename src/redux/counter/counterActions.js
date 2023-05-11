import { createAction } from "@reduxjs/toolkit";

// export const counterDecrementAction = (value) => {
//   return {
//     type: COUNTER_DECREMENT,
//     payload: value,
//   };
// };
export const counterDecrementAction = createAction("counter/decrement");

// export const resetCounterAction = () => ({
//   type: COUNTER_RESET,
// });
export const resetCounterAction = createAction("counter/reset");

// export const incrementCounterAction = (value) => ({
//   type: COUNTER_INCREMENT,
//   payload: value,
// });
export const incrementCounterAction = createAction("counter/increment");
