import { FC } from 'react';
import { Map } from './map/map';

export const Location: FC = () => {
  return (
    <div className="flex flex-col w-full h-fit gap-20 items-center">
      <div className=" w-screen h-[500px] flex border-b-2 border-t-2 border-green-700">
        <Map />
      </div>
    </div>
  );
};
