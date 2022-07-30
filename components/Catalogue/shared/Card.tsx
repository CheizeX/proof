/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'flowbite-react';
import React, { FC, Fragment } from 'react';
import { FaCalendarDay } from 'react-icons/fa';
import { IoIosChatbubbles } from 'react-icons/io';
interface IProps {
  quantity: number;
}

export const Card: FC<IProps> = ({ quantity }) => {
  const objItems = [
    {
      title: 'Braids',
      madedBy: 'Kailey Lash',
      takeTime: 1,
      place: 'In House',
      process: 'Customization',
      price: 100,
    },
  ];
  return (
    <div className="container flex items-center justify-between border-b border-b-gray_1 h-[135px]">
      <div className="w-[47%] h-[120px] change-carousel focus:outline-none focus:border-8 ring-offset-0">
        <Carousel slideInterval={5000}>
          {['1', '2', '3', '4'].map((item) => (
            <img
              key={item}
              src={`https://flowbite.com/docs/images/carousel/carousel-${item}.svg`}
              alt="..."
            />
          ))}
        </Carousel>
      </div>
      <div className="w-[47%] h-[120px]  flex flex-col justify-between pt-1 pb-1">
        {objItems.map((item) => (
          <Fragment key={item.title + quantity.toString()}>
            <div className="container flex items-center justify-between flex-col h-[65px]">
              <div className="flex items-center w-full">
                <h3 className="text-gray_5 font-semibold text-center text-[10px] mr-1">
                  {item.title}
                </h3>
                <h3 className="text-gray_5 text-center font-[400] text-[10px]">
                  by {item.madedBy}
                </h3>
              </div>
              <div className="flex items-center justify-between w-full text-[8px] font-[400] opacity-50 text-gray_5">
                <h3 className="mr-2">
                  Takes {item.takeTime * (quantity + 1)}{' '}
                  {item.takeTime * (quantity + 1) > 1 ? 'hours' : 'hour'}
                </h3>
                <h3 className="flex items-center h-[8px] w-auto">
                  <div className="little-spot self-end" />
                  {item.place}
                </h3>
                <h3 className="flex items-center h-[8px] w-auto">
                  <div className="little-spot self-end" />
                  {item.process}
                </h3>
              </div>
              <div className="flex items-center justify-between w-full">
                <h3 className="flex text-gray_5 text-center text-[12px] font-[400]">
                  Price: <div className="ml-1 font-bold">R.{item.price}</div>
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-between w-full text-[10px] pr-2">
              <button
                type="button"
                className="flex items-center justify-evenly bg-turquoise rounded text-gray_1 h-[25px] w-[80px] text-center"
              >
                <FaCalendarDay />
                <span>Book now</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center bg-turquoise rounded text-gray_1 h-[25px] w-[80px] text-center"
              >
                <IoIosChatbubbles size={12} />
                <span className="ml-2">Chat</span>
              </button>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
