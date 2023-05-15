import React from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "../../components";

import css from "./MainLayout.module.css";

const MainLayout = ({ switchTheme, theme }) => {
  return (
    <div className={css.container}>
      <Header switchTheme={switchTheme} theme={theme} />
      <Outlet />
      <Footer />
    </div>
  );
};

export { MainLayout };
