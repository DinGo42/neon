import { serviceTypes } from '@neon/widgets/catalog/constants';
import { FC } from 'react';
import Image from 'next/legacy/image';

type ServiceProps = {
  params: {
    serviceType: string;
  };
};

const Service: FC<ServiceProps> = ({ params: { serviceType } }) => {
  const service = serviceTypes.find((service) => service.type === serviceType);
  if (!service) return;
  const { bgImg, serviceName, text } = service;

  return (
    <div className="flex w-full h-full max-h-fit text-white gap-10 relative tabletM:p-10 tabletS:p-20">
      <Image
        priority
        src={bgImg}
        layout="fill"
        objectFit="cover"
        alt={serviceName}
        className="opacity-20 z-0 inset-0 pointer-events-none rounded-2xl"
      />
      <div className="flex max-tabletM:flex-col w-full">
        <div className="flex flex-col p-3 gap-10 text-xl max-tabletM:w-full w-1/2">
          <span className="text-4xl text-orange-700 break-words whitespace-pre-line">
            {serviceName}
          </span>
          <pre className="whitespace-pre-line max-w-full">{text}</pre>
        </div>
        <div className="tabletM:w-2/3 w-full tabletM:h-auto h-96 relative">
          <Image
            priority
            src={bgImg}
            layout="fill"
            objectFit="cover"
            alt={serviceName}
            className="rounded-2xl opacity-60"
          />
        </div>
      </div>
    </div>
  );
};
export default Service;

export async function getStaticPaths() {
  const paths = serviceTypes.map((srvice) => ({
    params: { serviceType: srvice.type },
  }));
  return {
    paths,
    fallback: false,
  };
}
