import { TrendingUp } from 'lucide-react';

interface LineChartCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  data: number[];
  dropdown?: string;
}

export default function LineChartCard({ title, value, change, isPositive, data, dropdown }: LineChartCardProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  const width = 100;
  const height = 60;

  const points = data.map((val, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((val - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="bg-white rounded-[20px] p-6" style={{ boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)' }}>
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-[#2B3674] text-[18px] font-bold leading-[24px] mb-1">{title}</p>
          {dropdown && (
            <button className="text-[#A3AED0] text-[12px] font-medium leading-[18px] flex items-center gap-1">
              {dropdown}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="#A3AED0" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          )}
        </div>
        <TrendingUp className="w-6 h-6 text-[#5D5FEF]" strokeWidth={2.5} />
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#A3AED0] text-[14px] font-medium">Saves</span>
          <span className="text-[#2B3674] text-[24px] font-bold">{value}</span>
          <span className={`text-[14px] font-bold ${isPositive ? 'text-[#01B574]' : 'text-[#EE5D50]'}`}>
            {change}
          </span>
        </div>
      </div>

      <div className="relative">
        <svg width="100%" height="120" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5D5FEF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#5D5FEF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon
            points={`0,${height} ${points} ${width},${height}`}
            fill="url(#areaGradient)"
          />
          <polyline
            points={points}
            fill="none"
            stroke="#5D5FEF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="mt-4 pt-4 border-t border-[#E9EDF7]">
        <div className="flex items-center justify-between">
          <span className="text-[#A3AED0] text-[14px] font-medium">Balance</span>
          <span className="text-[#2B3674] text-[24px] font-bold">$52,422</span>
          <span className="text-[#EE5D50] text-[14px] font-bold">-4.75%</span>
        </div>
      </div>
    </div>
  );
}
