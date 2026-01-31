import React from 'react';
import { ArrowRightIcon } from '../ui/Icons';

interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  color: string;
}

interface CalendarWidgetProps {
  date: string;
  events: CalendarEvent[];
  onViewAllTasks?: () => void;
}

const CalendarWidget: React.FC<CalendarWidgetProps> = ({ date, events, onViewAllTasks }) => {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-card min-w-[260px]">
      {/* Date Header */}
      <h3 className="text-dark-grey-900 text-2xl font-bold tracking-[-0.48px] mb-6">{date}</h3>

      {/* Events List */}
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div key={event.id} className="flex items-start gap-3">
            {/* Color indicator */}
            <div
              className="w-1 h-full min-h-[40px] rounded-full"
              style={{ backgroundColor: event.color }}
            />
            <div className="flex flex-col">
              <span className="text-dark-grey-900 text-sm font-bold">{event.title}</span>
              <span className="text-grey-600 text-xs font-medium">{event.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Tasks */}
      {onViewAllTasks && (
        <button
          onClick={onViewAllTasks}
          className="flex items-center gap-1 text-primary-500 text-sm font-bold mt-6 hover:text-primary-400 transition-colors"
        >
          View all Tasks
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default CalendarWidget;
