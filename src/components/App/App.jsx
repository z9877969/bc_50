import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import CounterPage from "../../pages/CounterPage";
import CountryNews from "../CountryNews/CountryNews";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage";
import NewsPage from "../../pages/NewsPage";
import TodoPage from "../../pages/TodoPage";

const MainLayout = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/news" element={<NewsPage />}>
            <Route path=":country" element={<CountryNews />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;

// const usLang = {
//   mainTitle: "Hello",
// };

// const uaLang = {
//   mainTitle: "Привіт",
// };

// // ua | us
// const C = ({ lang }) => {
//   const title = lang === "us" ? usLang.mainTitle : uaLang.mainTitle;
//   return <h1>{title}</h1>;
// };
