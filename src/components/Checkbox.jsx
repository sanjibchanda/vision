import React from "react";

const Checkbox = ({ label, name, checked, onChange, error }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className={`h-4 w-4 rounded border-gray-300 text-blue-600 ${
          error ? "border-red-500" : ""
        }`}
      />
      <label htmlFor={name} className="text-sm text-gray-700">
        {label}
      </label>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Checkbox;

// Usage Example

{
  /* <Checkbox
  label="Accept Terms"
  name="terms"
  checked={formData.terms}
  onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
  error={formErrors.terms}
/> */
}
