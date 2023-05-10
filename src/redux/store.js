import { combineReducers, createStore } from "redux";

import counterReducer from "./counter/counterReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import todoReducer from "./todo/todoReducer";

// const reducer = (
//   state = { a: 5, b: { arr: [], userName: "bob" }, c: true },
//   action
// ) => {
//   return { ...state, b: { ...state.b, arr: [...state.b.arr, action.payload] } };
// };

const enhancer = devToolsEnhancer();

const aReducer = (state = 5, action) => state;
// const bReducer = (state = { arr: [], userName: "bob" }, action) => {
//   return { ...state, arr: [...state.arr, action.payload] };
// };

const arrReducer = (state = [], action) => {
  return [...state, action.payload];
};

const userNameReducer = (state = "bob", action) => {
  if (action.type === "change/name") {
    return "rick";
  }
  return state;
};

const bReducer = combineReducers({
  arr: arrReducer,
  userName: userNameReducer,
});
const cReducer = (state = true, action) => state;

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer, // {items: [], filter: "all" }
//   filter: () => {},
  a: aReducer,
  b: bReducer,
  c: cReducer,
});

export const store = createStore(rootReducer, enhancer);
