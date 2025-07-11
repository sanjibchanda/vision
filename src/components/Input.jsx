import React from "react";
import { LuSearch } from "react-icons/lu";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  error = "",
  icon = null,
  iconPosition = "left", // 'left' or 'right'
  className = "",
  ...props
}) => {
  const IconComponent = icon || LuSearch;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {iconPosition === "left" && icon && (
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <IconComponent size={18} />
          </span>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            icon ? (iconPosition === "left" ? "pl-10" : "pr-10") : ""
          } ${error ? "border-red-500" : "border-gray-300"}`}
          {...props}
        />
        {iconPosition === "right" && icon && (
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
            <IconComponent size={18} />
          </span>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
