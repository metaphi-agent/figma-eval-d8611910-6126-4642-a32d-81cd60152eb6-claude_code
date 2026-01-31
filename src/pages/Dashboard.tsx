import { Users } from 'lucide-react';
import SearchInput from '../components/ui/SearchInput';
import StatCard from '../components/ui/StatCard';
import MiniBarChart from '../components/ui/MiniBarChart';
import MiniLineChart from '../components/ui/MiniLineChart';
import BarChartCard from '../components/blocks/BarChartCard';
import ProfileCard from '../components/blocks/ProfileCard';
import TransactionList from '../components/blocks/TransactionList';
import TaskList from '../components/blocks/TaskList';

export default function Dashboard() {
  const monthlyData = [
    { label: 'Jan', value: 320 },
    { label: 'Feb', value: 380 },
    { label: 'Mar', value: 420 },
    { label: 'Apr', value: 480 },
    { label: 'May', value: 520 },
    { label: 'Jun', value: 679 },
    { label: 'Jul', value: 620 },
    { label: 'Aug', value: 680 },
    { label: 'Sep', value: 720 },
    { label: 'Oct', value: 780 },
    { label: 'Nov', value: 820 },
    { label: 'Dec', value: 880 },
  ];

  const spendingData = [25, 35, 40, 45, 52, 35, 48];

  return (
    <div className="flex-1 p-8 overflow-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="text-[#707EAE] text-[14px] font-bold leading-[24px] mb-1">Hi Andrei,</p>
          <h1 className="text-[#2B3674] text-[34px] font-bold leading-[42px] tracking-[-0.68px]">
            Welcome to Venus!
          </h1>
        </div>
        <SearchInput className="w-[341px]" />
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-4 gap-5 mb-5">
        <StatCard
          title="Spent this month"
          value="$682.5"
          chart={<MiniBarChart data={[40, 50, 45, 60, 55, 70, 65]} color="#5D5FEF" />}
        />
        <StatCard
          title="New clients"
          value="321"
          icon={
            <Users className="w-7 h-7 text-[#5D5FEF]" strokeWidth={2.5} />
          }
          chart={<MiniLineChart data={[30, 35, 45, 40, 50, 55, 60]} color="#C5CEE0" height={30} width={120} />}
        />
        <StatCard
          title="Earnings"
          value="$350.40"
          chart={<MiniBarChart data={[30, 45, 40, 50, 48, 42, 38]} color="#5D5FEF" />}
        />
        <StatCard
          title="Activity"
          value="$540.50"
          variant="gradient"
          chart={<MiniLineChart data={[35, 42, 48, 52, 58, 62, 65]} color="#FFFFFF" height={40} width={140} showGradient />}
        />
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-3 gap-5 mb-5">
        <div className="col-span-2">
          <BarChartCard
            title="Total Spent"
            value="$682.5"
            data={monthlyData}
            highlightIndex={5}
            maxLabel="$179"
          />
        </div>
        <ProfileCard
          name="Charles Robbie"
          location="New York, USA"
          avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
          stats={[
            { label: 'Projects', value: '28' },
            { label: 'Followers', value: '643' },
            { label: 'Following', value: '76' },
          ]}
        />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-white rounded-[20px] p-6" style={{ boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)' }}>
          <div className="mb-6">
            <p className="text-[#A3AED0] text-[12px] font-medium leading-[18px] mb-1">Spent this month</p>
            <div className="flex items-center gap-2">
              <p className="text-[#2B3674] text-[24px] font-bold leading-[32px]">$682.5</p>
              <span className="flex items-center gap-1 text-[#01B574] text-[12px] font-bold">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1L5 9M5 1L2 4M5 1L8 4" stroke="#01B574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                +2.45%
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#01B574]" />
            <span className="text-[#01B574] text-[12px] font-bold">On track</span>
          </div>
          <div className="flex items-end justify-between gap-2 h-[120px]">
            {spendingData.map((value, index) => {
              const height = (value / Math.max(...spendingData)) * 110;
              return (
                <div key={index} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-[#5D5FEF] rounded-t-[6px]"
                    style={{ height: `${height}px` }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <TransactionList
          transactions={[
            { id: '1', title: 'Public Transport', date: '22 September 2020', icon: 'transport', iconBg: '#5D5FEF' },
            { id: '2', title: 'Grocery Store', date: '18 September 2020', icon: 'grocery', iconBg: '#01B574' },
            { id: '3', title: 'Public Transport', date: '22 September 2020', icon: 'transport', iconBg: '#FFB547' },
          ]}
        />

        <TaskList
          date="27 May"
          tasks={[
            { id: '1', title: 'Meet w/ Simmmple', time: '01:00 PM - 02:00 PM' },
            { id: '2', title: 'Fitness Training', time: '02:00 PM - 03:00 PM' },
            { id: '3', title: 'Reading time', time: '03:00 PM - 04:00 PM' },
          ]}
        />
      </div>
    </div>
  );
}
