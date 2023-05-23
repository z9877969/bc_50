import { PrioritySelect, TodoForm, TodoList } from "modules/todoPage";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader/Loader";
import { getTodo } from "../redux/todo/todoOperations";
import { increment } from "../redux/counter/counterSlice";
import { selectIsTodoExist } from "../redux/todo/todoSelectors";
import { useEffect } from "react";

const TodoPage = () => {
  const dispatch = useDispatch();
  const isTodoExist = useSelector(selectIsTodoExist);
  const isUserExist = useSelector((state) => state.auth.localId);

  useEffect(() => {
    !isTodoExist && isUserExist && dispatch(getTodo());
  }, [dispatch, isTodoExist, isUserExist]);

  return (
    <>
      <Loader>
        <button type="button" onClick={() => dispatch(increment(25))}>
          Click
        </button>
        <TodoForm />
        <PrioritySelect />
        <TodoList />
      </Loader>
    </>
  );
};

export default TodoPage;
