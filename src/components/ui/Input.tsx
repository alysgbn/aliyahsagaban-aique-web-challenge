'use client';
import React, { useState } from 'react';
// Custom made Input component
const Input = ({ id, label, type }: { id: string; label: string; type: string }) => {
  const [value, setValue] = useState(''); // Track input value
  const [isFocused, setIsFocused] = useState(false); // Check if input is focused or not

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={`text-sm transition duration-300 ${isFocused || value ? 'text-primary-blue' : 'text-black'}`}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`border-b-[1px] ${isFocused || value ? 'border-primary-blue' : 'border-black'} bg-transparent text-primary-blue outline-none transition duration-300 ease-in-out`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default Input;
