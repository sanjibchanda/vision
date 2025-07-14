import React from "react";
import {
  FaStar,
  FaRegMessage,
  FaStarHalfStroke,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa6";
import { LuShare2, LuShoppingCart } from "react-icons/lu";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";

const Product = ({ data }) => {
  const { addToCart, addToWishlist, isInWishlist, toggleWishlist } = useCart();
  const {
    id,
    title,
    image,
    rating,
    reviews,
    oldPrice,
    discount,
    stock,
    label,
    brand,
    color,
  } = data;
  const newPrice = oldPrice - (oldPrice * discount) / 100;

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
        {/* <span className="bg-gray-500 text-white p-2 sm:text-xl rounded-full inline-block absolute top-1/4 sm:top-1/3 right-0 z-1">
          <LuShare2 />
        </span> */}
        <span
          className="bg-gray-200 text-gray-500 p-2 sm:text-xl rounded-full inline-block absolute top-0 right-0 z-1 cursor-pointer"
          // onClick={() => addToWishlist(data)}
          onClick={() => toggleWishlist(data)}
        >
          {isInWishlist(id) ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart />
          )}
        </span>
        <Link
          to={`/products/${id}`}
          className={`block w-full sm:w-40 h-40 sm:h-52 mx-auto relative ${
            stock === 0 ? "opacity-50" : "opacity-100"
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </Link>
      </div>

      <div className="space-y-8">
        <div className="space-y-2 relative">
          <p className="font-heading font-semibold text-accent text-sm sm:text-base">
            {title}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-accent text-sm sm:text-base">
              {renderStars()}
            </div>
            <span className="flex items-center gap-1">
              <FaRegMessage className="text-muted text-xs sm:text-sm" />
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

        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <p className="text-muted text-xs sm:text-sm font-medium">
                ${oldPrice.toFixed(2)}
              </p>
              <span className="bg-primary/20 text-primary p-1 text-xs font-medium rounded-sm">
                -{discount}%
              </span>
            </div>
            <h5 className="font-heading font-semibold">
              ${newPrice.toFixed(2)}
            </h5>
          </div>
          {stock > 0 && (
            <div
              className="bg-primary text-white p-3 sm:p-4 rounded-lg cursor-pointer"
              // onClick={() => addToCart(data)}
              onClick={() =>
                addToCart({
                  ...data,
                  color: data?.color?.[0]?.name || "Default",
                  quantity: 1, // ✅ always pass quantity
                  oldPrice: data.oldPrice ?? 0,
                  discount: data.discount ?? 0,
                })
              }
            >
              <LuShoppingCart className="text-base sm:text-lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
