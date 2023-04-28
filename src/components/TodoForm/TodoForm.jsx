import { Field, Form, Formik } from "formik";
import { InferType, date, number, object, string } from "yup";

import { Component } from "react";
import s from "./TodoForm.module.scss";
import { v4 as uuidv4 } from "uuid";

const priorityOptions = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const validationSchema = object({
  date: string().required("Date is require"),
  title: string()
    .required("Title is require")
    .min(5, "Must be 5 and more charecters")
    .max(15, "Must be 15 and less charecters"),
  descr: string()
    .min(15, "Must be 15 and more charecters")
    .max(50, "Must be 50 and less charecters"),
  priority: string().required("Priority is require"),
});

const TodoForm = ({ addTodo }) => {
  return (
    <Formik
      initialValues={{ date: "2023-02-02", title: "", descr: "", priority: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        addTodo({ ...values, id: uuidv4(), isDone: false });
      }}
    >
      {({ errors, touched, ...props }) => (
        <Form className={s.form}>
          {console.log("props :>> ", props)}
          <label className={s.label}>
            <span> Date </span>
            {/* <input
          // className={s.input} +
          // name="date" +
          // value={this.state.date} A!
          // type="date" +
          // onChange={this.handleChange} A!
          /> */}
            <Field className={s.input} name="date" type="date" />
            {touched.date && errors.date && <p>{errors.date}</p>}
          </label>
          <label className={s.label}>
            <span> Title </span>
            <Field className={s.input} name="title" type="text" />
            {touched.title && errors.title && <p>{errors.title}</p>}
          </label>
          <label className={s.label}>
            <span> Description </span>
            <Field className={s.input} name="descr" type="text" />
            {touched.descr && errors.descr && <p>{errors.descr}</p>}
          </label>
          <div className={s.labelWrapper}>
            <div className={s.radioWrapper}>
              <Field
                className={s.input}
                id="formRadioLow"
                name="priority"
                value={priorityOptions.LOW}
                type="radio"
              />
              <label className={`${s.label} ${s.radio}`} htmlFor="formRadioLow">
                Low
              </label>
            </div>
            <div className={s.radioWrapper}>
              <Field
                className={s.input}
                id="formRadioMedium"
                name="priority"
                value={priorityOptions.MEDIUM}
                type="radio"
              />
              <label
                className={`${s.label} ${s.radio}`}
                htmlFor="formRadioMedium"
              >
                Medium
              </label>
            </div>
            <div className={s.radioWrapper}>
              <Field
                className={s.input}
                id="formRadioHigh"
                name="priority"
                value={priorityOptions.HIGH}
                type="radio"
              />
              <label
                className={`${s.label} ${s.radio}`}
                htmlFor="formRadioHigh"
              >
                High
              </label>
            </div>
          </div>
          {touched.priority && errors.priority && <p>{errors.priority}</p>}
          <button className={s.submit} type="submit">
            Ok
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
