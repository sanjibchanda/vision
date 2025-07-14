import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "solid", // solid | outline | ghost
  color = "primary", // primary | secondary
  className = "",
  ...props
}) => {
  const base = "px-8 py-3 rounded-full text-xl font-medium transition";

  const variants = {
    solid: {
      primary: "bg-primary text-white hover:bg-primary-dark",
      secondary: "bg-gray-800 text-white hover:bg-gray-700",
      light: "bg-white text-accent hover:bg-black hover:text-white",
      dark: "bg-black text-white hover:bg-black/70 hover:text-white",
      disabled: "bg-gray-100 text-gray-300",
    },
    outline: {
      primary: "border border-primary text-primary hover:bg-primary/10",
      secondary: "border border-gray-800 text-gray-800 hover:bg-gray-100",
      light: "border border-white text-white hover:bg-black hover:border-black",
      dark: "border border-black text-black hover:bg-black hover:border-black",
    },
    ghost: {
      primary: "text-primary hover:bg-primary/10",
      secondary: "text-gray-800 hover:bg-gray-100",
    },
  };

  const variantClass = variants[variant]?.[color] || "";

  const combinedClass = `${base} ${variantClass} ${className}`;

  return (
    <button type={type} onClick={onClick} className={combinedClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
