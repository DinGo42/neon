import { AppLink } from '@neon/shared/components';
import {
  LinkStyleType,
  SelectedLinkStyleType,
} from '@neon/shared/components/link';
import { FC } from 'react';

type MenuProps = {
  isOpen: boolean;
};

export const Menu: FC<MenuProps> = ({ isOpen }) => {
  return (
    <div
      id="menu"
      className={`bg-black w-screen flex flex-col gap-2 text-green-700 absolute top-auto overflow-hidden  z-10 h-fit pt-3 ${
        isOpen
          ? 'translate-y-16 shadow-2xl shadow-green-700'
          : '-translate-y-full'
      } transition-transform duration-500`}
    >
      <AppLink
        href={'/'}
        selectedEffect={SelectedLinkStyleType.UNDERLINE}
        linkStyle={LinkStyleType.HEADER_LINK}
      >
        Головна
      </AppLink>
      <AppLink
        href={'/contact-us'}
        selectedEffect={SelectedLinkStyleType.UNDERLINE}
        linkStyle={LinkStyleType.HEADER_LINK}
      >
        Зв`язок з нами
      </AppLink>
    </div>
  );
};