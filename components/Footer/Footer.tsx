import React from 'react';
import { BsChat } from 'react-icons/bs';
import { FiHome, FiSettings } from 'react-icons/fi';

export const Footer = () => {
  return (
    <>
      <button
        type="button"
        className="text-gray_3 text-[8px] flex flex-col items-center"
      >
        <FiHome size={20} />
        <span>Home</span>
      </button>
      <button
        type="button"
        className="text-gray_3 text-[8px] flex flex-col items-center"
      >
        <BsChat
          size={20}
          style={{
            strokeWidth: '0.2px',
          }}
        />
        <span>Chat</span>
      </button>
      <button
        type="button"
        className="text-gray_3 text-[8px] flex flex-col items-center"
      >
        <FiSettings size={20} />
        <span>Settings</span>
      </button>
    </>
  );
};
