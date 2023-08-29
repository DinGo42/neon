'use client';
import { FC, memo } from 'react';
import { infoCardArray } from '../constant';
import { InfoCard } from './card';

export const InfoList: FC = memo(() =>
  infoCardArray.map((card, index) => <InfoCard {...card} key={index} />)
);
