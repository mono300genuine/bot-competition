import React from 'react';

interface DivTextProps {
  text: string;
}

const DivText: React.FC<DivTextProps> = ({ text }) => {
  return <div className='w-3/5 text-base border border-gray-100 rounded-md px-12 py-4 object-cover'>
    {text}
  </div>;
};

export default DivText;
