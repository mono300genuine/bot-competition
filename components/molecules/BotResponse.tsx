import React from 'react';
import Avatar from '../atoms/Avatar';
import DivText from '../atoms/DivText';

interface BotResponseProps {
  response: string;
}

const BotResponse: React.FC<BotResponseProps> = ({ response }) => {
  return (
    <div className='bot-response flex space-x-8'>
      <Avatar imageUrl="/bot_avatar.png" />
      <DivText text={response} />
    </div>
  );
};

export default BotResponse;
