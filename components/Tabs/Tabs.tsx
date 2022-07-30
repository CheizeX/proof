import React, { FC } from 'react';

export const Tabs: FC = () => {
  return (
    <div className="container h-[34px] w-[222px] bg-gray_1 text-[11px] flex items-center justify-center gap-[1px] rounded-lg">
      {['Stylist', 'Styles', 'Sessions'].map((item) => (
        <button
          type="button"
          className="hover:text-gray-900 text-gray-900 hover:font-[500] hover:bg-white px-4 py-2 rounded-lg h-[24.5px] w-[68.9px] flex items-center justify-center transition duration-200 cubic-bezier-0.2"
          key={item}
          onClick={() => console.log(`Clicked ${item}`)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
