import { Feedback, Map, PaymentMethod } from '@neon/widgets';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts',
};

const ContactUs = () => (
  <div className="flex justify-between w-full h-fit tabletS:items-center">
    <div className="flex w-full max-tabletS:flex-col ">
      <div className="flex flex-col tabletS:h-full justify-between max-tabletS:gap-10  gap-32 max-tabletM:w-full w-1/2">
        <div className="flex flex-col gap-5">
          <span className="text-3xl pl-2 text-pink-700">Спосіб оплати</span>
          <Feedback />
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-3xl pl-2 text-pink-700">Спосіб оплати</span>
          <PaymentMethod />
        </div>
      </div>
      <div className="max-tabletS:w-full w-full max-tabletS:h-[450px] h-[600px]  rounded-3xl border-4 border-black-600">
        <Map />
      </div>
    </div>
  </div>
);
export default ContactUs;
