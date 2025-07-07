import React from "react";
import { LuX } from "react-icons/lu";

const Badge = ({ label = "", onRemove = () => {} }) => {
  if (!label) return null; // Don't render if label is empty

  return (
    <div className="bg-surface flex items-center gap-1 px-4 py-1.5 text-xs rounded-full">
      <span>{label}</span>
      <button
        type="button"
        onClick={onRemove}
        className="text-muted hover:text-accent transition"
      >
        <LuX />
      </button>
    </div>
  );
};

export default Badge;
