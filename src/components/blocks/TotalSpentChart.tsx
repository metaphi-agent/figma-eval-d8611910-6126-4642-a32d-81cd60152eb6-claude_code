import React from 'react';
import { BarChartIcon } from '../ui/Icons';

interface TotalSpentChartProps {
  value: string;
  threshold?: string;
}

const TotalSpentChart: React.FC<TotalSpentChartProps> = ({ value, threshold = '$179' }) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const barData = [
    { height: 45, highlighted: false },
    { height: 65, highlighted: false },
    { height: 55, highlighted: false },
    { height: 40, highlighted: false },
    { height: 70, highlighted: false },
    { height: 95, highlighted: true },
    { height: 35, highlighted: false },
    { height: 25, highlighted: false },
    { height: 30, highlighted: false },
    { height: 50, highlighted: false },
    { height: 40, highlighted: false },
    { height: 55, highlighted: false },
  ];

  return (
    <div className="bg-white rounded-[20px] p-6 shadow-card flex-1">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-grey-600 text-xs font-medium">Total Spent</span>
          <h3 className="text-dark-grey-900 text-[34px] font-bold tracking-[-0.68px] leading-[42px]">{value}</h3>
        </div>
        <div className="w-10 h-10 rounded-lg bg-grey-300 flex items-center justify-center">
          <BarChartIcon className="w-5 h-5 text-primary-500" />
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-[200px]">
        {/* Threshold line */}
        <div className="absolute top-[30%] left-0 right-0 flex items-center">
          <div className="flex-1 border-t-2 border-dashed border-grey-400" />
          <span className="text-grey-600 text-xs font-medium ml-2">{threshold}</span>
        </div>

        {/* Bars */}
        <div className="absolute bottom-8 left-0 right-0 flex items-end justify-between px-2">
          {barData.map((bar, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div
                className={`w-6 rounded-md transition-all duration-300 ${
                  bar.highlighted ? 'bg-primary-500' : 'bg-[#E9EDF7]'
                }`}
                style={{ height: `${bar.height}%` }}
              />
            </div>
          ))}
        </div>

        {/* Month labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
          {months.map((month) => (
            <span key={month} className="text-grey-600 text-xs font-medium">{month}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalSpentChart;
