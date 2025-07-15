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

  const isInWishlist = (id) => wishlistItems.some((item) => item.id === id);

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
      // Match by both id and color
      const existingItem = prev.find(
        (item) => item.id === product.id && item.color === product.color
      );

      if (existingItem) {
        // If same id + color already exists, just update quantity
        return prev.map((item) =>
          item.id === product.id && item.color === product.color
            ? {
                ...item,
                quantity: (item.quantity ?? 1) + (product.quantity ?? 1),
              }
            : item
        );
      }

      // New item (id + color is unique)
      return [...prev, { ...product, quantity: product.quantity ?? 1 }];
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

  // toggleWishlist
  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
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

  // const total = subtotal;

  // Promo Logic
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);

  const applyPromoCode = (code) => {
    const promo = code.trim().toUpperCase();
    if (promo === "PROMO20") {
      setPromoCode(promo);
      setPromoDiscount(0.2); // 20%
      return true;
    } else {
      setPromoCode("");
      setPromoDiscount(0);
      return false;
    }
  };

  // 💰 Update total to reflect promo:
  const subtotalAfterDiscount = subtotal - discount;
  const promoAmount = subtotalAfterDiscount * promoDiscount;
  const total = subtotalAfterDiscount - promoAmount;

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
        isInWishlist,
        toggleWishlist,
        promoCode,
        applyPromoCode,
        promoAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
