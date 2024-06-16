import React from 'react';
import Avatar from '../atoms/Avatar';
import DivText from '../atoms/DivText';

interface UserQuestionProps {
  question: string;
}

const UserQuestion: React.FC<UserQuestionProps> = ({ question }) => {
  return (
    <div className="flex user-question space-x-8">
      <DivText text={question} />
      <div className='flex-shrink-0'>
        <Avatar imageUrl="/bot_avatar.png" />
      </div>
    </div>
  );
};

export default UserQuestion;
