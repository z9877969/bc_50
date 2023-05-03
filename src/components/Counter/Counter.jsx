import { Component, useState } from "react";

import s from "./Counter.module.scss";

// const useCustomHook = () => {
//   const [count, setCount] = useState(0);
// };

const Counter = () => {
  const [num, setNum] = useState(125); // state -> [stateValue, setStateValue]
  const [str, setStr] = useState("qwe");
  const [arr, setArr] = useState([]);
  const [count, setCount] = useState(0);

  console.log("num :>> ", num);
  console.log("str :>> ", str);
  console.log("arr :>> ", arr);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <button
        onClick={() => {
          setNum((prevNum) => prevNum + 10);
          setNum((prevNum) => prevNum + 10);
          setNum((prevNum) => prevNum + 10);
          setStr("Hello!");
        }}
      >
        Click
      </button>
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

class CounterClass extends Component {
  state = {
    count: 0,
    value: 125,
    value1: "qwe",
    value2: [],
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 15 }));
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 30 }));
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return null;
  }
}

export default Counter;

// const arr = [1, 2, 3];

// const [el1, el2, el3] = arr;
