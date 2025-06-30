import React, { useEffect, useRef } from "react";
import { LuX } from "react-icons/lu";

const SearchOverlay = ({ isOpen, onClose, onSearch }) => {
  const inputRef = useRef();

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-6">
      <div className="relative w-full max-w-xl">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-3 text-black text-2xl"
        >
          <LuX />
        </button>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search products..."
          className="w-full p-4 rounded shadow bg-white text-black text-lg outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch?.(e.target.value);
              onClose();
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchOverlay;
