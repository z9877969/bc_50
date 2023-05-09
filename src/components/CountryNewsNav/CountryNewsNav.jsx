import { NavLink, useLocation, useNavigate } from "react-router-dom";

import clsx from "clsx";
import s from "./CountryNewsNav.module.scss";

const CountryNewsNav = () => {
  const location = useLocation(); // {pathname: "/news", search: "", hash: "", state: lastLocation}
  return (
    <ul className={s.list}>
      <li>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="pl"
          state={location.state}
        >
          PL
        </NavLink>
      </li>
      <li>
        {/* {pathname: "/news", search: "", hash: "", state: laastLocation} */}
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="ua" // {pathname: "/news/ua", search: "", hash: "", state: null}
          state={location.state} // lastLocation
        >
          UA
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="us"
          state={location.state}
        >
          US
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
          to="fr"
          state={location.state}
        >
          FR
        </NavLink>
      </li>
    </ul>
  );
};

export default CountryNewsNav;

// const GoBackButton = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   return (
//     <button
//       onClick={() => {
//         navigate(location.state);
//       }}
//     >
//       GoBack
//     </button>
//   );
// };
