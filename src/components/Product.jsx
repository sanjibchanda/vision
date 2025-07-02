import React from "react";
import {
  FaStar,
  FaRegMessage,
  FaStarHalfStroke,
  FaRegHeart,
} from "react-icons/fa6";
import { LuShare2, LuShoppingCart } from "react-icons/lu";

const Product = ({ data }) => {
  const {
    title,
    image,
    rating,
    reviews,
    oldPrice,
    newPrice,
    discount,
    stock,
    label,
  } = data;

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const half = rating % 1 >= 0.5;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {half && <FaStarHalfStroke />}
      </>
    );
  };

  return (
    <div className="bg-surface2 p-4 space-y-8 rounded-lg">
      <div className="space-y-3 relative pt-11">
        {stock === 0 && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            Sold Out
          </span>
        )}
        {label && (
          <span className="inline-block bg-primary text-white px-2 py-1 p rounded-sm text-xs absolute top-0 left-0">
            {label}
          </span>
        )}
        <span className="bg-gray-500 text-white p-2 text-2xl rounded-full inline-block absolute top-1/3 right-0 z-1">
          <LuShare2 />
        </span>
        <span className="bg-gray-900 text-white p-2 text-2xl rounded-full inline-block absolute top-1/2 right-0 z-1">
          <FaRegHeart />
        </span>
        <div
          className={`w-52 h-64 mx-auto relative ${
            stock === 0 ? "opacity-50" : "opacity-100"
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-2 relative">
          <p className="font-heading font-semibold text-accent">{title}</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-accent text-base">
              {renderStars()}
            </div>
            <span className="flex items-center gap-1">
              <FaRegMessage className="text-muted text-sm" />
              <span className="text-muted text-sm">{reviews}</span>
            </span>
          </div>
          {stock === 0 ? (
            <p className="text-xs font-medium text-error absolute -bottom-6 left-0">
              Out of stock
            </p>
          ) : stock < 10 ? (
            <p className="text-xs font-medium text-amber-500 absolute -bottom-6 left-0">
              Only {stock} left in stock
            </p>
          ) : null}
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <p className="text-muted text-sm font-medium">
                ${oldPrice.toFixed(2)}
              </p>
              <span className="bg-primary/20 text-primary p-1.5 text-xs font-medium">
                -{discount}%
              </span>
            </div>
            <h4 className="font-heading font-semibold">
              ${newPrice.toFixed(2)}
            </h4>
          </div>
          {stock > 0 && (
            <div className="bg-primary text-white p-4 rounded-lg">
              <LuShoppingCart className="text-xl" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
