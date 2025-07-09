import React from "react";
import { Outlet } from "react-router";
import "./assets/index.css";
import TopBar from "./layout/TopBar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <>
      <CartProvider>
        <TopBar />
        <Header />
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
};

export default App;
