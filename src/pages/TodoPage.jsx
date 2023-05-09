import { useMemo, useState } from "react";

import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { useTodo } from "../hooks/useTodo";

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
