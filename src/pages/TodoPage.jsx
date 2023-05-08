import { useCallback, useMemo, useState } from "react";

import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { useLocalStorage } from "../hooks/useLocalStorage";

const useTodo = () => {
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

const TodoPage = ({ isOpen }) => {
  const { todo, addTodo, removeTodo, updateTodoStatus } = useTodo();
  const [priority, setPriority] = useState("all");

  const changePriority = (e) => {
    setPriority(e.target.value);
  };

  const filteredTodo = useMemo(() => {
    if (priority === "all") return todo;
    return todo.filter((el) => el.priority === priority);
  }, [todo, priority]);

  return (
    <>
      <ToDoForm addTodo={addTodo} />
      <PrioritySelect priority={priority} changePriority={changePriority} />
      <ToDoList
        todo={filteredTodo}
        removeTodo={removeTodo}
        updateTodoStatus={updateTodoStatus}
        isOpen={isOpen}
      />
    </>
  );
};

export default TodoPage;

const useCb = (cb, depArr) => {
  const cbMemo = useMemo(() => {
    return cb;
  }, [...depArr, cb]);

  return cbMemo;
};
