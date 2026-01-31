import React from 'react';
import { BusIcon, ShoppingIcon, ArrowRightIcon } from '../ui/Icons';

interface Transaction {
  id: string;
  type: 'transport' | 'shopping' | 'subscription';
  title: string;
  date: string;
  icon?: React.ReactNode;
}

interface TransactionsListProps {
  transactions: Transaction[];
  onViewAll?: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  transport: <BusIcon className="w-5 h-5 text-primary-500" />,
  shopping: <ShoppingIcon className="w-5 h-5 text-success" />,
  subscription: <BusIcon className="w-5 h-5 text-primary-500" />,
};

const TransactionsList: React.FC<TransactionsListProps> = ({ transactions, onViewAll }) => {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-card min-w-[260px]">
      <h3 className="text-dark-grey-900 text-lg font-bold tracking-[-0.36px] mb-6">Your transactions</h3>

      <div className="flex flex-col gap-5">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-grey-300 flex items-center justify-center">
              {transaction.icon || iconMap[transaction.type]}
            </div>
            <div className="flex flex-col">
              <span className="text-dark-grey-900 text-sm font-bold">{transaction.title}</span>
              <span className="text-grey-600 text-xs font-medium">{transaction.date}</span>
            </div>
          </div>
        ))}
      </div>

      {onViewAll && (
        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-primary-500 text-sm font-bold mt-6 hover:text-primary-400 transition-colors"
        >
          View all
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default TransactionsList;
