import React from "react";
import { assets } from "../assets/assets";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuMinus, LuPlus } from "react-icons/lu";

const OrderItem = ({ className = "" }) => {
  return (
    <div className="flex gap-4 py-4 border-b border-border">
      <div className="bg-white p-2 size-20 rounded-sm">
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
        </div>
        <div className="flex flex-col justify-between items-end">
          {/* <RiDeleteBin6Line /> */}
          <p className="font-semibold font-heading">$150.00</p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
