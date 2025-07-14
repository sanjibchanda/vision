import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "../context/CartContext";

const WishlistItem = ({ item, className = "" }) => {
  const { removeFromWishlist } = useCart();
  const oldPrice = parseFloat(item?.oldPrice ?? 0);
  const discount = parseFloat(item?.discount ?? 0);
  const quantity = item?.quantity ?? 1;

  const newPrice = oldPrice - (oldPrice * discount) / 100;

  return (
    <div className={`flex gap-4 py-4 border-b border-border ${className}`}>
      <div className="bg-white p-2 size-20 rounded-sm relative">
        <img
          src={item?.image}
          alt={item?.title}
          className="w-full h-full object-contain"
        />
        <span className="absolute -top-2 -right-2 bg-gray-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {quantity}
        </span>
      </div>

      <div className="w-full flex gap-4 justify-between">
        <div className="space-y-1 w-full">
          <p className="font-semibold font-heading">{item?.title}</p>
          <p className="text-sm text-muted">Item #: {item?.id}</p>
          {item.color && (
            <p className="text-sm">
              Color:
              <span>
                {typeof item.color === "object" ? item.color.name : item.color}
              </span>
            </p>
          )}
        </div>

        <div className="flex flex-col justify-between items-end">
          <RiDeleteBin6Line
            className="text-teritory cursor-pointer"
            onClick={() => removeFromWishlist(item.id)}
            title="Remove item"
          />
          <p className="font-semibold font-heading">
            ${isNaN(newPrice) ? "0.00" : (newPrice * quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
