import React, { ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPress: () => void;
}

const Input: React.FC<InputProps> = ({ value, onChange, onEnterPress }) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onEnterPress();
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      className="w-full border boder-gray-200 px-4 py-4 rounded-2xl bg-gray-900 text-white text-xl"
      placeholder="Type your question..."
    />
  );
};

export default Input;
function onEnterPress() {
  throw new Error('Function not implemented.');
}

