import Link from 'next/link';
import React from 'react';

type NavlinkProps = {
  label?: string;
  icon?: React.ReactNode;
  href?: string;
  variant?: 'default' | 'ghost' | 'link';
};
const Navlink = ({ label, icon, href, variant }: NavlinkProps) => {
  return (
    <Link
      href={href || '#'}
      className={`flex max-w-[88px] flex-row items-center justify-center gap-2 rounded-lg px-[24px] py-[8px] outline-none transition-all duration-200 ease-in-out ${
        //    Design for 'ghost' variant
        variant === 'ghost'
          ? 'bg-transparent hover:border hover:border-primary-blue hover:text-primary-blue'
          : //   Design for 'link' variant
            variant === 'link'
            ? 'bg-transparent text-black hover:text-gray-700'
            : // Design for 'default' variant
              'border border-transparent bg-primary-blue text-white hover:bg-opacity-90'
      } `}
    >
      {icon && <span>{icon}</span>}
      {label}
    </Link>
  );
};

export default Navlink;
