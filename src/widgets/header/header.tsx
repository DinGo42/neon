import { Dispatch, FC, RefObject, SetStateAction, memo } from 'react';
import MenuIcon from 'public/svgs/header/menu.svg';
import { Button } from '@neon/shared';
import { Menu } from './menu/menu';
import { Link } from '@neon/shared/components';
import {
  SelectedLinkStyleType,
  LinkStyleType,
} from '@neon/shared/components/link';

type HeaderProps = {
  btnRef: RefObject<HTMLButtonElement>;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Header: FC<HeaderProps> = ({ btnRef, isOpen, setOpen }) => {
  return (
    <>
      <header className="flex flex-col items-center sticky top-0 z-50">
        <div className="flex w-screen pt-5 pb-5 justify-between items-center pl-4 pr-4  text-white bg-black z-20 phoneM:pl-20 phoneM:pr-20">
          <Button
            onClick={() => setOpen((prev) => !prev)}
            ref={btnRef}
            className="tabletM:hidden"
          >
            <MenuIcon className="scale-90" />
          </Button>
          <Link
            href={'/'}
            selectedEffect={SelectedLinkStyleType.HOVER_TEXT}
            linkStyle={LinkStyleType.HEADER_LINK}
            className="hover:text-pink-700 transition-all duration-700 max-tabletM:hidden"
          >
            Home
          </Link>
          <div className="max-tabletM:hidden flex gap-20">
            <Link
              href={'/contact-us'}
              selectedEffect={SelectedLinkStyleType.HOVER_TEXT}
              linkStyle={LinkStyleType.HEADER_LINK}
              className="hover:text-pink-700 transition-all duration-700"
            >
              Зв`язок з нами
            </Link>
          </div>
        </div>
        <Menu isOpen={isOpen} />
      </header>
    </>
  );
};
