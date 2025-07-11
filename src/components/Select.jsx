import React from "react";
import { LuChevronDown } from "react-icons/lu";

const Select = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  error = "",
  icon = LuChevronDown,
  iconPosition = "right", // only 'right' makes sense for select
  className = "",
  ...props
}) => {
  const IconComponent = icon;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-3 py-2 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            icon && iconPosition === "right" ? "pr-10" : ""
          } ${error ? "border-red-500" : "border-gray-300"}`}
          {...props}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {icon && (
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
            <IconComponent size={18} />
          </span>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Select;

// Usage Example

{
  /* <Select
  label="Category"
  name="category"
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
  options={[
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
    { value: "home", label: "Home & Living" },
  ]}
  error={formErrors.category}
/>; */
}
