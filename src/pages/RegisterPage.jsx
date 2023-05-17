import AuthForm from "../components/AuthForm/AuthForm";
import { registerUser } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";

// const optionsRegisterForm = [
//   {
//     label: "User Name",
//     type: "text",
//     name: "userName",
//     palceholder: "Enter your name...",
//   },
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
//   {
//     label: "Confirm Password",
//     type: "text",
//     name: "confirmPassword",
//     palceholder: "Confirm password...",
//   },
// ];

// const initialStateRegisterForm = {
//   userName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

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
        // options={optionsRegisterForm}
        // initialState={initialStateRegisterForm}
      />
    </>
  );
};

export default RegisterPage;
