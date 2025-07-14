import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { assets } from "../assets/assets";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuMinus, LuPlus } from "react-icons/lu";

const CartItem = ({ className = "", item }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const quantity = Math.max(1, item.quantity ?? 1);
  const newPrice =
    (item.oldPrice ?? 0) - ((item.oldPrice ?? 0) * (item.discount ?? 0)) / 100;

  return (
    <div className="flex gap-4 py-4 border-b border-border">
      <div className="bg-surface2 p-3 size-28 rounded-sm">
        <img
          src={item.image || assets.fallbackImage}
          alt={item.title || "Product"}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full flex gap-4 justify-between">
        <div className="space-y-1 w-full">
          <p className="font-semibold font-heading">{item.title}</p>
          <p className="text-sm">Quantity: {item.quantity ?? 1}</p>
          <p className="text-sm">
            Color:
            <span>
              {/* {typeof item.color === "object" ? item.color.name : item.color} */}
              {typeof item.color === "object"
                ? item.color?.name || "Default"
                : item.color || "Default"}
            </span>
          </p>
          <p className="font-semibold font-heading">
            $
            {!isNaN(newPrice * item.quantity)
              ? (newPrice * item.quantity).toFixed(2)
              : "0.00"}
          </p>
        </div>
        <div className="flex flex-col justify-between items-end">
          <button onClick={() => removeFromCart(item.id)}>
            <RiDeleteBin6Line />
          </button>
          <div className="flex items-center gap-3 px-3 py-2 border-2 border-border rounded-full font-medium text-accent">
            <button
              onClick={() => updateQuantity(item.id, Math.max(1, quantity - 1))}
            >
              <LuMinus />
            </button>
            <span>{quantity}</span>
            <button onClick={() => updateQuantity(item.id, quantity + 1)}>
              <LuPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
