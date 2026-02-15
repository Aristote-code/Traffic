import React from 'react';
import { UserRole } from '../types';

interface BottomNavProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  role: UserRole;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange, role }) => {
  const isPolice = role === UserRole.POLICE;

  const NavItem = ({ id, icon, label, isMain = false }: { id: string, icon: string, label: string, isMain?: boolean }) => {
    const isActive = currentTab === id;
    
    if (isMain) {
      return (
        <button 
          onClick={() => onTabChange(id)}
          className="relative -top-8 group"
        >
          <div className={`w-16 h-16 rounded-full shadow-glow flex items-center justify-center transition-all duration-300 transform group-active:scale-95 ${isActive ? 'bg-primary-dark scale-105' : 'bg-primary'}`}>
            <span className="material-icons-round text-white text-[32px]">{icon}</span>
          </div>
        </button>
      );
    }

    return (
      <button 
        onClick={() => onTabChange(id)}
        className="flex flex-col items-center justify-center gap-1 min-w-[64px] h-full relative group"
      >
        <div className={`absolute -top-1 w-8 h-1 bg-primary rounded-full transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        <span className={`material-icons-round text-[26px] transition-colors duration-300 ${isActive ? 'text-primary' : 'text-slate-400 group-hover:text-slate-500'}`}>
          {icon}
        </span>
        <span className={`text-[10px] font-bold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-slate-400'}`}>
          {label}
        </span>
      </button>
    );
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-2 pointer-events-none">
      <nav className="glass rounded-3xl shadow-soft px-2 h-20 flex items-center justify-between pointer-events-auto mx-auto max-w-sm">
        <NavItem id="map" icon="map" label="Map" />
        <NavItem id="routes" icon="alt_route" label="Routes" />
        <NavItem id="report" icon={isPolice ? "add_road" : "add_location"} label="" isMain />
        <NavItem id="dashboard" icon={isPolice ? "dashboard" : "notifications"} label={isPolice ? "Manage" : "Alerts"} />
        <NavItem id="profile" icon="person" label="Profile" />
      </nav>
    </div>
  );
};

export default BottomNav;