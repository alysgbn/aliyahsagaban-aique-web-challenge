import React from 'react';
import Image from 'next/image';
import aiqueLogo from '@/assets/images/aique_logo.png';
import Navlink from './ui/Navlink';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 sm:px-4 md:px-6 lg:px-8">
      {/* Logo  */}
      <div className="relative h-[32px] w-[32px]">
        <Image src={aiqueLogo} alt="aique-logo" fill className="object-contain" />
      </div>

      {/* Navigation links  */}
      <div className="flex gap-[12px]">
        <Navlink label="Home" />
        <Navlink label="About" variant="ghost" />
        <Navlink label="Contact" variant="ghost" />
      </div>
    </div>
  );
};

export default Navbar;
