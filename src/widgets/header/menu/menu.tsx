'use client';
import { AppLink } from '@neon/shared/components';
import {
  LinkStyleType,
  SelectedLinkStyleType,
} from '@neon/shared/components/link';
import { FC } from 'react';
import { HomeIcon, PhoneIcon } from '../../../../public/svgs';
import { usePathname, useRouter } from 'next/navigation';

type MenuProps = {
  isOpen: boolean;
};

export const Menu: FC<MenuProps> = ({ isOpen }) => {
  const pathname = usePathname();
  return (
    <div
      id="menu"
      className={`bg-black w-screen flex flex-col text-pink-700 absolute top-auto overflow-hidden  z-10 h-fit ${
        isOpen
          ? 'translate-y-16 border-b-2 border-green-700 shadow-green-700'
          : '-translate-y-[200%]'
      } transition-transform duration-500`}
    >
      <AppLink
        href={'/'}
        selectedEffect={SelectedLinkStyleType.HOVER_TEXT}
        linkStyle={LinkStyleType.HEADER_LINK}
      >
        <HomeIcon fill={`${pathname === '/' ? '#33FF00' : '#FF66CC'}`} />
        Головна
      </AppLink>
      <AppLink
        href={'/contact-us'}
        selectedEffect={SelectedLinkStyleType.HOVER_TEXT}
        linkStyle={LinkStyleType.HEADER_LINK}
      >
        <PhoneIcon
          fill={`${pathname === '/contact-us' ? '#33FF00' : '#FF66CC'}`}
        />
        Зв`язок з нами
      </AppLink>
    </div>
  );
};
