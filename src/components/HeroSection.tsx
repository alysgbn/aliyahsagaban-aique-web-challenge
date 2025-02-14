import React from 'react';
import rocket from '@/assets/images/rocket.png';
import ButtonGroup from '@/components/ui/ButtonGroup';
import Image from 'next/image';
import SolutionsSvg from '@/assets/svg/solutions.svg';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-center">
      {/* Rocket Emoji  */}
      <div className="relative h-[44px] w-[44px]">
        <Image src={rocket} alt="aique-logo" fill />
      </div>
      {/* Hero Texts  */}
      <p className="text-[29px] font-semibold tracking-wide text-primary-blue md:text-xxxl lg:text-xxxl lg:tracking-wider">Build and Launch Reliable and Market-Ready Products</p>
      <p className="px-[24px] text-base sm:text-[14px] md:text-[14px] lg:text-[14px]">
        This 2025, Aique DANG aims to optimize internal structures and processes, ensuring enhanced reliability, integrity, and efficiency, ultimately driving increased profitability <br /> for its
        clients.
      </p>
      {/* Check Solutions Button  */}
      <div className="pt-3">
        <ButtonGroup label="Check our solutions" icon={<Image src={SolutionsSvg} alt="Solutions Icon" />} />
      </div>
    </div>
  );
};

export default HeroSection;
