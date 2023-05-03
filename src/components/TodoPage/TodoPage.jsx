import { Component, useEffect, useState } from "react";

import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoPage = () => {
  // const [todo, setTodo] = useState(
  //   () => JSON.parse(localStorage.getItem("todo")) || []
  // );
  const [todo, setTodo] = useLocalStorage("todo", []);
  const [priority, setPriority] = useState("all");
  // const [priority1, setPriority1] = useState(() => console.log("initialState"));

  const addTodo = (todo) => {
    setTodo((prevTodo) => [...prevTodo, todo]);
  };

  const removeTodo = (id) => {
    setTodo((prev) => prev.filter((el) => el.id !== id));
  };

  const updateTodoStatus = (id) => {
    setTodo((prev) =>
      prev.map((el) => (el.id !== id ? el : { ...el, isDone: !el.isDone }))
    );
  };

  const changePriority = (e) => {
    setPriority(e.target.value);
  };

  const filterTodo = () => {
    if (priority === "all") return todo;
    return todo.filter((el) => el.priority === priority);
  };

  const filteredTodo = filterTodo();

  // useEffect(() => {
  //   console.log("useEffect_one-time");
  //   const savedTodo = JSON.parse(localStorage.getItem("todo")) || [];
  //   setTodo(savedTodo);
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect__todo");
  //   localStorage.setItem("todo", JSON.stringify(todo));
  // }, [todo]);

  // useEffect(() => {
  //   console.log("useEffect__priority");
  // }, [priority]);

  return (
    <>
      <ToDoForm addTodo={addTodo} />
      <PrioritySelect priority={priority} changePriority={changePriority} />
      <ToDoList
        todo={filteredTodo}
        removeTodo={removeTodo}
        updateTodoStatus={updateTodoStatus}
      />
    </>
  );
};

export default TodoPage;
