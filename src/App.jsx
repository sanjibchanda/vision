import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import "./index.css";

const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li>
          <button onClick={() => navigate(-1)}>back</button>
        </li>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/checkout">checkout</NavLink>
        </li>
        <li>
          <NavLink to="/cart">cart</NavLink>
        </li>
      </ul>
      <button
        onClick={() => navigate("/")}
        type="button"
        className="rounded px-5 py-2 text-sm/6 font-medium bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
      >
        Go to Home page
      </button>
      <Outlet />
    </>
  );
};

export default App;
