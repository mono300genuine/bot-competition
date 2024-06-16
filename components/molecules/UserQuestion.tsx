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
      <Avatar imageUrl="/user_avatar.png" />
    </div>
  );
};

export default UserQuestion;
