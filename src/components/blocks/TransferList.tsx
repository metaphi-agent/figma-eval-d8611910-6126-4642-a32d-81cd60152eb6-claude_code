import { ArrowRight } from 'lucide-react';

interface Transfer {
  id: string;
  name: string;
  time: string;
  amount: number;
  avatar: string;
}

interface TransferListProps {
  transfers: Transfer[];
  title?: string;
  showViewAll?: boolean;
}

export default function TransferList({ transfers, title = 'Your Transfers', showViewAll = true }: TransferListProps) {
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
      <div className="space-y-4">
        {transfers.map((transfer) => (
          <div key={transfer.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full overflow-hidden bg-[#F4F7FE]">
                <img src={transfer.avatar} alt={transfer.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[#2B3674] text-[14px] font-bold leading-[20px]">{transfer.name}</p>
                <p className="text-[#A3AED0] text-[12px] font-medium leading-[18px]">{transfer.time}</p>
              </div>
            </div>
            <p className={`text-[14px] font-bold leading-[20px] ${transfer.amount > 0 ? 'text-[#01B574]' : 'text-[#EE5D50]'}`}>
              {transfer.amount > 0 ? '+' : ''}{transfer.amount > 0 ? `$${transfer.amount}` : `-$${Math.abs(transfer.amount)}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
