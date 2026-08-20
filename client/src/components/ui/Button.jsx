import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "rounded-md font-medium transition duration-200 focus:outline-none cursor-pointer";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    dark: "bg-gray-800 text-gray-50 hover:bg-gray-900",
    outline:
      "bg-gray-50 border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
      ${baseStyles}
      ${variants[variant] || variants.primary}
      ${sizes[size] || sizes.md}
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
