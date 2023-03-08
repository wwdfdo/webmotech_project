import React from 'react';
import avatar from '@images/avatar.png';

const Avatar = () => {
  return (
    <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-primary">
      <img src={avatar} alt="avatar" />
    </div>
  );
};

export default Avatar;
