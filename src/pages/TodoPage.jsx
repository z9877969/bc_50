import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader/Loader";
import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { getTodo } from "../redux/todo/todoOperations";
import { increment } from "../redux/counter/counterSlice";
import { selectIsTodoExist } from "../redux/todo/todoSelectors";
import { useEffect } from "react";

const TodoPage = () => {
  const dispatch = useDispatch();
  const isTodoExist = useSelector(selectIsTodoExist);

  useEffect(() => {
    !isTodoExist && dispatch(getTodo());
  }, [dispatch, isTodoExist]);

  return (
    <>
      <Loader>
        <button type="button" onClick={() => dispatch(increment(25))}>
          Click
        </button>
        <ToDoForm />
        <PrioritySelect />
        <ToDoList />
      </Loader>
    </>
  );
};

export default TodoPage;
