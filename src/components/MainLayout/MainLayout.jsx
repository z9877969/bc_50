import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const MainLayout = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainLayout;
