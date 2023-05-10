import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET } from "./counterConstants";

export const counterDecrementAction = (value) => {
  return {
    type: COUNTER_DECREMENT,
    payload: value,
  };
};

export const resetCounterAction = () => ({
  type: COUNTER_RESET,
});

export const incrementCounterAction = (value) => ({
  type: COUNTER_INCREMENT,
  payload: value,
});
