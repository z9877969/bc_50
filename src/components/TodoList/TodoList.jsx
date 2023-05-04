import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.css";
import { useIsOpen } from "../../context/IsOpenProvider";

const TodoList = ({ todo = [], removeTodo, updateTodoStatus }) => {
  const isOpen = useIsOpen();

  return (
    <ul className={s.container}>
      {isOpen &&
        todo.map((todoItemProps) => (
          <TodoItem
            key={todoItemProps.id}
            {...todoItemProps}
            removeTodo={removeTodo}
            updateTodoStatus={updateTodoStatus}
          />
        ))}
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string,
      descr: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ),
};

export default TodoList;
