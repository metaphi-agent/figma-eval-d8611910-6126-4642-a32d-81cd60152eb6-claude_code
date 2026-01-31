import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon?: ReactNode;
  chart?: ReactNode;
  variant?: 'default' | 'gradient';
  className?: string;
}

export default function StatCard({ title, value, icon, chart, variant = 'default', className = '' }: StatCardProps) {
  return (
    <div
      className={`
        rounded-[20px] p-5
        ${variant === 'gradient'
          ? 'bg-gradient-to-br from-[#868CFF] to-[#4318FF] text-white'
          : 'bg-white'
        }
        ${className}
      `}
      style={variant === 'default' ? { boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)' } : {}}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className={`text-[12px] font-medium leading-[18px] mb-1 ${variant === 'gradient' ? 'text-white/70' : 'text-[#A3AED0]'}`}>
            {title}
          </p>
          <p className={`text-[24px] font-bold leading-[32px] tracking-[-0.48px] ${variant === 'gradient' ? 'text-white' : 'text-[#2B3674]'}`}>
            {value}
          </p>
        </div>
        {icon && (
          <div className={`w-[56px] h-[56px] rounded-full flex items-center justify-center ${variant === 'gradient' ? 'bg-white/20' : 'bg-[#F4F7FE]'}`}>
            {icon}
          </div>
        )}
      </div>
      {chart && <div className="mt-4">{chart}</div>}
    </div>
  );
}
