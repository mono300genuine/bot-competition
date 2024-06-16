import React from 'react';
import Image from 'next/image';
import Title from '../atoms/Title';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import SendBtn from '@/public/send.png'

interface UserActionProps {
  onSubmit: () => void;
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
}

const UserAction: React.FC<UserActionProps> = ({ onSubmit, question, setQuestion }) => {
  return (
    <div className="user-action">
      <div className='absoulute flex justify-center items-center top-4 text-4xl font-bold'>
        <Title text="Simple ChatGPT" color="#fff" />
      </div>
      <div className="flex flex-row justify-center items-center">
        <Input value={question} onChange={(e) => setQuestion(e.target.value)} />
        <Button onClick={onSubmit} textColor="" backgroundColor="">
          <Image src={SendBtn} width={150} height={100} alt="send" />
        </Button>
      </div>
    </div>
  );
};

export default UserAction;
