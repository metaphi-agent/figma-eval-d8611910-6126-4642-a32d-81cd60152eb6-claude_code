import { LayoutDashboard, TrendingUp, Library, Shield, Calendar, Wallet, Settings, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: TrendingUp, label: 'Activity', path: '/activity' },
  { icon: Library, label: 'Library', path: '/library' },
  { icon: Shield, label: 'Security', path: '/security' },
  { icon: Calendar, label: 'Schedules', path: '/schedules' },
  { icon: Wallet, label: 'Payouts', path: '/payouts' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-[290px] h-screen bg-white flex flex-col">
      {/* Logo */}
      <div className="px-8 py-9">
        <div className="flex items-center gap-3">
          <div className="w-[54px] h-[54px] bg-[#5D5FEF] rounded-[14px] flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2" strokeDasharray="4 4"/>
              <circle cx="16" cy="16" r="6" fill="white"/>
            </svg>
          </div>
          <div>
            <div className="text-[#5D5FEF] font-bold text-[20px] leading-[24px] tracking-[-0.4px]">VENUS</div>
            <div className="text-[#707EAE] text-[12px] leading-[18px] font-medium">DASHBOARD</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 pt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3 px-3 py-3 mb-2 rounded-[10px]
                transition-colors duration-150
                ${isActive
                  ? 'bg-[#5D5FEF] text-white'
                  : 'text-[#A3AED0] hover:bg-[#F4F7FE]'
                }
              `}
            >
              <Icon className="w-5 h-5" strokeWidth={2.5} />
              <span className="text-[14px] font-bold leading-[24px]">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Log Out */}
      <div className="px-5 pb-9">
        <button className="flex items-center gap-3 px-3 py-3 text-[#A3AED0] hover:bg-[#F4F7FE] rounded-[10px] w-full transition-colors duration-150">
          <LogOut className="w-5 h-5" strokeWidth={2.5} />
          <span className="text-[14px] font-bold leading-[24px]">Log Out</span>
        </button>
      </div>
    </aside>
  );
}
