'use client';

import { memo } from 'react';
import { serviceTypes } from '../constants';
import { Card } from './card';

export const CardList = memo(() =>
  serviceTypes.map((service, index) => <Card {...service} key={index} />)
);
