import React from "react";
import { useCart } from "../context/CartContext";

const OrderedSummary = ({ className = "" }) => {
  // Read from localStorage
  const orderData = JSON.parse(localStorage.getItem("latestOrder")) || {};

  const subtotal = orderData.subtotal || 0;
  const discount = orderData.discount || 0;
  const shippingCost = orderData.shippingCost ?? 0;
  const total = subtotal - discount + shippingCost;

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
          <span className={shippingCost === 0 ? "text-success" : ""}>
            {shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}
          </span>
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
