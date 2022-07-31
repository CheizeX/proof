import React, { FC } from 'react';
import { IFiltersProps } from '../Filters/filters.interface';
import { Card } from './shared/Card';
import { objItems } from './shared/objItems';

interface IProps {
  filters: IFiltersProps;
}

export const Catalogue: FC<IProps> = ({ filters }) => {
  return (
    <div className="container h-full overflow-auto scroll-smooth hover:scroll-auto overflowHideScroll">
      {objItems
        .filter((item) => item.price >= Number(filters.byPrice))
        .map((item, index) => (
          <Card quantity={index + 1} key={index.toString()} item={item} />
        ))}
    </div>
  );
};
