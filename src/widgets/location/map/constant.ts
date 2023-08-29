export type officeMark = {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  content: string;
  subContent: string;
};
export const mainOffice = { lat: 49.41191365637788, lng: 32.02191611534322 };

export const offices: officeMark[] = [
  {
    position: mainOffice,
    title: 'Наш головний офіс в місті Черкаси',
    content: 'Neon service',
    subContent: `Офіс знаходися в середині складу,
    вулиця Смілянська, 142/3 - заїзд з вулиці Смілянська`,
  },
];
