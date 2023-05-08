import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const TodoList = ({ todo = [], removeTodo, updateTodoStatus }) => {
  return (
    <ul className={s.container}>
      {todo.map((todoItemProps) => (
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
