import AuthForm from "../components/AuthForm/AuthForm";
import { loginUser } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";

// const optionsLoginForm = [
//   {
//     label: "Email",
//     type: "text",
//     name: "email",
//     palceholder: "Enter email...",
//   },
//   {
//     label: "Password",
//     type: "text",
//     name: "password",
//     palceholder: "Enter password...",
//   },
// ];

// const initialStateLoginForm = {
//   email: "",
//   password: "",
// };

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
        // options={optionsLoginForm}
        // initialState={initialStateLoginForm}
      />
    </>
  );
};

export default LoginPage;
