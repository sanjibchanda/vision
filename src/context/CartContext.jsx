import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const addToWishlist = (product) => {
    setWishlistItems((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, wishlistItems, addToCart, addToWishlist }}
    >
      {children}
    </CartContext.Provider>
  );
};
