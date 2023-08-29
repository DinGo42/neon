import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode, memo } from 'react';
import { twJoin } from 'tailwind-merge';

export enum LinkStyleType {
  MENU_LINK = 'p-3',
  HEADER_LINK = 'p-3',
  NONE = '',
}
export enum SelectedLinkStyleType {
  UNDERLINE = 'border-b-2 border-blue-700',
  HOVER_TEXT = 'text-pink-700',
  NONE = '',
}

type AppLinkProps = {
  children?: ReactNode;
  href: string;
  linkStyle?: LinkStyleType;
  selectedEffect: SelectedLinkStyleType;
  className?: string;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = memo(
  ({
    children,
    href,
    linkStyle = LinkStyleType.NONE,
    selectedEffect = SelectedLinkStyleType.NONE,
    className,
    ...props
  }) => {
    const pathname = usePathname();
    return (
      <Link
        href={href}
        className={twJoin(
          className,
          linkStyle,
          pathname === href && selectedEffect
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }
);
