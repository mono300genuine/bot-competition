'use client'

import React, { useState } from 'react';
import UserAction from '@/components/molecules/UserAction';
import ChatResult from '@/components/organisms/ChatResult';
import styles from "@/app/css/Chat.module.css";

const ChatPage: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState<{ question: string; response: string }[]>([]);

  const handleSendMessage = async () => {
    const response = await fetch('api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (response.ok) {
      const data = await response.json();
      const answer = data.answer;
      setChatHistory([...chatHistory, { question, response: answer }]);
      setQuestion('');
    } else {
      console.error('Failed to fetch response from API');
    }
  };
  const sayHello = async () => {
    const response = await fetch('api/hello', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (response.ok) {
      const data = await response.json();
      setQuestion('Say Hello');
    } else {
      console.error('Failed to fetch response from API');
    }
  };

  return (
    <div className={styles.chatPage}>
      <UserAction
        onSubmit={handleSendMessage}
        question={question}
        setQuestion={setQuestion}
      />
      <div className={styles.chatHistory}>
        {chatHistory.map((chat, index) => (
          <ChatResult key={index} question={chat.question} response={chat.response} />
        ))}
      </div>
    </div>
  );
};

export default ChatPage;

