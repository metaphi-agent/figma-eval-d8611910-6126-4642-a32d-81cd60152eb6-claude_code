import SearchInput from '../components/ui/SearchInput';
import StatCard from '../components/ui/StatCard';
import MiniBarChart from '../components/ui/MiniBarChart';
import MiniLineChart from '../components/ui/MiniLineChart';
import LineChartCard from '../components/blocks/LineChartCard';
import TransferList from '../components/blocks/TransferList';
import CreditBalanceCard from '../components/blocks/CreditBalanceCard';
import PromoCard from '../components/blocks/PromoCard';
import Button from '../components/ui/Button';

export default function GridDashboard1() {
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
          title="Activity"
          value="$540.50"
          variant="gradient"
          chart={<MiniLineChart data={[35, 42, 48, 52, 58, 62, 65]} color="#FFFFFF" height={40} width={140} showGradient />}
        />
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
          title="Activity"
          value="$540.50"
          variant="gradient"
          chart={<MiniLineChart data={[35, 42, 48, 52, 58, 62, 65]} color="#FFFFFF" height={40} width={140} showGradient />}
        />
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-3 gap-5 mb-5">
        <div className="col-span-2">
          <LineChartCard
            title="Balance"
            value="43.50%"
            change="+2.45%"
            isPositive={true}
            data={[30, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 90]}
            dropdown="Monthly"
          />
        </div>
        <TransferList
          transfers={[
            { id: '1', name: 'From Alex Manda', time: 'Today, 16:36', amount: 50, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
            { id: '2', name: 'To Laura Santos', time: 'Today, 08:49', amount: -27, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
            { id: '3', name: 'From Jadon S.', time: 'Yesterday, 14:36', amount: 157, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
          ]}
        />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 gap-5">
        <CreditBalanceCard
          balance="$25,215"
          recentItems={[
            { id: '1', title: 'Bill & Taxes', date: 'Today, 16:36', amount: '-$154.50', icon: '🏢', iconColor: '#5D5FEF' },
            { id: '2', title: 'Car Energy', date: '23 Jun, 13:06', amount: '-$40.50', icon: '⚡', iconColor: '#01B574' },
            { id: '3', title: 'Design Course', date: '21 Jun, 19:04', amount: '-$70.00', icon: '🎓', iconColor: '#FFB547' },
          ]}
        />
        <div className="col-span-2">
          <PromoCard
            title="Try Venus for free now!"
            description="Enter in this creative world. Venus is the best product for your business."
            buttonText="Try for free"
            secondaryButton="Skip"
          />
        </div>
      </div>

      {/* Upgrade Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <div className="bg-gradient-to-br from-[#868CFF] to-[#4318FF] rounded-[20px] p-6 text-white max-w-[240px]" style={{ boxShadow: '0px 18px 40px rgba(67, 24, 255, 0.4)' }}>
          <p className="text-[16px] font-bold leading-[24px] mb-4">
            Upgrade to PRO to get access to all features!
          </p>
          <Button variant="secondary" size="md" fullWidth>
            Upgrade to PRO
          </Button>
        </div>
      </div>
    </div>
  );
}
