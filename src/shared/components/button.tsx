'use client';
import { ButtonHTMLAttributes, ReactNode, forwardRef, memo } from 'react';
import { twJoin } from 'tailwind-merge';

export enum ButtonType {
  HEADER = 'bg-black-300 -skew-x-45 origin-center w-1/2 h-1/2 justify-center items-center p-2',
  CAROUSEL = 'h-full tabletM:h-fit tabletM:p-5 tabletM:bg-black-600 w-fit rounded-2xl max-tabletM:absolute opacity-20 tabletM:opacity-40 hover:border-blue-700 tabletM:border-2',
  NONE = '',
}

type ButtonProps = {
  children?: ReactNode;
  styleType?: ButtonType;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Ref = HTMLButtonElement;

export const Button = memo(
  forwardRef<Ref, ButtonProps>(
    ({ children, styleType = ButtonType.NONE, className, ...props }, ref) => {
      return (
        <button ref={ref} {...props} className={twJoin(className, styleType)}>
          {children}
        </button>
      );
    }
  )
);
