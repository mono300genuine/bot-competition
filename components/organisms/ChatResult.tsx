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
      <div className='flex w-4/5 mx-auto text-white justify-end'>
        <UserQuestion question={question} />
      </div>
      <div className='w-4/5 mx-auto text-white mt-12'>
        <BotResponse response={response} />
      </div>
    </div>
  );
};

export default ChatResult;
