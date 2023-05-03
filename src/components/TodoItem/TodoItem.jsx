import React, { Component, useEffect, useRef, useState } from "react";

import s from "./TodoItem.module.scss";

const TodoItem = ({
  descr,
  id,
  date,
  priority,
  isDone,
  removeTodo,
  updateTodoStatus,
}) => {
  const [count, setCount] = useState(0);

  const intervalIdRef = useRef(null);
  const itemRef = useRef(null);

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log("count");
    }, 1000);

    console.log("itemRef :>> ", itemRef);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  useEffect(() => {
    console.log("intervalIdRef.current :>> ", intervalIdRef.current);
    isDone === true && clearInterval(intervalIdRef.current);
  }, [isDone]);

  console.log("itemRef :>> ", itemRef);

  return (
    <li ref={itemRef} key={id} className={s.toDoItem}>
      <p className={s.date}>{date}</p>
      <h3 className={`${s.title} ${isDone && s.isDone}`}>Counter - {count}</h3>
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
};
// const li = React.createElement("li", {ref: itemRef}) // create tmp -> create dom element

export default TodoItem;
