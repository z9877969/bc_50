import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "../Header/Header.module.scss";

const getActiveStyle = ({ isActive }) => clsx(s.link, isActive && s.active);

const AuthNav = () => {
  return (
    <>
      <li className={s.item}>
        <NavLink to="/login" className={getActiveStyle}>
          Login
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/register" className={getActiveStyle}>
          Register
        </NavLink>
      </li>
    </>
  );
};

export default AuthNav;
