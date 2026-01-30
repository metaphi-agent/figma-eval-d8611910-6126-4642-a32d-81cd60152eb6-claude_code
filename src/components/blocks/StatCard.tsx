import React from 'react';
import { BarChartIcon, PersonIcon, ArrowUpIcon } from '../ui/Icons';

interface MiniBarChartProps {
  data: number[];
  color?: string;
}

const MiniBarChart: React.FC<MiniBarChartProps> = ({ data, color = '#4318FF' }) => {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-[3px] h-10">
      {data.map((value, index) => (
        <div
          key={index}
          className="w-[6px] rounded-sm transition-all duration-300"
          style={{
            height: `${(value / max) * 100}%`,
            backgroundColor: color,
            opacity: 0.6 + (value / max) * 0.4,
          }}
        />
      ))}
    </div>
  );
};

const MiniLineChart: React.FC<{ color?: string }> = ({ color = '#FFFFFF' }) => (
  <svg width="68" height="24" viewBox="0 0 68 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 20C5.5 16 9.5 22 14 18C18.5 14 21 8 28 12C35 16 38 4 45 8C52 12 55 6 62 4L67 2"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

interface StatCardProps {
  type: 'spending' | 'chart' | 'earnings' | 'clients' | 'activity';
  title: string;
  value: string;
  icon?: React.ReactNode;
  chartData?: number[];
}

const StatCard: React.FC<StatCardProps> = ({ type, title, value, icon, chartData = [4, 5, 6, 3, 8, 7, 5] }) => {
  if (type === 'activity') {
    return (
      <div className="flex items-center justify-between bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-[20px] px-5 py-4 min-w-[190px] h-[97px]">
        <div className="flex flex-col gap-1">
          <span className="text-[#E9EDF7] text-xs font-medium">Activity</span>
          <span className="text-white text-2xl font-bold tracking-[-0.48px]">{value}</span>
        </div>
        <MiniLineChart color="#FFFFFF" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between bg-white rounded-[20px] px-5 py-5 min-w-[200px] shadow-card">
      <div className="flex items-center gap-4">
        {icon && (
          <div className="w-12 h-12 rounded-full bg-grey-300 flex items-center justify-center">
            {icon}
          </div>
        )}
        <div className="flex flex-col gap-1">
          <span className="text-grey-600 text-xs font-medium">{title}</span>
          <span className="text-dark-grey-900 text-2xl font-bold tracking-[-0.48px]">{value}</span>
        </div>
      </div>
      {type === 'chart' && <MiniBarChart data={chartData} />}
      {type === 'clients' && (
        <div className="flex items-center">
          <ArrowUpIcon className="w-6 h-6 text-grey-600" />
        </div>
      )}
    </div>
  );
};

// Pre-configured stat cards for common use cases
export const SpendingCard: React.FC<{ value: string }> = ({ value }) => (
  <StatCard
    type="chart"
    title="Spent this month"
    value={value}
    chartData={[4, 5, 6, 3, 8, 7, 5]}
  />
);

export const EarningsCard: React.FC<{ value: string }> = ({ value }) => (
  <StatCard
    type="spending"
    title="Earnings"
    value={value}
    icon={<BarChartIcon className="w-6 h-6 text-primary-500" />}
  />
);

export const NewClientsCard: React.FC<{ value: string }> = ({ value }) => (
  <StatCard
    type="clients"
    title="New clients"
    value={value}
    icon={<PersonIcon className="w-6 h-6 text-primary-500" />}
  />
);

export const ActivityCard: React.FC<{ value: string }> = ({ value }) => (
  <StatCard type="activity" title="Activity" value={value} />
);

export default StatCard;
