import AuthForm from "../components/AuthForm/AuthForm";
import { loginUser } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginUser = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <>
      <h1>LoginPage</h1>
      <AuthForm
        submitTitle="Login"
        onSubmit={handleLoginUser}
        redirectTo="/register"
        linkTitle={"Register"}
      />
    </>
  );
};

export default LoginPage;
