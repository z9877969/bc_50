import { Link, NavLink } from "react-router-dom";

import clsx from "clsx";
import s from "./Header.module.scss";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  border: 1px solid rgb(232, 235, 232);
  border-radius: 8px;

  &.active {
    border-color: red;
    color: orange;
  }
`;

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}>
            {/* <NavLink
              to={"/"}
              className={({ isActive }) => clsx(s.link, isActive && s.active)}
              // style={({ isActive }) =>
              //   !isActive
              //     ? {
              //         border: "1px solid rgb(232, 235, 232)",
              //         borderRadius: "8px",
              //       }
              //     : {
              //         border: "1px solid red",
              //         color: "orange",
              //       }
              // }
            >
              Home
            </NavLink> */}
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li className={s.item}>
            {/* <NavLink
              to="/counter"
              className={({ isActive }) => clsx(s.link, isActive && s.active)}
              // style={{
              //   border: "1px solid rgb(232, 235, 232)",
              //   borderRadius: "8px",
              // }}
            >
              Counter
            </NavLink> */}
            <StyledNavLink to="/counter">Counter</StyledNavLink>
          </li>
          <li className={s.item}>
            {/* <NavLink
              to="/todo"
              className={({ isActive }) => clsx(s.link, isActive && s.active)}
              // style={{
              //   border: "1px solid rgb(232, 235, 232)",
              //   borderRadius: "8px",
              // }}
            >
              Todo
            </NavLink> */}
            <StyledNavLink to="/todo">Todo</StyledNavLink>
          </li>
          <li className={s.item}>
            <StyledNavLink to={"/news"}>News</StyledNavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// {} {} {}
