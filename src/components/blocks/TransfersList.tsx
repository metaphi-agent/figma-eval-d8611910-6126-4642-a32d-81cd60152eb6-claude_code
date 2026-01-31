import React from 'react';
import { ArrowRightIcon } from '../ui/Icons';

interface Transfer {
  id: string;
  name: string;
  avatar: string;
  date: string;
  amount: string;
  type: 'incoming' | 'outgoing';
}

interface TransfersListProps {
  transfers: Transfer[];
  onViewAll?: () => void;
}

const TransfersList: React.FC<TransfersListProps> = ({ transfers, onViewAll }) => {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-card min-w-[260px]">
      <h3 className="text-dark-grey-900 text-lg font-bold tracking-[-0.36px] mb-6">Your Transfers</h3>

      <div className="flex flex-col gap-4">
        {transfers.map((transfer) => (
          <div key={transfer.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={transfer.avatar}
                  alt={transfer.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-dark-grey-900 text-sm font-bold">
                  {transfer.type === 'incoming' ? 'From' : 'To'} {transfer.name}
                </span>
                <span className="text-grey-600 text-xs font-medium">{transfer.date}</span>
              </div>
            </div>
            <span className={`text-sm font-bold ${
              transfer.type === 'incoming' ? 'text-success' : 'text-error'
            }`}>
              {transfer.type === 'incoming' ? '+' : '-'}{transfer.amount}
            </span>
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

export default TransfersList;
