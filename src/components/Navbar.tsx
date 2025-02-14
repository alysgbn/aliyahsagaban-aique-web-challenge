import React from 'react';
import Button from './ui/Button';
import Image from 'next/image';
import aiqueLogo from '@/assets/images/aique_logo.png';
import ButtonGroup from './ui/ButtonGroup';

const Navbar = () => {
  return (
    <div className="flex  items-center justify-between py-3 sm:px-4 md:px-6 lg:px-8">
      <div className="relative h-[32px] w-[32px]">
        <Image src={aiqueLogo} alt="aique-logo" fill className="object-contain" />
      </div>

      <div className="flex gap-[12px]">
        <ButtonGroup label="Home" />
        <ButtonGroup label="About" variant="ghost" />
        <ButtonGroup label="Contact" variant="ghost" />
      </div>
    </div>
  );
};

export default Navbar;
