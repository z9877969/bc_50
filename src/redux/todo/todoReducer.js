import {
  TODO_ADD,
  TODO_CHANGE_PRIORITY,
  TODO_REMOVE,
  TODO_UPDATE_STATUS,
} from "./todoConstants";

import { combineReducers } from "redux";

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case TODO_ADD:
      return [...state, action.payload];
    case TODO_REMOVE:
      return state.filter((el) => el.id !== action.payload);
    case TODO_UPDATE_STATUS:
      return state.map((el) =>
        el.id !== action.payload ? el : { ...el, isDone: !el.isDone }
      );
    default:
      return state;
  }
};

const filterReducer = (state = "all", { type, payload }) => {
  switch (type) {
    case TODO_CHANGE_PRIORITY:
      return payload;
    default:
      return state;
  }
};

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
}); // (state = {items: [], filter: "all"}) => {return state}

export default todoReducer;
