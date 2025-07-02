import React from "react";
import { Outlet } from "react-router";
import "./index.css";
import TopBar from "./components/topBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
