import React from 'react';
type ButtonGroupProps = {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'ghost';
};
const ButtonGroup = ({ label, icon, onClick, variant }: ButtonGroupProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row gap-2 items-center justify-center rounded-lg px-[24px] py-[8px] outline-none transition-all duration-200 ease-in-out ${
        variant === 'ghost' ? 'bg-transparent hover:border hover:border-primary-blue hover:text-primary-blue' : 'border border-transparent bg-primary-blue text-white hover:bg-opacity-90'
      } ${icon && label ? 'w-max bg-primary-blueDark ' : 'max-w-[88px]'} ${label ? 'w-full' : 'w-full !max-w-[50px] !px-0 !py-0'}`}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default ButtonGroup;
