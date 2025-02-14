import React from 'react';
// Custom made button component
type ButtonProps = {
  variant?: 'default' | 'outlined';
  label: string;
  onClick?: () => void;
  fullWidth?: boolean;
};
const Button = ({ variant = 'default', label, onClick, fullWidth }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-full px-7 py-3 transition-all duration-100 ease-in-out ${
        // Design for 'default' variant
        variant === 'default'
          ? 'border border-transparent bg-primary-blue text-white hover:bg-opacity-90'
          : // Design for 'outlined' variant
            'border border-black bg-transparent text-black hover:border-primary-blue hover:bg-primary-blue hover:text-white'
      } ${fullWidth ? 'w-full' : ''}`}
    >
      {label}
    </button>
  );
};

export default Button;
