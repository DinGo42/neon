'use client';
import { ButtonHTMLAttributes, ReactNode, forwardRef, memo } from 'react';
import { twJoin } from 'tailwind-merge';

export enum ButtonType {
  HEADER_BTN = 'bg-black-300 -skew-x-45 origin-center w-1/2 h-1/2 justify-center items-center p-2',
  CARUSEL_BTN = 'h-full tabletM:h-fit tabletM:p-5 tabletM:bg-black-600 w-fit rounded-2xl max-tabletM:absolute opacity-20 tabletM:opacity-40 hover:border-blue-700 tabletM:border-2',
  CHECK_BOX_BTN = 'p-4 h-fit w-fit rounded-2xl',
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
