import { useCallback, useMemo, useState } from "react";

import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoPage = ({ isOpen }) => {
  const [todo, setTodo] = useLocalStorage("todo", []);
  const [priority, setPriority] = useState("all");

  // const addTodo = (todo) => {
  //   setTodo((prevTodo) => [...prevTodo, todo]);
  // }; // ref1 | ref2 | ref3
  const addTodo = useCallback(
    (newTodo) => {
      setTodo((prevTodo) => [...prevTodo, newTodo]);
      // setTodo([...todo, newTodo]);
    },
    [setTodo]
  ); // ref1 | ref1 | ref1

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

  const filteredTodo = useMemo(() => {
    console.log("filterTodo");
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

// const useM = (cb, [d]) => {
//   const cach = {
//     savedD: null,
//     value: null,
//   };
//   if (cach.savedD !== d) {
//     const value = cb(d);
//     cach.savedD = d;
//     cach.value = value;
//     return value;
//   }

//   return cach.value;
// };

// const v = useM(() => {
//   return 5 + 6
// }, [value])
