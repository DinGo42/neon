import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC, memo } from 'react';
import { ServiceType } from '../constants';

export const Card: FC<ServiceType> = memo(
  ({ serviceName, type, bgImg = '/imgs/moss.jpg' }) => (
    <Link href={`services/${type}`} className="p-5 text-green-700 bg-black rounded-2xl flex flex-col gap-4 hover:scale-102 transition-all duration-500 items-end justify-center max-w-full min-w-19 max-h-32 min-h-19 relative">
      <Image
        src={bgImg}
        objectFit="cover"
        alt="moss"
        layout="fill"
        loading="lazy"
        className="duration-500 opacity-40 z-0 hover:opacity-60 rounded-2xl bg-black-600"
      />
      <div className="w-full h-full flex items-center justify-center">
        <h1 className="text-4xl z-10 text-center">{serviceName}</h1>
      </div>
    </Link>
  )
);
