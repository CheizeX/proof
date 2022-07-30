import React from 'react';
import { Card } from './shared/Card';

export const Catalogue = () => {
  return (
    <div className="container h-full overflow-auto scroll-smooth hover:scroll-auto overflowHideScroll">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <Card quantity={item} key={item.toString()} />
      ))}
    </div>
  );
};
