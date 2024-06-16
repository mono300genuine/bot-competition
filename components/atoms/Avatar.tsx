import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  return <>
    <Image
      src={imageUrl}
      alt="avatar"
      width={40}
      height={40}
      className="rounded-full border border-gray"
    />
    <style jsx>{`
      img {
        border-radius: 100%;
      }
    `}</style>
  </>
};

export default Avatar;
