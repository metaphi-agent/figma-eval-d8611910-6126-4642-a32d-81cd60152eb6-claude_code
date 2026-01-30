import React from 'react';
import { MoreIcon, ReceiptIcon, CarIcon, SchoolIcon } from '../ui/Icons';

interface RecentTransaction {
  id: string;
  title: string;
  date: string;
  amount: string;
  type: 'bill' | 'car' | 'course';
}

interface CreditCardProps {
  balance: string;
  transactions: RecentTransaction[];
}

const iconMap: Record<string, React.ReactNode> = {
  bill: <ReceiptIcon className="w-5 h-5 text-primary-500" />,
  car: <CarIcon className="w-5 h-5 text-success" />,
  course: <SchoolIcon className="w-5 h-5 text-warning" />,
};

const CreditCard: React.FC<CreditCardProps> = ({ balance, transactions }) => {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-card min-w-[260px]">
      {/* Credit Card Display */}
      <div className="bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-[15px] p-5 mb-6 relative overflow-hidden">
        <div className="flex justify-between items-start mb-8">
          <div>
            <span className="text-[#E9EDF7] text-xs font-medium block">Credit Balance</span>
            <span className="text-white text-2xl font-bold">{balance}</span>
          </div>
          <button className="text-white/70 hover:text-white transition-colors">
            <MoreIcon className="w-5 h-5" />
          </button>
        </div>
        {/* Decorative wave */}
        <svg className="absolute bottom-0 right-0 w-24 h-12 text-white/20" viewBox="0 0 96 48" fill="none">
          <path d="M0 48C16 32 32 16 48 24C64 32 80 16 96 8V48H0Z" fill="currentColor" />
        </svg>
      </div>

      {/* Recent Transactions */}
      <span className="text-grey-600 text-xs font-medium mb-4 block">Recent</span>

      <div className="flex flex-col gap-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-grey-300 flex items-center justify-center">
                {iconMap[transaction.type]}
              </div>
              <div className="flex flex-col">
                <span className="text-dark-grey-900 text-sm font-bold">{transaction.title}</span>
                <span className="text-grey-600 text-xs font-medium">{transaction.date}</span>
              </div>
            </div>
            <span className="text-dark-grey-900 text-sm font-bold">{transaction.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditCard;
