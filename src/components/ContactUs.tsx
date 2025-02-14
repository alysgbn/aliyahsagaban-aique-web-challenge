import React from 'react';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import ButtonGroup from '@/components/ui/ButtonGroup';
import HouseSvg from '@/assets/svg/house.svg';
const ContactUs = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1480px] flex-wrap justify-between gap-3 px-3 pb-[24px] md:flex-nowrap">
      <div className="flex flex-col gap-3">
        {/* Contact us section header */}
        <div className="flex flex-col gap-1 md:gap-3 lg:gap-3">
          <p className="text-base font-bold text-primary-blue">Contact us</p>
          <p className="lg:text-xxl whitespace-nowrap text-xl font-semibold md:text-xl">Get In Touch With Us</p>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor</p>
        </div>

        {/* Loop location thrice and render */}
        <div className="flex flex-col gap-[10px]">
          {Array(3)
            .fill(true)
            .map((_, i) => (
              <div key={i} className="flex gap-3">
                <ButtonGroup icon={<Image src={HouseSvg} alt="House Icon" />} />
                <div>
                  <p className="text-base font-bold">Our Location</p>
                  <p>One World Place, Lane R, BGC</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Contact form  */}
      <ContactForm />
    </div>
  );
};

export default ContactUs;
