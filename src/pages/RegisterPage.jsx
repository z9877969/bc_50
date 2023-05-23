import AuthForm from "../components/AuthForm/AuthForm";
import { registerUser } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegisterUser = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <>
      <h1>RegisterPage</h1>
      <AuthForm
        onSubmit={handleRegisterUser}
        submitTitle="Register"
        redirectTo={"/login"}
        linkTitle="Login"
      />
    </>
  );
};

export default RegisterPage;
