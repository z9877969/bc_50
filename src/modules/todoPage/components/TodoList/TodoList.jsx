import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";
import { selectFilteredTodo } from "../../redux/todo/todoSelectors";
import { useSelector } from "react-redux";

const TodoList = () => {
  const filteredTodo = useSelector(selectFilteredTodo);

  return (
    <ul className={s.container}>
      {filteredTodo.map((todoItemProps) => (
        <TodoItem key={todoItemProps.id} {...todoItemProps} />
      ))}
    </ul>
  );
};

export default TodoList;
