import React from "react";
import { Outlet } from "react-router";
import "./assets/index.css";
import TopBar from "./layout/TopBar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
