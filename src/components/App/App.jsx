import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoginPage from "../../pages/LoginPage";
import MainLayout from "../MainLayout/MainLayout";
import RegisterPage from "../../pages/RegisterPage";
import { getCurUser } from "../../redux/auth/authOperations";
import { selectIsAuth } from "../../redux/auth/authSelectors";

const HomePage = lazy(() => import("../../pages/HomePage"));
const TodoPage = lazy(() => import("../../pages/TodoPage"));
const CounterPage = lazy(() => import("../../pages/CounterPage"));

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(getCurUser());
  }, [dispatch]);
  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="todo" element={<TodoPage />} />
            <Route path="counter" element={<CounterPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  );
};

export default App;
