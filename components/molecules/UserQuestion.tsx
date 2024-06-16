import React from 'react';
import Avatar from '../atoms/Avatar';
import DivText from '../atoms/DivText';

interface UserQuestionProps {
  question: string;
}

const UserQuestion: React.FC<UserQuestionProps> = ({ question }) => {
  return (
    <div className="flex user-question items-end space-x-4">
      <DivText text={question} />
      <div className='flex-shrink-0'>
        <Avatar imageUrl="/user_avatar.png" />
      </div>
    </div>
  );
};

export default UserQuestion;
