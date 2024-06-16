import React, { ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onEnterPress: () => void;  
}

const Input: React.FC<InputProps> = ({ value, onChange, onEnterPress }) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnterPress();
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyPress={handleKeyPress} 
      className="input-class"
      placeholder="Type your question..."
    />
  );
};

export default Input;
