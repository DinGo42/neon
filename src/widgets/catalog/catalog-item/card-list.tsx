import { serviceTypes } from '../constants';
import { Card } from './card';

export const CardList = () =>
  serviceTypes.map((service, index) => <Card {...service} key={index} />);
