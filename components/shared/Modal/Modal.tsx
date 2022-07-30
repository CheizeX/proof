import React, { Dispatch } from 'react';
import { FC } from 'react';
import { SetStateAction } from 'react';

interface IPropsModal {
  activeModal: string;
  setActiveModal: Dispatch<SetStateAction<string>>;
}
export const Modal: FC<IPropsModal> = ({ setActiveModal }) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-[1px] backdrop-saturate-10 backdrop-opacity-0_9">
      <button type="button" onClick={() => setActiveModal('')}>
        CERRAR
      </button>
    </div>
  );
};
