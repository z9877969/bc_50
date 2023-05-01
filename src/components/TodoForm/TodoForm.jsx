import { Component, PureComponent } from "react";

import s from "./TodoForm.module.scss";
import { v4 as uuidv4 } from "uuid";

const priorityOptions = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const hardCalc = () => {
  let i = 0;
  while (i < 1e9) {
    i++;
  }
};

class ToDoForm extends PureComponent {
  state = {
    date: "2023-02-02",
    descr: "",
    priority: "",
  };

  // static getDerivedStateFromProps(props, state) {
  //   // console.log("props :>> ", props);
  //   // console.log("state :>> ", state);
  //   console.log("Form getDerivedStateFromProps");
  //   // const newState = { descr: "getDerivedStateFromProps" };
  //   // return newState;
  //   return null;
  // }

  // componentDidMount() {
  //   console.log("Form CDM");
  // }

  // shouldComponentUpdate(newProps, newState) {
  //   console.log("props :>> ", newProps);
  //   console.log("newState :>> ", newState);
  //   console.log("this.state :>> ", this.state);
  //   if (
  //     newState.date !== this.state.date ||
  //     newState.descr !== this.state.descr ||
  //     newState.priority !== this.state.priority
  //   )
  //     return true; // -> render true
  //   // {} !== {}
  //   return false; // -> render false
  // }

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
    // console.log("Form render");

    hardCalc();

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
        <button className={s.submit} type="submit">
          Ok
        </button>
      </form>
    );
  }
}

export default ToDoForm;
