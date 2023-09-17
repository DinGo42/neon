import { Dispatch, FC, RefObject, SetStateAction } from 'react';
import MenuIcon from 'public/svgs/header/menu.svg';
import { Button } from '@neon/shared';
import { Menu } from './menu/menu';
import { AppLink } from '@neon/shared/components';
import {
  SelectedLinkStyleType,
  LinkStyleType,
} from '@neon/shared/components/link';
import Image from 'next/legacy/image';

type HeaderProps = {
  btnRef: RefObject<HTMLButtonElement>;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Header: FC<HeaderProps> = ({ btnRef, isOpen, setOpen }) => {
  return (
    <>
      <header className="flex flex-col items-center sticky top-0 z-50">
        <div className="flex p-2 pt-2 max-tabletM:pt-5 max-tabletM:pb-5 w-screen justify-between items-center pl-4 pr-4  text-white bg-black z-20 dectopS:pl-20 dectopS:pr-20">
          <Button
            onClick={() => setOpen((prev) => !prev)}
            ref={btnRef}
            className="tabletM:hidden"
          >
            <MenuIcon className="scale-90" />
          </Button>
          <AppLink
            href={'/'}
            selectedEffect={SelectedLinkStyleType.HOVER_TEXT}
            linkStyle={LinkStyleType.HEADER_LINK}
            className="hover:text-pink-700 transition-all duration-700 max-tabletM:hidden w-fit"
          >
            <Image src={'/imgs/logo.png'} width={150} height={70} alt="Logo" />
          </AppLink>
          <div className="max-tabletM:hidden flex gap-20">
            <AppLink
              href={'/contact-us'}
              selectedEffect={SelectedLinkStyleType.HOVER_TEXT}
              linkStyle={LinkStyleType.HEADER_LINK}
              className="hover:text-pink-700 transition-all duration-700"
            >
              Зв`язок з нами
            </AppLink>
          </div>
        </div>
        <Menu isOpen={isOpen} />
      </header>
    </>
  );
};
