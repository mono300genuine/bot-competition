import React from 'react';
import Title from '../atoms/Title';
import Input from '../atoms/Input';

interface UserActionProps {
  onSubmit: () => void;
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
}

const UserAction: React.FC<UserActionProps> = ({ onSubmit, question, setQuestion }) => {
  return (
    <div className="user-action fixed top-0 left-0 w-full bg-gray-800 p-4 flex flex-col items-center space-y-4 z-10">
      <div className='text-4xl font-bold'>
        <Title text="Simple ChatGPT" color="#fff" />
      </div>
      <div className="flex flex-row justify-center items-center space-x-4">
        <Input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onEnterPress={onSubmit}
        />
      </div>
    </div>
  );
};

export default UserAction;
