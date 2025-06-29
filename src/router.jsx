import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";
import ProductDetails from "./pages/ProductDetails";
import Error from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App, //as a layout
    children: [
      { index: true, Component: Home },
      { path: "checkout", Component: Checkout },
      { path: "cart", Component: Cart },
      { path: "thank-you", Component: ThankYou },
      { path: "product/:id?", Component: ProductDetails },
      { path: "*", Component: Error },
    ],
  },
]);
