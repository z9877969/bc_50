import { Link } from "react-router-dom";
import { useState } from "react";

const AuthForm = ({ onSubmit, submitTitle, redirectTo, linkTitle }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        <p>Email</p>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email..."
        />
      </label>
      <label htmlFor="">
        <p>Password</p>
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password..."
        />
      </label>
      <br />
      <button type="submit">{submitTitle}</button>
      <Link to={redirectTo}>{linkTitle}</Link>
    </form>
  );
};

export default AuthForm;
