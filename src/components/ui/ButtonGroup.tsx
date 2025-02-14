import React from 'react';
// Custom made button group component
type ButtonGroupProps = {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'white';
};
const ButtonGroup = ({ label, icon, onClick, variant }: ButtonGroupProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row items-center justify-center gap-2 rounded-lg px-[24px] py-[8px] outline-none transition-all duration-200 ease-in-out ${
        // Design for white and default variant
        variant === 'white' ? 'border border-[#DFE4EA] bg-white' : 'w-max border border-transparent bg-primary-blueDark text-white hover:bg-opacity-90'
        // For buttongroup icon only
      }  ${!label && '!w-[50px] !px-0 py-0'} `}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default ButtonGroup;
