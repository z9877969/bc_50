import { Component } from "react";
import s from "./TodoItem.module.scss";

class TodoItem extends Component {
  state = {
    count: 0,
  };

  #intervalId;

  componentDidMount() {
    this.#intervalId = setInterval(() => {
      this.setState((prev) => ({ count: prev.count + 1 }));
      console.log("setInterval");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("CWU - ", this.props.id);
    clearInterval(this.#intervalId);
  }

  render() {
    const {
      title,
      descr,
      id,
      date,
      priority,
      isDone,
      removeTodo,
      updateTodoStatus,
    } = this.props;
    return (
      <li key={id} className={s.toDoItem}>
        <p className={s.date}>{date}</p>
        <h3 className={`${s.title} ${isDone && s.isDone}`}>
          Counter - {this.state.count}
        </h3>
        <p className={`${s.descr} ${isDone && s.isDone}`}>
          PRIORITY - {priority}
        </p>
        <p className={`${s.descr} ${isDone && s.isDone}`}>{descr}</p>
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
    );
  }
}

export default TodoItem;
