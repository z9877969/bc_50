import { decrement, increment, reset } from "../../redux/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

import clsx from "clsx";
import s from "./Counter.module.scss";
import sprite from "../../assets/icons/sprite.svg";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div className={s.container}>
      <h1 className={s.title} onClick={() => dispatch({ type: "sometype" })}>
        Counter
      </h1>
      <p className={s.count}>{count}</p>
      {/* <button className={s.btnIcon}>
        <svg
          // style={{ stroke: "red", fill: "none", width: "50px", height: "auto" }}
          className={clsx(s.icon, s.iconVector)}
        >
          <use href={sprite + "#icon-cart-2"}></use>
        </svg>
      </button> */}
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
