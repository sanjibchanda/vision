import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import {
  Home,
  Shop,
  Products,
  Checkout,
  Cart,
  ProductDetails,
  Error,
  OrderDetails,
  Wishlist,
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App, //as a layout
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      {
        path: "products",
        Component: Products,
        loader: async () => {
          const response = await (
            await fetch("https://jsonplaceholder.typicode.com/todos")
          ).json();
          return response;
        },
      },
      { path: "products/:id?", Component: ProductDetails },
      { path: "checkout", Component: Checkout },
      { path: "cart", Component: Cart },
      { path: "order-details", Component: OrderDetails },
      { path: "wishlist", Component: Wishlist },
      { path: "*", Component: Error },
    ],
  },
]);
