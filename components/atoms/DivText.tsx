import React from 'react';

interface DivTextProps {
  text: string;
}

const DivText: React.FC<DivTextProps> = ({ text }) => {
  return <div className='w-auto text-base border border-gray-100 rounded-md px-2 py-2 object-cover'>
    {text}
  </div>;
};

export default DivText;
