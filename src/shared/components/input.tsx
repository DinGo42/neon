'use client';
import { DetailedHTMLProps, InputHTMLAttributes, FC, memo } from 'react';
import { twJoin } from 'tailwind-merge';

export enum InputType {
  HEADER_INPUT = 'bg-black-300 -skew-x-45 origin-center w-1/2 h-1/2 justify-center items-center p-2',
  RADIO_INPUT_SIZE = 'border-blue-700',
  RADIO_INPUT_MATERIAL = 'border-pink-700',
  NONE = '',
}

type InputProps = {
  className?: string;
  checked?: boolean;
  inputStyleType?: InputType;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input: FC<InputProps> = memo(
  ({ className, inputStyleType = InputType.NONE, checked, ...props }) => {
    return (
      <input
        {...props}
        type="radio"
        className={`${twJoin(
          className,
          checked && inputStyleType
        )} cursor-pointer appearance-none outline-none transition-colors duration-300 ease-in-out h-5 w-5 border-2 rounded-full`}
      />
    );
  }
);
