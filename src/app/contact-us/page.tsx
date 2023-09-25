import { Feedback, Map } from '@neon/widgets';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts',
};

const ContactUs = () => (
  <div className="flex w-full max-tabletS:flex-col h-full justify-between">
    <div className="flex flex-col h-fit justify-between max-tabletM:w-full w-1/2 gap-3">
      <span className="text-3xl pl-2 text-pink-700">Зворотній зв`язок</span>
      <Feedback />
    </div>
    <div className="max-tabletS:w-full w-full max-tabletS:h-[450px] h-[600px]  rounded-3xl border-4 border-black-600">
      <Map />
    </div>
  </div>
);

export default ContactUs;
