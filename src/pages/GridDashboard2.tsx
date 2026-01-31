import { Fingerprint } from 'lucide-react';
import SearchInput from '../components/ui/SearchInput';
import StatCard from '../components/ui/StatCard';
import MiniBarChart from '../components/ui/MiniBarChart';
import MiniLineChart from '../components/ui/MiniLineChart';
import TransferList from '../components/blocks/TransferList';
import ProfileCard from '../components/blocks/ProfileCard';
import Button from '../components/ui/Button';

export default function GridDashboard2() {
  const monthlyData = [30, 35, 32, 42, 38, 45, 40];

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
          title="Earnings"
          value="$350.40"
          chart={<MiniBarChart data={[30, 45, 40, 50, 48, 42, 38]} color="#5D5FEF" />}
        />
        <StatCard
          title="New clients"
          value="321"
          chart={<MiniLineChart data={[30, 35, 45, 40, 50, 55, 60]} color="#C5CEE0" height={30} width={120} />}
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
        {/* Financial Goals Card */}
        <div className="bg-white rounded-[20px] p-8" style={{ boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)' }}>
          <h2 className="text-[#2B3674] text-[28px] font-bold leading-[36px] tracking-[-0.56px] mb-4">
            Reach financial goals faster
          </h2>
          <p className="text-[#A3AED0] text-[14px] font-medium leading-[24px] mb-6">
            Use your Venus card around the world with no hidden fees. Hold, transfer and spend money.
          </p>
          <Button variant="primary" size="lg">
            Learn more
          </Button>

          {/* Credit Card Visual */}
          <div className="mt-8 relative">
            <div className="bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-[20px] p-6 text-white relative overflow-hidden" style={{ height: '180px' }}>
              <div className="absolute top-4 right-4 opacity-20">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="35" stroke="white" strokeWidth="2" />
                  <circle cx="40" cy="40" r="25" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <div className="relative z-10">
                <p className="text-white/70 text-[12px] font-medium mb-2">Classy.</p>
                <p className="text-white text-[20px] font-bold tracking-wider mb-6">7812 2139 0823 XXXX</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white/70 text-[10px] font-medium mb-1">VALID THRU</p>
                    <p className="text-white text-[14px] font-bold">05/24</p>
                  </div>
                  <div>
                    <p className="text-white/70 text-[10px] font-medium mb-1">CVV</p>
                    <p className="text-white text-[14px] font-bold">••••</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Card */}
        <div className="bg-white rounded-[20px] p-8" style={{ boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)' }}>
          <div className="flex flex-col items-center text-center h-full">
            <div className="w-[100px] h-[100px] bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-full flex items-center justify-center mb-6">
              <Fingerprint className="w-[60px] h-[60px] text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#2B3674] text-[24px] font-bold leading-[32px] tracking-[-0.48px] mb-3">
              Control card security in-app with a tap
            </h3>
            <p className="text-[#A3AED0] text-[14px] font-medium leading-[24px] mb-6">
              Discover our cards benefits, with one tap.
            </p>
            <div className="mt-auto w-full">
              <Button variant="primary" size="lg" fullWidth>
                Cards
              </Button>
            </div>
          </div>
        </div>

        {/* Earnings Card */}
        <div className="bg-white rounded-[20px] p-6" style={{ boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)' }}>
          <div className="flex items-center justify-center mb-4">
            <div className="w-[56px] h-[56px] rounded-full bg-[#F4F7FE] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 13h8v8H3v-8zm0-10h8v8H3V3zm10 0h8v8h-8V3zm0 10h8v8h-8v-8z" fill="#5D5FEF"/>
              </svg>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-[#A3AED0] text-[12px] font-medium leading-[18px] text-center mb-1">
              This month earnings
            </p>
            <p className="text-[#2B3674] text-[34px] font-bold leading-[42px] tracking-[-0.68px] text-center">
              $682.5
            </p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1L5 9M5 1L2 4M5 1L8 4" stroke="#01B574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[#01B574] text-[12px] font-bold">+2.45%</span>
            </div>
          </div>
          <div className="relative h-[100px]">
            <svg width="100%" height="100" viewBox="0 0 100 60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="earningsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5D5FEF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#5D5FEF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon
                points="0,40 15,35 30,45 45,25 60,35 75,20 90,30 100,15 100,60 0,60"
                fill="url(#earningsGradient)"
              />
              <polyline
                points="0,40 15,35 30,45 45,25 60,35 75,20 90,30 100,15"
                fill="none"
                stroke="#5D5FEF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-2 gap-5">
        <TransferList
          transfers={[
            { id: '1', name: 'From Alex Manda', time: 'Today, 16:36', amount: 50, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
            { id: '2', name: 'To Laura Santos', time: 'Today, 08:49', amount: -27, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
            { id: '3', name: 'From Jadon S.', time: 'Yesterday, 14:36', amount: 157, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
          ]}
        />
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
    </div>
  );
}
