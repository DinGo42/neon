import { FC } from 'react';
import { CardList } from './catalog-item/card-list';

export const Catalog: FC = () => {
  return (
    <>
      <div className="w-full h-fit grid tabletS:grid-cols-2 grid-cols-1 gap-5 justify-center pb-10">
        <CardList />
      </div>
    </>
  );
};
