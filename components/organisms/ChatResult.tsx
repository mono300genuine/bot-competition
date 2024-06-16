import React, { useState, useEffect } from 'react';
import UserQuestion from '../molecules/UserQuestion';
import BotResponse from '../molecules/BotResponse';

interface ChatResultProps {
  question: string;
  response: string;
}

const ChatResult: React.FC<ChatResultProps> = ({ question, response }) => {
  const [displayedResponse, setDisplayedResponse] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < response.length) {
        setDisplayedResponse((prev) => prev + response[currentIndex]);
        currentIndex += 1;
      } else {
        clearInterval(interval);
      }
    }, 30); 

    return () => clearInterval(interval);
  }, [response]);

  return (
    <div className="chat-result mt-12">
      <div className='flex w-4/5 mx-auto text-white justify-end mt-4'>
        <UserQuestion question={question} />
      </div>
      <div className='w-4/5 mx-auto text-white mt-12'>
        <BotResponse response={displayedResponse} />
      </div>
    </div>
  );
};

export default ChatResult;
