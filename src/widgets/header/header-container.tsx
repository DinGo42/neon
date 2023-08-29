'use client';

import { useState, useRef, useCallback, useEffect, MouseEvent } from 'react';
import { Header } from './header';

export const HeaderContainer = () => {
  const [isOpen, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuClickHandler = useCallback(
    (e: Event) => {
      const target = e.target as HTMLElement;
      if (!btnRef.current) return;
      if (btnRef.current.contains(target)) {
        return;
      } else if (
        isOpen &&
        !btnRef.current.contains(target) &&
        target.id &&
        target.id !== 'menu'
      ) {
        setOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener('click', menuClickHandler);
    return () => {
      document.removeEventListener('click', menuClickHandler);
    };
  }, [menuClickHandler]);

  return <Header btnRef={btnRef} isOpen={isOpen} setOpen={setOpen} />;
};
