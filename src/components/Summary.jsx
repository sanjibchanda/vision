import React from "react";

const Summary = ({ className = "" }) => {
  return (
    <>
      <ul className={`space-y-3 ${className}`}>
        <li className="flex items-center justify-between font-medium">
          <span>Subtotal</span>
          <span>$350.00</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Discount</span>
          <span>$50.00</span>
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
          <span>$315.00</span>
        </li>
      </ul>
    </>
  );
};

export default Summary;
