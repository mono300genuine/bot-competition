import React from 'react';

interface DivTextProps {
  text: string;
}

const DivText: React.FC<DivTextProps> = ({ text }) => {
  return <div className="div-text">
    <span className='text-2xl border border-gray-100 rounded-md px-12 py-4'>
      {text}
    </span>
  </div>;
};

export default DivText;
