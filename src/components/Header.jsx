import React from "react";
import { LuCrown } from "react-icons/lu";
import Navbar from "./Navbar";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <header className="bg-gray-800 py-4">
        <div className="container max-w-[1340px] mx-auto px-3 flex justify-between items-center">
          <NavLink to="/">
            <LuCrown className="text-white text-2xl" />
          </NavLink>
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
