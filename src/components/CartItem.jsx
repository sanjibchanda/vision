import React from "react";
import { assets } from "../assets/assets";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuMinus, LuPlus } from "react-icons/lu";

const CartItem = ({ className = "" }) => {
  return (
    <div className="flex gap-4 py-4 border-b border-border">
      <div className="bg-surface2 p-3 size-28 rounded-sm">
        <img
          src={assets.product.appleWatch}
          alt="images"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full flex gap-4 justify-between">
        <div className="space-y-1 w-full">
          <p className="font-semibold font-heading">Apple iPhone 16 Pro</p>
          <p className="text-sm">Item #: JBLT520CBLU</p>
          <p className="text-sm">
            Color: <span>Blue</span>
          </p>
          <p className="font-semibold font-heading">$150.00</p>
        </div>
        <div className="flex flex-col justify-between items-end">
          <RiDeleteBin6Line />
          <div className="flex items-center gap-3 px-3 py-2 border-2 border-border rounded-full font-medium text-accent">
            <span>
              <LuMinus />
            </span>
            <span>1</span>
            <span>
              <LuPlus />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
