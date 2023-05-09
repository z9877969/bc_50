import s from "./Counter.module.scss";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button
          onClick={() => setCount((prevCount) => prevCount - 10)}
          className={s.btn}
          type="button"
        >
          -
        </button>
        <button className={s.btn} onClick={() => setCount(0)} type="button">
          0
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => setCount((prevCount) => prevCount + 25)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
