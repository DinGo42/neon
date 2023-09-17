import { FC, ReactNode } from 'react';

type AppWrapperProps = {
  children: ReactNode;
};

export const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return (
    <div className="flex-1 h-screen scroll-smooth pb-2 gap-2 overflow-x-hidden flex flex-col pl-2 pr-2 dectopS:pl-20 dectopS:pr-20 pl-5 pr-5">
      {children}
    </div>
  );
};
