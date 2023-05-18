import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/auth/authSelectors";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
