import { Link, Outlet } from "react-router-dom";

const NewsPage = () => {
  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link to="pl">PL</Link>
        </li>
        <li>
          <Link to="ua">UA</Link>
        </li>
        <li>
          <Link to="us">US</Link>
        </li>
        <li>
          <Link to="fr">FR</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default NewsPage;
