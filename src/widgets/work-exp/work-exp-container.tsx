'use client';
import { useState, useRef, useCallback, useEffect, FC } from 'react';
import { WorkExp } from './work-exp';

export const WorkExpContainer: FC = () => {
  const [currentChild, setCurrentChild] = useState(0);
  const infoList = useRef<HTMLDivElement>(null);
  const numVisibleReviews = 1;

  const scrollHandler = useCallback(
    (left: boolean) => {
      if (!infoList.current) return;

      const reviewWidth = infoList.current.offsetWidth || 0;
      const maxChilds = Math.floor(
        (infoList.current?.scrollWidth - reviewWidth * numVisibleReviews) /
          reviewWidth
      );

      let newChild = left ? currentChild - 1 : currentChild + 1;

      if (newChild < 0) {
        newChild = maxChilds;
      } else if (newChild > maxChilds) {
        newChild = 0;
      }

      setCurrentChild(newChild);
      infoList.current.scrollLeft = newChild * reviewWidth;
    },
    [currentChild]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      scrollHandler(false);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [scrollHandler]);

  return <WorkExp infoList={infoList} scrollHandler={scrollHandler} />;
};
