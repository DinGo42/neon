import { FC, ReactNode } from 'react';

type AppWrapperProps = {
  children: ReactNode;
};

export const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return (
    <div className="flex-1 h-screen scroll-smooth gap-2 overflow-y-auto flex overflow-hidden flex-col pl-2 pr-2 phoneM:pl-20 phoneM:pr-20">
      {children}
    </div>
  );
};
