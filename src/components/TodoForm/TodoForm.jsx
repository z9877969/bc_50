import { Component } from "react";
import s from "./TodoForm.module.scss";
import { v4 as uuidv4 } from "uuid";

const priorityOptions = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

class ToDoForm extends Component {
  state = {
    date: "2023-02-02",
    title: "",
    descr: "",
    priority: "",
    dayPeriods: [],
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      this.setState((prevState) => ({
        [name]: checked
          ? [...prevState[name], value]
          : prevState[name].filter((el) => el !== value),
      }));
      return;
    }

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({ ...this.state, id: uuidv4(), isDone: false });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <span> Date </span>
          <input
            className={s.input}
            name="date"
            value={this.state.date}
            type="date"
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Title </span>
          <input
            className={s.input}
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label}>
          <span> Description </span>
          <input
            className={s.input}
            type="text"
            name="descr"
            value={this.state.descr}
            onChange={this.handleChange}
          />
        </label>

        <div className={s.labelWrapper}>
          <div className={s.radioWrapper}>
            <input
              id="formRadioLow"
              className={s.input}
              type="radio"
              name="priority"
              value={priorityOptions.LOW}
              checked={this.state.priority === priorityOptions.LOW}
              onChange={this.handleChange}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioLow">
              Low
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioMedium"
              className={s.input}
              type="radio"
              name="priority"
              value={priorityOptions.MEDIUM}
              checked={this.state.priority === priorityOptions.MEDIUM}
              onChange={this.handleChange}
            />
            <label
              className={`${s.label} ${s.radio}`}
              htmlFor="formRadioMedium"
            >
              Medium
            </label>
          </div>
          <div className={s.radioWrapper}>
            <input
              id="formRadioHigh"
              className={s.input}
              type="radio"
              name="priority"
              value={priorityOptions.HIGH}
              checked={this.state.priority === priorityOptions.HIGH}
              onChange={this.handleChange}
            />
            <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
              High
            </label>
          </div>
        </div>
        <div>
          <label>
            Morning
            <input
              type="checkbox"
              name="dayPeriods"
              value="morning"
              checked={this.state.dayPeriods.includes("morning")}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Afternoon
            <input
              type="checkbox"
              name="dayPeriods"
              value="afternoon"
              checked={this.state.dayPeriods.includes("afternoon")}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Evening
            <input
              type="checkbox"
              name="dayPeriods"
              value="evening"
              checked={this.state.dayPeriods.includes("evening")}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button className={s.submit} type="submit">
          Ok
        </button>
      </form>
    );
  }
}

export default ToDoForm;

// const obj = {
//   a: "qwe"
// }

// obj.a
// obj["a"]

// const key = "a";
// const value = "qwe"
// obj[key]
// {[key]: value }
