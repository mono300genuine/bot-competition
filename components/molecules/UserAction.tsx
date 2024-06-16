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
    <div className="user-action">
      <div className='absoulute flex justify-center items-center top-4 text-4xl font-bold'>
        <Title text="Simple ChatGPT" color="#fff" />
      </div>
      <div className="flex flex-row justify-center items-center">
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
