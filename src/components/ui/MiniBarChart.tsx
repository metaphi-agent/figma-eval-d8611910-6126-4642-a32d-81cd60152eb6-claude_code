interface MiniBarChartProps {
  data: number[];
  color?: string;
  height?: number;
}

export default function MiniBarChart({ data, color = '#5D5FEF', height = 40 }: MiniBarChartProps) {
  const max = Math.max(...data);
  const normalized = data.map(v => (v / max) * height);

  return (
    <div className="flex items-end gap-[3px] h-[40px]">
      {normalized.map((value, index) => (
        <div
          key={index}
          className="flex-1 rounded-t-[2px] transition-all duration-300"
          style={{
            backgroundColor: color,
            height: `${value}px`,
            minHeight: '4px',
          }}
        />
      ))}
    </div>
  );
}
