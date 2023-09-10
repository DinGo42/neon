import { HeaderContainer } from '@neon/widgets';
import './globals.css';
import type { Metadata } from 'next';
import { Istok_Web } from 'next/font/google';
import { AppWrapper } from '@neon/shared';
import Head from 'next/head';

const istok_Web = Istok_Web({ subsets: ['latin'], weight: '700' });

export const metadata: Metadata = {
  title: {
    default: 'Neon service - Послуги з неонових вивісок та реклами в Україні',
    template:
      '%s | Neon service - Послуги з неонових вивісок та реклами в Україні',
  },
  creator: 'Neon Service',
  authors: [
    { name: 'Ivan Nesterenko', url: 'https://djinni.co/q/c621d9ee9c/' },
    { name: 'Neon Service' },
  ],
  viewport: 'width=device-width, initial-scale=1.0',
  description:
    'Neon Service - компанія, що надає послуги зі створення світильників, неонових вивісок, монтажу реклами, торгового обладнання, фрезерування та створення вивісок з мохом.',
  keywords: [
    'Neon',
    'Neon Service',
    'advertising',
    'advertising services',
    'milling',
    'lamps',
    'trade equipment',
    'moss',
    'moss signs',
    'мох',
    'вивіски з моху',
    'торгове обладнання',
    'фрезерування',
    'реклама',
    'лампи',
    'світильники',
    'неон',
    'неон сервіс',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${'AIzaSyA0sJezngIwGaI8yrDU0pn3BCE2DrRM940'}`}
        />
      </Head>
      <body className={istok_Web.className}>
        <AppWrapper>
          <HeaderContainer />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
