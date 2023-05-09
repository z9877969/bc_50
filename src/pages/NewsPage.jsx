import { Outlet, useLocation, useNavigate } from "react-router-dom";

import CountryNewsNav from "../components/CountryNewsNav/CountryNewsNav";
import { Suspense } from "react";

const NewsPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // {pathname: "/news/ua", search: "", hash: "", state: null}

  const handleGoBack = () => {
    const { state: lastLocation } = location;
    navigate(lastLocation);
  };

  return (
    <>
      <h1>NewsPage</h1>
      <button onClick={handleGoBack}>Go back</button>

      <CountryNewsNav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NewsPage;

// const n = (l) => {
//   const defLoc = {
//     pathname: "",
//     search: "",
//     hash: "",
//     state: "",
//   };

//   push({ ...defLoc, ...l }); // redirect to
// };

// https://mylogin.github.io/basename/movies-search
// https://mylogin.github.io/project2
