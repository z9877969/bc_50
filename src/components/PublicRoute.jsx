import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/auth/authSelectors";
import { useSelector } from "react-redux";

const PublicRoute = ({ component, redirectTo = "/" }) => {
  const isAuth = useSelector(selectIsAuth);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};

export default PublicRoute;
