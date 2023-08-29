import { serviceTypes } from '@neon/widgets/catalog/constants';
import { GetStaticPaths } from 'next';
import Image from 'next/legacy/image';
import { FC } from 'react';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = serviceTypes.map((service) => ({
    params: { serviceType: service.type },
  }));
  return {
    paths,
    fallback: false,
  };
};

type ServiceProps = {
  params: {
    serviceType: string;
  };
};

const Service: FC<ServiceProps> = ({ params: { serviceType } }) => {
  const service = serviceTypes.find((service) => service.type === serviceType);
  if (!service) return null;
  const { bgImg, serviceName, text } = service;

  return (
    <div className="flex w-full h-full text-white gap-10 relative">
      <Image
        priority
        src={bgImg}
        layout="fill"
        objectFit="cover"
        alt={serviceName}
        className="opacity-20 z-0 inset-0 pointer-events-none rounded-2xl"
      />
      <div className="flex flex-col p-5 gap-10 text-xl w-full">
        <span className="text-5xl text-orange-700">{serviceName}</span>
        <pre className="whitespace-pre-line">{text}</pre>
      </div>
      <div className="w-2/3 h-96 relative">
        <Image
          priority
          src={bgImg}
          layout="fill"
          objectFit="cover"
          alt={serviceName}
          className="rounded-2xl opacity-60 "
        />
      </div>
    </div>
  );
};

export default Service;
