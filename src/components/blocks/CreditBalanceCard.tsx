import { MoreHorizontal } from 'lucide-react';
import MiniLineChart from '../ui/MiniLineChart';

interface RecentItem {
  id: string;
  title: string;
  date: string;
  amount: string;
  icon: string;
  iconColor: string;
}

interface CreditBalanceCardProps {
  balance: string;
  recentItems: RecentItem[];
}

export default function CreditBalanceCard({ balance, recentItems }: CreditBalanceCardProps) {
  return (
    <div className="space-y-5">
      {/* Credit Balance */}
      <div
        className="bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-[20px] p-6 text-white relative overflow-hidden"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-white/70 text-[12px] font-medium leading-[18px] mb-1">Credit Balance</p>
            <p className="text-white text-[34px] font-bold leading-[42px] tracking-[-0.68px]">{balance}</p>
          </div>
          <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
            <MoreHorizontal className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>
        <div className="flex justify-end">
          <MiniLineChart data={[30, 40, 35, 50, 49, 60, 70]} color="#FFFFFF" height={40} width={140} />
        </div>
      </div>

      {/* Recent */}
      <div className="bg-white rounded-[20px] p-6" style={{ boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)' }}>
        <h3 className="text-[#2B3674] text-[18px] font-bold leading-[24px] mb-4">Recent</h3>
        <div className="space-y-4">
          {recentItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-[42px] h-[42px] rounded-[12px] flex items-center justify-center"
                  style={{ backgroundColor: item.iconColor }}
                >
                  <span className="text-white text-[18px]">{item.icon}</span>
                </div>
                <div>
                  <p className="text-[#2B3674] text-[14px] font-bold leading-[20px]">{item.title}</p>
                  <p className="text-[#A3AED0] text-[12px] font-medium leading-[18px]">{item.date}</p>
                </div>
              </div>
              <p className="text-[#2B3674] text-[14px] font-bold leading-[20px]">{item.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
