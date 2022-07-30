import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

export const Filters = () => {
  return (
    <div className="container flex items-center mt-[10px]">
      <button
        type="button"
        className="flex items-center justify-between border bg-white text-[10px] text-center text-gray_4 rounded h-[35px] w-[90px] pl-[8px] pr-[12px] mr-[10px]"
      >
        Expertize
        <FaChevronDown size={12} color="#2B2B2B" />
      </button>
      <button
        type="button"
        className="flex items-center justify-between border bg-white text-[10px] text-center text-gray_4 rounded h-[35px] w-[90px] pl-[8px] pr-[12px] mr-[10px]"
      >
        Price <FaChevronDown size={12} color="#2B2B2B" />
      </button>
      <button
        type="button"
        className="flex items-center justify-center text-turquoise text-[12px] ml-[12px]"
      >
        Reset Filters
      </button>
    </div>
  );
};
