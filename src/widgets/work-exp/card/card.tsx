import Image from 'next/legacy/image';
import { FC, memo } from 'react';
type InfoCardProps = {
  src: string;
};

export const InfoCard: FC<InfoCardProps> = memo(
  ({ src = '/imgs/test.jpg' }) => (
    <div className="min-w-full h-full justify-center flex bg-black-600 relative">
      <Image
        priority
        alt="rip"
        src={src}
        layout="fill"
        className="absolute inset-0 bg-cover filter blur-sm"
      />
      <Image
        priority
        alt="rip"
        src={src}
        layout="fill"
        objectFit={'contain'}
        className="z-20 p-2"
      />
    </div>
  )
);
