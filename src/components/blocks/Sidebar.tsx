import React from 'react';
import {
  DashboardIcon,
  ActivityIcon,
  LibraryIcon,
  SecurityIcon,
  CalendarIcon,
  WalletIcon,
  SettingsIcon,
  LogoutIcon,
  VenusLogo,
} from '../ui/Icons';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 w-full px-4 py-3 rounded-[5px] transition-colors duration-150 ${
      active
        ? 'bg-primary-500 text-white'
        : 'text-grey-600 hover:bg-grey-200 hover:text-grey-900'
    }`}
  >
    <span className={active ? 'text-white' : 'text-grey-600'}>{icon}</span>
    <span className="font-medium text-base tracking-[-0.32px]">{label}</span>
  </button>
);

interface SidebarProps {
  activeItem?: string;
  onNavItemClick?: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem = 'Dashboard', onNavItemClick }) => {
  const navItems = [
    { icon: <DashboardIcon className="w-6 h-6" />, label: 'Dashboard' },
    { icon: <ActivityIcon className="w-6 h-6" />, label: 'Activity' },
    { icon: <LibraryIcon className="w-6 h-6" />, label: 'Library' },
    { icon: <SecurityIcon className="w-6 h-6" />, label: 'Security' },
    { icon: <CalendarIcon className="w-6 h-6" />, label: 'Schedules' },
    { icon: <WalletIcon className="w-6 h-6" />, label: 'Payouts' },
    { icon: <SettingsIcon className="w-6 h-6" />, label: 'Settings' },
  ];

  return (
    <aside className="w-[290px] h-screen bg-white flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-8 py-8">
        <VenusLogo />
        <div className="flex flex-col">
          <span className="text-primary-500 font-bold text-xl tracking-[-0.4px]">VENUS</span>
          <span className="text-grey-600 text-xs font-medium">DASHBOARD</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-grey-300 mx-6" />

      {/* Navigation */}
      <nav className="flex flex-col gap-[15px] px-6 py-8 flex-1">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.label}
            onClick={() => onNavItemClick?.(item.label)}
          />
        ))}
      </nav>

      {/* Logout */}
      <div className="px-6 pb-8">
        <button className="flex items-center gap-3 text-grey-600 hover:text-grey-900 transition-colors duration-150 px-2 py-3">
          <LogoutIcon className="w-6 h-6" />
          <span className="font-medium text-base tracking-[-0.32px]">Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
