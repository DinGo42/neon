import LocationIcon from 'public/svgs/info/location.svg';
import PhoneIcon from 'public/svgs/info/phone.svg';
import MailIcon from 'public/svgs/info/mail.svg';

export const Feedback = () => {
  return (
    <div className=" w-full h-min p-2 rounded-sm  pb-4 border-blue-700  flex flex-col gap-6">
      <div className="flex items-center w-full gap-4 h-fit">
        <div>
          <LocationIcon />
        </div>

        <a
          target="_blank"
          href={
            'https://www.google.com.ua/maps/place/Firma+%22Neon-Servis%22/@49.411795,32.0192983,17z/data=!3m1!4b1!4m6!3m5!1s0x40d14be576b5f671:0x637692453154aca4!8m2!3d49.4117915!4d32.0218732!16s%2Fg%2F1tgvc3zj?entry=ttu'
          }
        >
          вулиця Смілянська, 142/3, Черкаси
        </a>
      </div>
      <div className="flex items-center w-full gap-4">
        <PhoneIcon />
        <a href="tel:+380504659265">+380-50-465-92-65</a>
      </div>
      <div className="flex items-center w-full gap-4">
        <MailIcon />
        <a href="mailto:nesternko_igor@ukr.net">nesternko_igor@ukr.net</a>
      </div>
    </div>
  );
};
