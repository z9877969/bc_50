import {
  counterDecrementAction,
  incrementCounterAction,
  resetCounterAction,
} from "../../redux/counter/counterActions";
import { decrement, increment, reset } from "../../redux/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

import s from "./Counter.module.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <p className={s.count}>{count}</p>
      <div className={s.btnsWrapper}>
        <button
          onClick={() => dispatch(decrement(15))}
          className={s.btn}
          type="button"
        >
          -
        </button>
        <button
          className={s.btn}
          onClick={() => dispatch(reset())}
          type="button"
        >
          0
        </button>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(increment(30))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
