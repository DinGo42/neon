export type ServiceType = {
  type: string;
  text: string;
  serviceName: string;
  bgImg: string;
};

export const serviceTypes: ServiceType[] = [
  {
    type: `Advertising`,
    text: `Підвищте свій образ завдяки нашим рекламним рішенням.
    Ми розробляємо вивіски та рекламні плакати, що вигідно виокремлять вас на фоні конкурентів. Незалежно від того, чи ви новий бренд або довго вже працюєте на ринку, наші рекламні рішення допоможуть вам залучити увагу клієнтів.`,
    serviceName: `Реклама`,
    bgImg: `/imgs/catalog/ad.jpg`,
  },
  {
    type: `Moss-sign`,
    text: `Вишуканість та природність – ось головні риси нашого стабілізованого моху. Цей натуральний елемент стане чудовим доповненням для вашого інтер'єру, створюючи атмосферу гармонії та природності.`,
    serviceName: `Стабілізований мох`,
    bgImg: `/imgs/catalog/moss.jpg`,
  },
  {
    type: `Commercial-equipment`,
    text: ` Використовуйте наше торгове обладнання для максимально ефективного розміщення товарів та зручної навігації для клієнтів.
    Ви зможете відобразити ваш асортимент вигідно та залучити більше продажів завдяки дотепним рішенням від Neon.`,
    serviceName: `Торгове обладнання`,
    bgImg: `/imgs/catalog/atm.jpg`,
  },
  {
    type: `Milling-services`,
    text: `Наші фахівці готові втілити ваші найсміливіші ідеї в життя. З використанням сучасного обладнання ми створимо унікальні деталі, які нададуть вашому бренду індивідуальності та неповторності.`,
    serviceName: `Послуги фрезерування`,
    bgImg: `/imgs/catalog/moss.jpg`,
  },
  {
    type: `Neon`,
    text: `Впровадьте неонові вивіски та елементи в своєму бізнесі, щоб додати ефектності та енергії.
    Ми створимо для вас яскраві та неповторні роботи, які здатні привернути погляди та залишити незабутнє враження.`,
    serviceName: `Неон`,
    bgImg: `/imgs/catalog/neon.jpg`,
  },
  {
    type: `Lamps`,
    text: `Створіть атмосферу затишку та краси завдяки нашим світильникам. Від класичних варіантів до сучасних дизайнів – ми маємо рішення для різних стилів і смаків.`,
    serviceName: `Світильники`,
    bgImg: `/imgs/catalog/lamps.jpg`,
  },
];
