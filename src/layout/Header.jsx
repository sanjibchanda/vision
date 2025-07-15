import React from "react";
import { NavLink } from "react-router";
import { assets } from "../assets/assets";
import { Container, Navbar } from "../components";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 left-0 w-full z-50 bg-white shadow-sm py-4">
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
