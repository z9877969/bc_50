import { useState } from "react";

const AuthForm = ({
  onSubmit,
  submitTitle,
  // options, initialState
}) => {
  //   const [form, setForm] = useState(initialState);
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

    // (data) => dispatch(loginUser(data));
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
      {/* {options.map((el) => (
        <label key={el.name}>
          <p>{el.label}</p>
          <input
            type={el.type}
            name={el.name}
            value={form[el.name]}
            onChange={handleChange}
            placeholder={el.palceholder}
          />
        </label>
      ))} */}
      <br />
      <button type="submit">{submitTitle}</button>
    </form>
  );
};

export default AuthForm;
