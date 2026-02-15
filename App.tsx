import React, { useState, useEffect } from 'react';
import { UserRole } from './types';
import BottomNav from './components/BottomNav';
import HomeMap from './pages/HomeMap';
import RoutesScreen from './pages/RoutesScreen';
import AlertsScreen from './pages/AlertsScreen';
import ReportScreen from './pages/ReportScreen';
import DashboardScreen from './pages/DashboardScreen';
import ProfileScreen from './pages/ProfileScreen';

const App: React.FC = () => {
  // Simple state-based routing
  const [currentTab, setCurrentTab] = useState('map');
  const [userRole, setUserRole] = useState<UserRole>(UserRole.POLICE); // Defaulting to POLICE to show all features

  // Simulate a "page transition" effect
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tab: string) => {
    if (tab === currentTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTab(tab);
      setIsTransitioning(false);
    }, 150);
  };

  const renderScreen = () => {
    switch (currentTab) {
      case 'map':
        return <HomeMap />;
      case 'routes':
        return <RoutesScreen />;
      case 'report':
        return <ReportScreen role={userRole} />;
      case 'dashboard':
        return userRole === UserRole.POLICE ? <DashboardScreen /> : <AlertsScreen />;
      case 'profile':
        return <ProfileScreen role={userRole} onToggleRole={() => setUserRole(r => r === UserRole.POLICE ? UserRole.PUBLIC : UserRole.POLICE)} />;
      default:
        return <HomeMap />;
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-neutral-100">
      {/* Mobile Container Constraint */}
      <div className="w-full max-w-[430px] bg-bg-light shadow-2xl relative flex flex-col h-[100dvh] overflow-hidden">
        
        {/* Screen Content */}
        <div className={`flex-1 flex flex-col overflow-hidden transition-opacity duration-200 ${isTransitioning ? 'opacity-80' : 'opacity-100'}`}>
          {renderScreen()}
        </div>

        {/* Bottom Navigation */}
        <BottomNav currentTab={currentTab} onTabChange={handleTabChange} role={userRole} />
        
      </div>
    </div>
  );
};

export default App;