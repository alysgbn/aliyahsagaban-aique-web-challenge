'use client';
import React from 'react';
import Button from './ui/Button';
import Input from './ui/Input';

const ContactForm = () => {
  return (
    <div className="relative m-[24px] flex w-full max-w-[686px] items-center justify-end">
      {/* Radial Blurs */}
      <div className="absolute right-0 -z-10 h-full w-full max-w-[686px]">
        {/* Top Right Glow */}
        <div className="absolute right-[-50px] top-[-30px] h-[176px] w-[176px] rounded-[110px] bg-[radial-gradient(50%_50%_at_50%_50%,#2D68F8_0%,#E72DF8_100%)] blur-[30px]"></div>

        {/* Bottom Left Glow */}
        <div className="absolute bottom-[-70px] left-[-50px] h-[176px] w-[176px] rounded-[110px] bg-[radial-gradient(50%_50%_at_50%_50%,#2D68F8_0%,#E72DF8_100%)] blur-[50px]"></div>
      </div>

      {/* Card Container */}
      <div className="relative w-full max-w-[686px] rounded-lg bg-secondary-purple p-6 backdrop-blur-[17px]">
        <p className="pb-[24px] text-lg font-bold">Send us a message</p>

        {/* Card form  */}
        <form action="submit" onSubmit={(e) => e.preventDefault()} className="mt-4 flex flex-col gap-4">
          <Input id="name" label="Name" type="text" />
          <Input id="email" label="E-mail" type="email" />
          <Input id="tel" label="Phone" type="tel" />
          <Input id="message" label="Message" type="text" />
          <div className="lg-w-max w-full md:w-max md:self-end lg:self-end">
            <Button label="Send" fullWidth />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
