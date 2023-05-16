import { createSelector } from "@reduxjs/toolkit";

export const selectTodo = (state) => state.todo.items;
export const selectFilter = (state) => state.todo.filter;

export const selectIsTodoExist = (state) => Boolean(selectTodo(state).length);

export const selectFilteredTodo = createSelector(
  [selectTodo, selectFilter],
  (todo, filter) => {
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }
);
