import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { navItems } from "../data";
import { LuMenu, LuSearch, LuShoppingCart, LuX, LuUser } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import SearchOverlay from "./SearchOverlay";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // for future cart drawer
  const { cartItems, wishlistItems } = useCart();

  useEffect(() => {
    document.body.style.overflow =
      menuOpen || searchOpen || cartOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen, searchOpen, cartOpen]);

  return (
    <nav className="relative">
      {/* Mobile Menu Button */}
      <ul className="flex items-center gap-3 md:hidden text-accent text-xl cursor-pointer z-30">
        <li onClick={() => setSearchOpen(true)}>
          <LuSearch />
        </li>
        <li className="relative" onClick={() => setCartOpen(true)}>
          <LuShoppingCart />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
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
          flex flex-col md:flex-row gap-4 xl:gap-6 p-6 md:p-0 text-accent items-start md:items-center
          bg-surface md:bg-transparent z-20
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
                isActive ? "text-primary font-medium" : "hover:text-primary"
              }
              onClick={() => setMenuOpen(false)} // close drawer on click
            >
              {item.name}
            </NavLink>
          </li>
        ))}
        <li onClick={() => setSearchOpen(true)}>
          <LuSearch className="text-lg" />
        </li>
        <li>
          <NavLink to="/account">
            <LuUser className="text-lg" />
          </NavLink>
        </li>
        <li className="relative">
          <NavLink to="/wishlist">
            <FaRegHeart className="text-lg" />
          </NavLink>
          {wishlistItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {wishlistItems.length}
            </span>
          )}
        </li>
        <li className="relative" onClick={() => setCartOpen(true)}>
          <LuShoppingCart className="text-lg" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </li>
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
        <div className="fixed top-0 right-0 w-80 h-full bg-white z-30 shadow-lg p-4">
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
