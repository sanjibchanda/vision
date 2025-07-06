import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router";
import { assets } from "../assets/assets";
import { Container } from "../components";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-sm py-4">
        <Container>
          <div className="flex justify-between items-center">
            <NavLink to="/">
              <img src={assets.logo.dark} alt="logo" className="w-32 xl:w-40" />
            </NavLink>
            <Navbar />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
