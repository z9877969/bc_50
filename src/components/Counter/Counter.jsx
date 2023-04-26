import { Component } from "react";
import s from "./Counter.module.css";

class Counter extends Component {
  state = {
    count: 0,
    a: [],
    b: "qwe",
  };

  handleDecrement = () => {
    // this.state.d = 15; // prevStateRef !== curStateRef
    // this.setState({ count: 45, b: "new value" });
    // this.setState((prevState) => ({ count: prevState.count - 15 }));
    // this.setState((prevState) => ({ count: prevState.count - 50 }));
    // this.setState((prevState) => ({ count: prevState.count - 30 }));
    this.setState((prevState) => ({ count: prevState.count - 15 }));
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 30 }));
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    console.log("Render Counter", this.props.test);

    return (
      <div className={s.container}>
        <h1 className={s.title}>Counter</h1>
        <p className={s.count}>{this.state.count}</p>
        <div className={s.btnsWrapper}>
          <button
            onClick={this.handleDecrement}
            className={s.btn}
            type="button"
          >
            -
          </button>
          <button className={s.btn} onClick={this.handleReset} type="button">
            0
          </button>
          <button
            className={s.btn}
            type="button"
            onClick={this.handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;

// const obj = {
//     count: 0
// }

// obj.count -= 50;

// const obj1 = {
//     count: obj.count - 50
// }
