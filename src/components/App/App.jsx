import { createContext, useContext } from "react";

import Header from "../Header/Header";
// import Counter from "../Counter/Counter";
import { IsOpenProvider } from "../../context/IsOpenProvider";
import TodoPage from "../TodoPage/TodoPage";

const App = () => {
  // state
  return (
    <>
      <IsOpenProvider>
        <Header />
        <TodoPage />
        {/* <Counter /> */}
      </IsOpenProvider>
    </>
  );
};

export default App;
