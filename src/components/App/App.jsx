import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";

import LoginPage from "../../pages/LoginPage";
import MainLayout from "../MainLayout/MainLayout";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import RegisterPage from "../../pages/RegisterPage";
import { getCurUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const HomePage = lazy(() => import("../../pages/HomePage"));
const TodoPage = lazy(() => import("../../pages/TodoPage"));
const CounterPage = lazy(() => import("../../pages/CounterPage"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/public" element={<h1>Some Page</h1>} />
          <Route index element={<PrivateRoute component={<HomePage />} />} />
          <Route
            path="todo"
            element={<PrivateRoute component={<TodoPage />} />}
          />
          <Route
            path="counter"
            element={
              <PrivateRoute
                component={<CounterPage />}
                redirectTo="/register"
              />
            }
          />
          <Route
            path="register"
            element={<PublicRoute component={<RegisterPage />} />}
          />
          <Route
            path="login"
            element={<PublicRoute component={<LoginPage />} />}
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
