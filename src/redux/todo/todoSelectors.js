import { createSelector } from "@reduxjs/toolkit";

export const selectTodo = (state) => state.todo.items;
export const selectFilter = (state) => state.todo.filter;

export const selectIsTodoExist = (state) => Boolean(selectTodo(state).length);

// export const selectFilteredTodo = (state) => {
//   console.log("selectFilteredTodo");
//   const todo = selectTodo(state); // ref1
//   const filter = selectFilter(state); // medium
//   if (filter === "all") return todo;
//   return todo.filter((el) => el.priority === filter); // ref2 | ref3
// };

export const selectFilteredTodo = createSelector(
  [selectTodo, selectFilter],
  (todo, filter) => {
    // console.log("selectFilteredTodo_memo");
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter); // ref2 | ref3
  }
);
