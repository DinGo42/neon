import { FC } from 'react';
import { Map } from './map/map';

export const Location: FC = () => {
  return (
    <div className="flex flex-col w-full h-fit gap-20">
      <div className=" w-full h-[400px] flex border-2 rounded-3xl border-green-700">
        <Map />
      </div>
    </div>
  );
};
