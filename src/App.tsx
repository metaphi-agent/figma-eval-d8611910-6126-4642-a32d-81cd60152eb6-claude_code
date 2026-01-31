import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/blocks/Sidebar';
import Dashboard from './pages/Dashboard';
import GridDashboard1 from './pages/GridDashboard1';
import GridDashboard2 from './pages/GridDashboard2';

function App() {
  return (
    <div className="flex min-h-screen bg-[#F4F7FE]">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/grid-1" element={<GridDashboard1 />} />
        <Route path="/grid-2" element={<GridDashboard2 />} />
        <Route path="/activity" element={<Dashboard />} />
        <Route path="/library" element={<Dashboard />} />
        <Route path="/security" element={<Dashboard />} />
        <Route path="/schedules" element={<Dashboard />} />
        <Route path="/payouts" element={<Dashboard />} />
        <Route path="/settings" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
