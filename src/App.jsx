import React from "react";
import { Outlet } from "react-router";
import "./assets/index.css";
import { TopBar, Header, Footer } from "./layout";
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
