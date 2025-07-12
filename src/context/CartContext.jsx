import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlistItems");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  // 🔄 Sync cartItems with localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // 🔄 Sync wishlistItems with localStorage
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // 🛒 Add To Cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Add To Wishlist (no duplicates)
  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };

  // 🗑️ Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 🗑️ Remove from wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔁 Update quantity
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // 🧮 Summary values
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc +
      (item.oldPrice - (item.oldPrice * item.discount) / 100) * item.quantity,
    0
  );

  const discount = cartItems.reduce(
    (acc, item) => acc + (item.oldPrice * item.discount * item.quantity) / 100,
    0
  );

  const total = subtotal;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
        updateQuantity,
        subtotal,
        discount,
        total,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
