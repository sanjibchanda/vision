import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Summary = ({ className = "" }) => {
  // const { subtotal, discount, total } = useCart();
  const {
    subtotal = 0,
    discount = 0,
    total = 0,
    promoCode,
    applyPromoCode,
    promoAmount = 0,
  } = useCart();
  // const total = subtotal - discount;

  return (
    <>
      <ul className={`space-y-3 ${className}`}>
        <li className="flex items-center justify-between font-medium">
          <span>Subtotal</span>
          <span>${!isNaN(subtotal) ? subtotal.toFixed(2) : "0.00"}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Discount</span>
          <span>${discount.toFixed(2)}</span>
        </li>
        {promoCode && (
          <li className="flex justify-between text-green-600 font-medium">
            <span>Promo ({promoCode})</span>
            <span>- ${promoAmount.toFixed(2)}</span>
          </li>
        )}
        <li className="flex items-center justify-between">
          <span>Shipping & Handling</span>
          <span className="text-success">FREE</span>
        </li>
        <li>
          <hr className="border-b border-border " />
        </li>
        <li className="flex items-center justify-between font-medium text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </li>
      </ul>
    </>
  );
};

export default Summary;
