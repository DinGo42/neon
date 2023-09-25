'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Header } from './header';

export const HeaderContainer = () => {
  const [isOpen, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuClickHandler = useCallback(
    (e: MouseEvent) => {
      if (!btnRef.current) return;
      const target = e.target as HTMLElement;
      if (btnRef.current.contains(e.target as Node)) {
        return;
      } else if (
        isOpen &&
        !btnRef.current.contains(e.target as Node) &&
        target.id !== 'menu'
      ) {
        setOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    window.addEventListener('click', menuClickHandler);
    return () => {
      window.removeEventListener('click', menuClickHandler);
    };
  }, [menuClickHandler]);
  return <Header btnRef={btnRef} isOpen={isOpen} setOpen={setOpen} />;
};
