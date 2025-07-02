import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router";
import logoDark from "../assets/images/logoDark.svg";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-sm py-4">
        <div className="container max-w-[1340px] mx-auto px-3 flex justify-between items-center">
          <NavLink to="/">
            <img src={logoDark} alt="logo" className="w-32 xl:w-40" />
          </NavLink>
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
