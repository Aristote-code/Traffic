import React from 'react';
import { UserRole } from '../types';

interface ProfileScreenProps {
  role: UserRole;
  onToggleRole: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ role, onToggleRole }) => {
  const isPolice = role === UserRole.POLICE;

  return (
    <div className="flex-1 bg-bg-light flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-14 pb-8 bg-white shadow-soft rounded-b-[40px] mb-6">
        <div className="flex items-center gap-5 mb-6">
          <div className="relative">
            <img src="https://picsum.photos/id/64/200/200" alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 shadow-md" />
            {isPolice && (
              <div className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full border-4 border-white">
                <span className="material-icons-round text-[16px]">verified</span>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900">{isPolice ? 'Jean-Luc H.' : 'Citizen User'}</h1>
            <p className="text-slate-500 font-medium">{isPolice ? 'Senior Inspector' : 'Verified Resident'}</p>
            <div className="flex gap-2 mt-2">
                <span className="bg-slate-100 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 uppercase">Kigali</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase">Level 4</span>
            </div>
          </div>
        </div>

        {isPolice && (
          <div className="bg-slate-900 rounded-3xl p-5 flex items-center justify-between text-white shadow-lg shadow-slate-900/30">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-2xl">
                <span className="material-icons-round text-2xl">badge</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Badge ID</p>
                <p className="font-mono font-bold text-lg tracking-widest">8829-KGL</p>
              </div>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div>
                 <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold text-right">Unit</p>
                 <p className="font-bold text-right">Traffic</p>
            </div>
          </div>
        )}
      </div>

      {/* Settings */}
      <div className="px-6 space-y-6 pb-40">
        <section>
          <div className="flex items-center justify-between mb-3 px-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Demo Controls</h2>
          </div>
          <div className="bg-white rounded-3xl p-2 pr-4 flex items-center justify-between shadow-soft border border-slate-100">
            <div className="flex items-center gap-4">
               <div className="bg-slate-100 p-3 rounded-2xl">
                    <span className="material-icons-round text-slate-600">swap_horiz</span>
               </div>
               <div className="flex flex-col">
                   <span className="font-bold text-slate-900 text-sm">Switch Role</span>
                   <span className="text-xs text-slate-500">Current: {role}</span>
               </div>
            </div>
            <button onClick={onToggleRole} className="text-xs font-bold bg-slate-900 text-white px-5 py-2.5 rounded-xl shadow-md active:scale-95 transition-transform">Toggle</button>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-soft">
          <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Preferences</h2>
          </div>
          <div className="divide-y divide-slate-50">
            <div className="flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-4">
                <span className="material-icons-round text-primary bg-primary/10 p-2 rounded-xl text-xl">notifications</span>
                <span className="font-bold text-sm text-slate-700">Push Notifications</span>
              </div>
              <div className="relative w-12 h-7 bg-primary rounded-full transition-colors cursor-pointer">
                  <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
            <div className="flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-4">
                <span className="material-icons-round text-slate-500 bg-slate-100 p-2 rounded-xl text-xl">dark_mode</span>
                <span className="font-bold text-sm text-slate-700">Dark Mode</span>
              </div>
               <div className="relative w-12 h-7 bg-slate-200 rounded-full transition-colors cursor-pointer">
                  <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        </section>

        <button className="w-full py-4 text-status-red font-bold text-sm rounded-3xl hover:bg-red-50 transition-colors">
          Sign Out
        </button>
        
        <p className="text-center text-[10px] text-slate-300 tracking-widest uppercase pb-4">TrafficWatch v1.2.0 (Build 402)</p>
      </div>
    </div>
  );
};

export default ProfileScreen;