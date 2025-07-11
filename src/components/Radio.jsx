import React from "react";

const Radio = ({ label, name, value, checked, onChange, error }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id={`${name}-${value}`}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={`h-4 w-4 text-blue-600 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      <label htmlFor={`${name}-${value}`} className="text-base text-gray-700">
        {label}
      </label>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Radio;

// Usage Example

{
  /* <div className="flex flex-col gap-2">
  <Radio
    label="Male"
    name="gender"
    value="male"
    checked={formData.gender === "male"}
    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
  />
  <Radio
    label="Female"
    name="gender"
    value="female"
    checked={formData.gender === "female"}
    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
  />
</div> */
}
