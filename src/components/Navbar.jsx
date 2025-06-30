import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { navItems } from "./navData";
import { LuMenu, LuSearch, LuShoppingCart, LuX } from "react-icons/lu";
import SearchOverlay from "./SearchOverlay";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // for future cart drawer

  useEffect(() => {
    document.body.style.overflow =
      menuOpen || searchOpen || cartOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen, searchOpen, cartOpen]);

  return (
    <nav className="relative">
      {/* Mobile Menu Button */}
      <ul className="flex items-center gap-3 md:hidden text-white text-xl cursor-pointer z-30">
        <li onClick={() => setSearchOpen(true)}>
          <LuSearch />
        </li>
        <li onClick={() => setCartOpen(true)}>
          <LuShoppingCart />
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <LuX /> : <LuMenu />}
        </li>
      </ul>

      {/* Background Overlay */}
      {(menuOpen || cartOpen) && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => {
            setMenuOpen(false);
            setCartOpen(false);
          }}
        ></div>
      )}

      {/* Overlay for mobile */}
      {/* {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )} */}

      {/* Slide-In Nav Menu */}
      <ul
        className={`
          flex flex-col md:flex-row gap-6 p-6 md:p-0 text-white items-start md:items-center
          bg-gray-900 md:bg-transparent z-20
          fixed md:static top-0 right-0 h-full w-64 md:w-auto
          transform md:transform-none transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
        `}
      >
        {navItems.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.icon}
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-yellow-400"
              }
              onClick={() => setMenuOpen(false)} // close drawer on click
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSearch={(query) => {
          console.log("Search:", query);
          // Optional: redirect or handle query
        }}
      />

      {/* Optional Cart Drawer Placeholder */}
      {cartOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white z-30 shadow-lg p-4 md:hidden">
          <button
            className="absolute top-4 right-4 text-xl"
            onClick={() => setCartOpen(false)}
          >
            <LuX />
          </button>
          <h2 className="text-lg font-semibold mb-4">Cart</h2>
          <p>Your cart is empty (for now)</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
