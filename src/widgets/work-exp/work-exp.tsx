import { Button } from '@neon/shared';
import { FC, RefObject } from 'react';
import { InfoList } from './card/card-list';
import ArrowIcon from 'public/svgs/button/arrow.svg';
import { ButtonType } from '@neon/shared/components/button';
type WorkExpProps = {
  scrollHandler: (left: boolean) => void;
  infoList: RefObject<HTMLDivElement>;
};
export const WorkExp: FC<WorkExpProps> = ({ infoList, scrollHandler }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-screen tabletM:w-full h-fit pt-14  pb-14  justify-between gap-10 relative">
        <Button
          className="left-0 z-30"
          styleType={ButtonType.CARUSEL_BTN}
          onClick={() => scrollHandler(true)}
        >
          <ArrowIcon className="scale-100 hover:fill-pink-700 transition-colors duration-1000" />
        </Button>
        <div
          className="h-80 w-full bg-white flex items-center overflow-hidden scroll-smooth rounded-xl flex-nowrap"
          ref={infoList}
        >
          <InfoList />
        </div>
        <Button
          className="right-0 z-30"
          styleType={ButtonType.CARUSEL_BTN}
          onClick={() => scrollHandler(false)}
        >
          <ArrowIcon className="rotate-180 scale-100 hover:fill-pink-700 transition-colors duration-1000" />
        </Button>
      </div>
    </div>
  );
};
