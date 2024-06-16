import React from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={onChange} 
      className="w-4/5 border boder-gray-200 px-4 py-4 rounded-2xl bg-transparent text-white text-xl"
    />
  );
};

export default Input;
