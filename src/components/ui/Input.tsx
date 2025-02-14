'use client';
import React, { useState } from 'react';
// Custom made Input component
const Input = ({ id, label, type }: { id: string; label: string; type: string }) => {
  const [value, setValue] = useState(''); // Track input value
  const [isFocused, setIsFocused] = useState(false); // Check if input is focused or not

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // To ensure that only numbers are allowed after "+63" and prevent removing "+63"
    if (type === 'tel') {
      if (!inputValue.startsWith('+63')) {
        inputValue = '+63'; // To restore "+63" if removed
      }
      inputValue = inputValue.replace(/[^\d+]/g, ''); // To remove non-numeric characters (except "+")
    }

    setValue(inputValue);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={`text-sm transition duration-300 ${isFocused || value ? 'text-primary-blue' : 'text-black'}`}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        className={`border-b-[1px] ${isFocused || value ? 'border-primary-blue' : 'border-black'} bg-transparent text-primary-blue outline-none transition duration-300 ease-in-out`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={`${type === 'tel' ? '+63' : ''}`}
      />
    </div>
  );
};

export default Input;
