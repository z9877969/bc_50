import { memo, useState } from "react";

// import { addTodo } from "../../redux/todo/todoActions";
import { add } from "../../redux/todo/todoSlice";
import s from "./TodoForm.module.scss";
import { useDispatch } from "react-redux";

// import { v4 as uuidv4 } from "uuid";

const priorityOptions = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const TodoForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    date: "2023-05-03",
    descr: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(form));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Date </span>
        <input
          className={s.input}
          name="date"
          value={form.date}
          type="date"
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          type="text"
          name="descr"
          value={form.descr}
          onChange={handleChange}
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
            checked={form.priority === priorityOptions.LOW}
            onChange={handleChange}
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
            checked={form.priority === priorityOptions.MEDIUM}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioMedium">
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
            checked={form.priority === priorityOptions.HIGH}
            onChange={handleChange}
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
};

export default memo(TodoForm);
