import LocationIcon from 'public/svgs/info/location.svg';
import PhoneIcon from 'public/svgs/info/phone.svg';
import MailIcon from 'public/svgs/info/mail.svg';

export const Feedback = () => (
  <div className=" w-full h-min p-2 rounded-sm  pb-4 border-blue-700  flex flex-col gap-6">
    <div className="flex items-center w-full gap-4">
      <LocationIcon /> <h2>[Ваша адреса]</h2>
    </div>
    <div className="flex items-center w-full gap-4">
      <PhoneIcon /> <h2>[Ваш номер телефону]</h2>
    </div>
    <div className="flex items-center w-full gap-4">
      <MailIcon /> <h2>[Ваша електронна пошта]</h2>
    </div>
  </div>
);
