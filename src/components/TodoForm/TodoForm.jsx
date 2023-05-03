import { PureComponent, useState } from "react";

import s from "./TodoForm.module.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

const priorityOptions = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const TodoForm = ({ addTodo }) => {
  // 1st variant
  // const [date, setDate] = useState("2023-02-02");
  // const [descr, setDescr] = useState("");
  // const [priority, setPriority] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case "date":
  //       setDate(value);
  //       return;
  //     case "descr":
  //       setDescr(value);
  //       return;
  //     case "priority":
  //       setPriority(value);
  //       return;
  //     default:
  //       return;
  //   }
  // };
  // 1st variant -END

  // 2nd variant
  // const [form, setForm] = useState({
  //   date: "2023-05-03",
  //   descr: "",
  //   priority: "",
  // });
  const [form, setForm] = useLocalStorage("todoForm", {
    date: "2023-05-03",
    descr: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  // 2nd variant -END

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      ...form,
      isDone: false,
      id: uuidv4(),
    };
    addTodo(newTodo);
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

export default TodoForm;

// const Form = ({ options, initialState }) => {
//   const [form, setForm] = useState(initialState);
//   return (
//     <form>
//       {options.map((el) => (
//         <label>
//           <input type={el.type} name={el.name} value={form[el.name]} />
//         </label>
//       ))}
//     </form>
//   );
// };

// const authFormOptions = [
//   {
//     name: "email",
//     type: "text",
//     placeholder: "Input email",
//   },
//   {
//     name: "password",
//     type: "text",
//     placeholder: "Input password",
//   },
// ];

// const authInitialState = {
//   email: "",
//   password: "",
// };

// const AuthForm = () => {
//   <Form options={authFormOptions} initialState={authInitialState} />;
// };
