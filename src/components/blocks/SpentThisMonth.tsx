import React from 'react';
import { CheckIcon, ArrowUpIcon } from '../ui/Icons';

interface SpentThisMonthProps {
  value: string;
  percentage: string;
  status?: 'on-track' | 'warning' | 'danger';
}

const SpentThisMonth: React.FC<SpentThisMonthProps> = ({
  value,
  percentage,
  status = 'on-track'
}) => {
  // Generate bar chart data
  const bars = [
    { height: 50 }, { height: 60 }, { height: 75 }, { height: 55 },
    { height: 90 }, { height: 100 }, { height: 85 }, { height: 95 },
    { height: 70 }, { height: 80 },
  ];

  return (
    <div className="bg-white rounded-[20px] p-6 shadow-card flex-1 min-w-[260px]">
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <span className="text-grey-600 text-xs font-medium">Spent this month</span>
        <div className="flex items-center gap-1 text-success">
          <ArrowUpIcon className="w-4 h-4" />
          <span className="text-sm font-bold">{percentage}</span>
        </div>
      </div>

      {/* Value */}
      <h3 className="text-dark-grey-900 text-[34px] font-bold tracking-[-0.68px] leading-[42px] mb-2">
        {value}
      </h3>

      {/* Status */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
          <CheckIcon className="w-3 h-3 text-white" />
        </div>
        <span className="text-success text-sm font-medium">On track</span>
      </div>

      {/* Bar Chart */}
      <div className="flex items-end gap-2 h-[120px]">
        {bars.map((bar, index) => (
          <div
            key={index}
            className="flex-1 bg-primary-500 rounded-t-md transition-all duration-300 hover:bg-primary-400"
            style={{ height: `${bar.height}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default SpentThisMonth;
