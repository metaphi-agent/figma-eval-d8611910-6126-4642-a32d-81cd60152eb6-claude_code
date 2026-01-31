interface BarChartCardProps {
  title: string;
  value: string;
  data: { label: string; value: number }[];
  highlightIndex?: number;
  maxLabel?: string;
}

export default function BarChartCard({ title, value, data, highlightIndex, maxLabel }: BarChartCardProps) {
  const max = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white rounded-[20px] p-6" style={{ boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)' }}>
      <div className="mb-4">
        <p className="text-[#A3AED0] text-[12px] font-medium leading-[18px] mb-1">{title}</p>
        <p className="text-[#2B3674] text-[34px] font-bold leading-[42px] tracking-[-0.68px]">{value}</p>
      </div>

      {maxLabel && (
        <div className="flex items-center justify-end mb-2">
          <span className="text-[#A3AED0] text-[12px] font-medium">{maxLabel}</span>
        </div>
      )}

      <div className="relative">
        {maxLabel && (
          <div className="absolute top-0 left-0 right-0 border-t-2 border-dashed border-[#5D5FEF]" />
        )}
        <div className="flex items-end justify-between gap-3 h-[200px] pt-4">
          {data.map((item, index) => {
            const height = (item.value / max) * 180;
            const isHighlighted = highlightIndex === index;

            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="relative w-full flex items-end justify-center" style={{ height: '180px' }}>
                  <div
                    className={`w-full rounded-t-[8px] transition-all duration-300 ${
                      isHighlighted ? 'bg-[#5D5FEF]' : 'bg-[#E9EDF7]'
                    }`}
                    style={{ height: `${height}px` }}
                  />
                </div>
                <span className="text-[#A3AED0] text-[12px] font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
