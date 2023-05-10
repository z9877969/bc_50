import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Header.module.scss";

const getActiveStyle = ({ isActive }) => clsx(s.link, isActive && s.active);

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink to={"/"} className={getActiveStyle}>
              Home
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/counter" className={getActiveStyle}>
              Counter
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/todo" className={getActiveStyle}>
              Todo
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
