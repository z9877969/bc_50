import PropTypes from "prop-types";
import s from "./TodoList.module.css";

const TodoList = ({ todo = [], removeTodo, updateTodoStatus }) => {
  return (
    <ul className={s.container}>
      {todo.map(({ title, descr, id, date, priority, isDone }) => (
        <li key={id} className={s.toDoItem}>
          <p className={s.date}>{date}</p>
          <h3 className={`${s.title} ${true && s.isDone}`}>{title}</h3>
          <p className={`${s.descr} ${true && s.isDone}`}>
            PRIORITY - {priority}
          </p>
          <p className={`${s.descr} ${true && s.isDone}`}>{descr}</p>
          <label className={s.status}>
            <input
              type="checkbox"
              name="status"
              checked={isDone}
              onChange={(e) => updateTodoStatus(id)}
            />
            Done
          </label>
          <button className={s.todoBtn} onClick={() => removeTodo(id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      descr: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ),
};

export default TodoList;
