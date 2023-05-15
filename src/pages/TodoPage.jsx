import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader/Loader";
import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { getTodo } from "../redux/todo/todoOperations";
import { useEffect } from "react";

const TodoPage = () => {
  const dispatch = useDispatch();
  const isTodoExist = useSelector((state) => Boolean(state.todo.items.length));

  useEffect(() => {
    !isTodoExist && dispatch(getTodo());
  }, [dispatch, isTodoExist]);

  return (
    <>
      <Loader>
        <ToDoForm />
        <PrioritySelect />
        <ToDoList />
      </Loader>
    </>
  );
};

export default TodoPage;
