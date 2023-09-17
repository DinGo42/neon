import CashIcon from 'public/svgs/info/cash.svg';
import CardIcon from 'public/svgs/info/card.svg';
import TaxIcon from 'public/svgs/info/tax.svg';

export const PaymentMethod = () => {
  return (
    <div className="w-full h-min p-2 rounded-sm  pb-4 border-blue-700  flex flex-col gap-6">
      <div className="flex items-center w-full gap-4">
        <CashIcon /> <h2>[Готівка]</h2>
      </div>
      <div className="flex items-center w-full gap-4">
        <CardIcon /> <h2>[Картка]</h2>
      </div>
      <div className="flex items-center w-full gap-4">
        <TaxIcon /> <h2>[Карта + податки]</h2>
      </div>
    </div>
  );
};
