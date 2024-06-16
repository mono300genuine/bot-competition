import React from 'react';
import Avatar from '../atoms/Avatar';
import DivText from '../atoms/DivText';

interface BotResponseProps {
  response: string;
}

const BotResponse: React.FC<BotResponseProps> = ({ response }) => {
  return (
    <div className='bot-response flex items-start space-x-8'>
      <div className='flex-shrink-0'>
        <Avatar imageUrl="/bot_avatar.png" />
      </div>
      <DivText text={response} />
    </div>
  );
};

export default BotResponse;
