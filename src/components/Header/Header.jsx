import { useDispatch, useSelector } from "react-redux";

import AuthNav from "../AuthNav/AuthNav";
import { NavLink } from "react-router-dom";
import UserNav from "../UserNav/UserNav";
import clsx from "clsx";
import { logOut } from "../../redux/auth/authSlice";
import s from "./Header.module.scss";
import { selectIsAuth } from "../../redux/auth/authSelectors";

const getActiveStyle = ({ isActive }) => clsx(s.link, isActive && s.active);

const Header = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <ul className={s.list}>
          {isAuth ? <UserNav /> : <AuthNav />}
          <li className={s.item}>
            <NavLink to="/public" className={getActiveStyle}>
              Some
            </NavLink>
          </li>
        </ul>
      </nav>
      {isAuth && (
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
