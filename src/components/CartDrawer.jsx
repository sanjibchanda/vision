import React from "react";
import Button from "./Button";
import { LuX } from "react-icons/lu";
import { useNavigate } from "react-router";
import CartItem from "./CartItem";
import OrderItem from "./OrderItem";
import { useCart } from "../context/CartContext";

const CartDrawer = ({ setCartOpen }) => {
  const { cartItems } = useCart(); // ACCESS CONTEXT HERE

  const navigate = useNavigate();
  const cartHandleClick = () => {
    setCartOpen(false);
    navigate("cart");
  };
  const checkoutHandleClick = () => {
    setCartOpen(false);
    navigate("checkout");
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 max-w-96 h-full bg-surface2 z-30 shadow-lg p-4 flex flex-col justify-between">
        <div>
          <button
            className="absolute top-4 right-4 text-xl cursor-pointer"
            onClick={() => setCartOpen(false)}
          >
            <LuX />
          </button>
          <p className="font-heading font-semibold text-base uppercase">
            Shopping Cart
          </p>
          <div className="mt-4 overflow-y-auto height-[80vh]">
            <div>
              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                cartItems.map((item) => (
                  <OrderItem key={item.id} item={item} showDelete />
                ))
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white h-10 px-4 py-2 w-full bg-black hover:bg-primary"
            onClick={cartHandleClick}
          >
            View cart
          </button>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white h-10 px-4 py-2 w-full bg-black hover:bg-primary"
            onClick={checkoutHandleClick}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
