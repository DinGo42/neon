'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Header } from './header';

export const HeaderContainer = () => {
  const [isOpen, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuClickHandler = useCallback(
    (e) => {
      if (!btnRef.current) return;
      if (btnRef.current.contains(e.target)) {
        return;
      } else if (
        isOpen &&
        !btnRef.current.contains(e.target) &&
        e.target.id !== 'menu'
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
