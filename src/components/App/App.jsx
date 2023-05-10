import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../MainLayout/MainLayout";
import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage"));
const TodoPage = lazy(() => import("../../pages/TodoPage"));
const CounterPage = lazy(() => import("../../pages/CounterPage"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="counter" element={<CounterPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
