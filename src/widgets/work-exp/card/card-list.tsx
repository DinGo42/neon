import { FC } from 'react';
import { infoCardArray } from '../constant';
import { InfoCard } from './card';

export const InfoList: FC = () =>
  infoCardArray.map((card, index) => <InfoCard {...card} key={index} />);
