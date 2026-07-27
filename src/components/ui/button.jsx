import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
    bg-primary text-white px-6 py-2 rounded-xl font-medium leading-[1.5] 
    border border-transparent 
    hover:bg-transparent hover:border-primary hover:text-primary 
    transition-all duration-200 active:scale-95 
    ${className}
  `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
