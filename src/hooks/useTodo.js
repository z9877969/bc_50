import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTodo = () => {
  const [todo, setTodo] = useLocalStorage("todo", []);

  const addTodo = useCallback(
    (newTodo) => {
      setTodo((prevTodo) => [...prevTodo, newTodo]);
    },
    [setTodo]
  );

  const removeTodo = (id) => {
    setTodo((prev) => prev.filter((el) => el.id !== id));
  };

  const updateTodoStatus = (id) => {
    setTodo((prev) =>
      prev.map((el) => (el.id !== id ? el : { ...el, isDone: !el.isDone }))
    );
  };

  return { todo, addTodo, removeTodo, updateTodoStatus, setTodo };
};
