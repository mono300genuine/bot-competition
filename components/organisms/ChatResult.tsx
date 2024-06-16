import React from 'react';
import UserQuestion from '../molecules/UserQuestion';
import BotResponse from '../molecules/BotResponse';

interface ChatResultProps {
  question: string;
  response: string;
}

const ChatResult: React.FC<ChatResultProps> = ({ question, response }) => {
  return (
    <div className="chat-result">
      <div className='mx-auto text-white mt-12'>
        <BotResponse response={response} />
      </div>
      <div className='absolute mx-auto text-white right-0'>
        <UserQuestion question={question} />
      </div>
    </div>
  );
};

export default ChatResult;
