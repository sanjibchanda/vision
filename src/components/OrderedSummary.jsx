import React from "react";
import { useCart } from "../context/CartContext";

const OrderedSummary = ({ className = "" }) => {
  // Read from localStorage
  const orderData = JSON.parse(localStorage.getItem("latestOrder")) || {};

  const subtotal = orderData.subtotal || 0;
  const discount = orderData.discount || 0;
  const total = orderData.total || 0;
  return (
    <>
      <ul className={`space-y-3 ${className}`}>
        <li className="flex items-center justify-between font-medium">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Discount</span>
          <span>${discount.toFixed(2)}</span>
        </li>
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

export default OrderedSummary;
