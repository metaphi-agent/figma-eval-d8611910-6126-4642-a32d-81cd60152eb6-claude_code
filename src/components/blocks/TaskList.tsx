import { ArrowRight } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  time: string;
}

interface TaskListProps {
  date: string;
  tasks: Task[];
  showViewAll?: boolean;
}

export default function TaskList({ date, tasks, showViewAll = true }: TaskListProps) {
  return (
    <div className="bg-white rounded-[20px] p-6" style={{ boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[#2B3674] text-[24px] font-bold leading-[32px]">{date}</h3>
        {showViewAll && (
          <button className="text-[#5D5FEF] text-[12px] font-bold leading-[18px] flex items-center gap-1 hover:gap-2 transition-all duration-150">
            View all Tasks
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </button>
        )}
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start gap-3">
            <div className="w-[3px] h-[56px] bg-[#5D5FEF] rounded-full mt-1" />
            <div className="flex-1">
              <p className="text-[#2B3674] text-[14px] font-bold leading-[20px] mb-1">{task.title}</p>
              <p className="text-[#A3AED0] text-[12px] font-medium leading-[18px]">{task.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
