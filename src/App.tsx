import React, { useState } from 'react';
import Sidebar from './components/blocks/Sidebar';
import SearchInput from './components/blocks/SearchInput';
import { SpendingCard, EarningsCard, ActivityCard } from './components/blocks/StatCard';
import TotalSpentChart from './components/blocks/TotalSpentChart';
import UserProfile from './components/blocks/UserProfile';
import SpentThisMonth from './components/blocks/SpentThisMonth';
import TransactionsList from './components/blocks/TransactionsList';
import CalendarWidget from './components/blocks/CalendarWidget';
import { PersonIcon } from './components/ui/Icons';

// Sample data
const transactions = [
  { id: '1', type: 'transport' as const, title: 'Public Transport', date: '22 September 2020' },
  { id: '2', type: 'shopping' as const, title: 'Grocery Store', date: '18 September 2020' },
  { id: '3', type: 'transport' as const, title: 'Public Transport', date: '22 September 2020' },
];

const calendarEvents = [
  { id: '1', title: 'Meet w/ Simmmple', time: '01:00 PM - 02:00 PM', color: '#4318FF' },
  { id: '2', title: 'Fitness Training', time: '02:00 PM - 03:00 PM', color: '#4318FF' },
  { id: '3', title: 'Reading time', time: '03:00 PM - 04:00 PM', color: '#4318FF' },
];

function App() {
  const [activeNavItem, setActiveNavItem] = useState('Dashboard');

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar activeItem={activeNavItem} onNavItemClick={setActiveNavItem} />

      {/* Main Content */}
      <main className="flex-1 px-8 py-6 overflow-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <span className="text-grey-700 text-sm font-bold">Hi Andrei,</span>
            <h1 className="text-dark-grey-900 text-[34px] font-bold tracking-[-0.68px] leading-[42px]">
              Welcome to Venus!
            </h1>
          </div>
          <div className="w-[341px]">
            <SearchInput placeholder="Search" />
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="flex flex-col gap-5">
          {/* Row 1 - Stat Cards */}
          <div className="flex gap-5 flex-wrap">
            <SpendingCard value="$682.5" />
            <div className="flex items-center justify-between bg-white rounded-[20px] px-5 py-5 min-w-[200px] shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
                  <PersonIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-grey-600 text-xs font-medium">New clients</span>
                  <span className="text-dark-grey-900 text-2xl font-bold tracking-[-0.48px]">321</span>
                </div>
              </div>
              <svg width="54" height="32" viewBox="0 0 54 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 30C8 24 14 18 20 20C26 22 30 12 38 16C44 19 48 8 52 2" stroke="#A3AED0" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <EarningsCard value="$350.40" />
            <ActivityCard value="$540.50" />
          </div>

          {/* Row 2 - Main Charts */}
          <div className="flex gap-5">
            <TotalSpentChart value="$682.5" threshold="$179" />
            <UserProfile
              name="Charles Robbie"
              location="New York, USA"
              avatar="https://i.pravatar.cc/150?img=68"
              projects={28}
              followers={643}
              following={76}
            />
          </div>

          {/* Row 3 - Bottom Widgets */}
          <div className="flex gap-5 flex-wrap">
            <SpentThisMonth value="$682.5" percentage="+2.45%" />
            <TransactionsList
              transactions={transactions}
              onViewAll={() => console.log('View all transactions')}
            />
            <CalendarWidget
              date="27 May"
              events={calendarEvents}
              onViewAllTasks={() => console.log('View all tasks')}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
