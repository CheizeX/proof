import React, { Dispatch, FC, SetStateAction } from 'react';
import { BsChat } from 'react-icons/bs';
import { FiHome, FiSettings } from 'react-icons/fi';
import { IFiltersProps } from '../Filters/filters.interface';

interface Props {
  filters: IFiltersProps;
  setFilters: Dispatch<SetStateAction<any>>;
}
export const Footer: FC<Props> = ({ filters, setFilters }) => {
  return (
    <>
      <button
        type="button"
        className={`${
          filters.currentSection === 'home' ? 'text-turquoise' : 'text-gray_3'
        } text-[8px] flex flex-col items-center hover:text-opacity-80 hover:text-turquoise`}
        onClick={() => setFilters({ ...filters, currentSection: 'home' })}
      >
        <FiHome size={20} />
        <div className="mt-[5px]">Home</div>
      </button>
      <button
        type="button"
        className={`${
          filters.currentSection === 'chat' ? 'text-turquoise' : 'text-gray_3'
        } text-[8px] flex flex-col items-center hover:text-opacity-80 hover:text-turquoise`}
        onClick={() => setFilters({ ...filters, currentSection: 'chat' })}
      >
        <BsChat
          size={20}
          style={{
            strokeWidth: '0.2px',
          }}
        />
        <div className="mt-[5px]">Chat</div>
      </button>
      <button
        type="button"
        className={`${
          filters.currentSection === 'settings'
            ? 'text-turquoise'
            : 'text-gray_3'
        } text-[8px] flex flex-col items-center hover:text-opacity-80 hover:text-turquoise`}
        onClick={() => setFilters({ ...filters, currentSection: 'settings' })}
      >
        <FiSettings size={20} />
        <div className="mt-[5px]">Settings</div>
      </button>
    </>
  );
};
