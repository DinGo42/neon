import { Feedback, Map, PaymentMethod } from '@neon/widgets';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts',
};

const ContactUs = () => (
  <div className="flex justify-between w-full h-fit max-tabletS:flex-col">
    <div className="flex flex-col tabletS:h-full justify-between max-tabletS:gap-20 max-tabletM:w-full w-1/2">
      <Feedback />
      <PaymentMethod />
    </div>
    <div className="max-tabletS:w-full w-full h-[650px] rounded-3xl border-4 border-green-700">
      <Map />
    </div>
  </div>
);
export default ContactUs;
