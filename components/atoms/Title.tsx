import React from 'react';

interface TitleProps {
  text: string;
  color: string;
}

const Title: React.FC<TitleProps> = ({ text, color }) => {
  return <h1 style={{ color }}>{text}</h1>;
};

export default Title;
