import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { assets } from "../assets/assets";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuMinus, LuPlus } from "react-icons/lu";

const CartItem = ({ className = "", item }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const newPrice = item.oldPrice - (item.oldPrice * item.discount) / 100;

  // const [quantity, setQuantity] = useState(1);
  // const increment = () => {
  //   setQuantity((prev) => prev + 1);
  // };
  // const decrement = () => {
  //   setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  // };

  return (
    <div className="flex gap-4 py-4 border-b border-border">
      <div className="bg-surface2 p-3 size-28 rounded-sm">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full flex gap-4 justify-between">
        <div className="space-y-1 w-full">
          <p className="font-semibold font-heading">{item.title}</p>
          <p className="text-sm">{item.quantity}</p>
          <p className="text-sm">
            Color: <span>Blue</span>
          </p>
          <p className="font-semibold font-heading">
            ${(newPrice * item.quantity).toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col justify-between items-end">
          <button onClick={() => removeFromCart(item.id)}>
            <RiDeleteBin6Line />
          </button>
          <div className="flex items-center gap-3 px-3 py-2 border-2 border-border rounded-full font-medium text-accent">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              <LuMinus />
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              <LuPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
