import { ArrowRight } from 'lucide-react';
import { Bus, ShoppingBasket, CreditCard } from 'lucide-react';

const iconMap = {
  transport: Bus,
  grocery: ShoppingBasket,
  subscription: CreditCard,
};

interface Transaction {
  id: string;
  title: string;
  date: string;
  icon: keyof typeof iconMap;
  iconBg: string;
}

interface TransactionListProps {
  transactions: Transaction[];
  title?: string;
  showViewAll?: boolean;
}

export default function TransactionList({ transactions, title = 'Your transactions', showViewAll = true }: TransactionListProps) {
  return (
    <div className="bg-white rounded-[20px] p-6" style={{ boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[#2B3674] text-[18px] font-bold leading-[24px]">{title}</h3>
        {showViewAll && (
          <button className="text-[#5D5FEF] text-[12px] font-bold leading-[18px] flex items-center gap-1 hover:gap-2 transition-all duration-150">
            View all
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </button>
        )}
      </div>
      <div className="space-y-5">
        {transactions.map((transaction) => {
          const Icon = iconMap[transaction.icon];
          return (
            <div key={transaction.id} className="flex items-center gap-4">
              <div className={`w-[42px] h-[42px] rounded-[12px] flex items-center justify-center`} style={{ backgroundColor: transaction.iconBg }}>
                <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[#2B3674] text-[14px] font-bold leading-[20px]">{transaction.title}</p>
                <p className="text-[#A3AED0] text-[12px] font-medium leading-[18px]">{transaction.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
