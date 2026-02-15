import React, { useState } from 'react';
import { UserRole } from '../types';

interface ReportScreenProps {
  role: UserRole;
}

const ReportScreen: React.FC<ReportScreenProps> = ({ role }) => {
  const isPolice = role === UserRole.POLICE;
  const [selectedRoad, setSelectedRoad] = useState('KG 7 Avenue');

  return (
    <div className="flex-1 bg-bg-light flex flex-col h-full overflow-hidden">
      {/* Header */}
      <header className="px-6 pt-14 pb-6 bg-white z-10 flex items-center gap-4 border-b border-slate-50">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 hover:bg-slate-100 transition-colors">
          <span className="material-icons-round text-slate-700">arrow_back_ios_new</span>
        </button>
        <div className="flex-1">
          <h1 className="text-xl font-black text-slate-900">{isPolice ? 'Update Status' : 'New Report'}</h1>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{isPolice ? 'Official Channel' : 'Public Contribution'}</p>
        </div>
      </header>

      {/* Main Form Area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-40 space-y-6">
        
        {/* Search & Selector */}
        <div className="relative">
            <div className="relative group">
            <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
            <input className="w-full bg-white shadow-soft border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-sm font-medium transition-shadow" placeholder="Search major roads..." type="text" />
            </div>
            <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
            <button className="whitespace-nowrap px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-xl border border-primary/20">Nearby</button>
            <button className="whitespace-nowrap px-4 py-2 bg-white text-slate-600 text-xs font-bold rounded-xl border border-slate-100 shadow-sm">KN 5 Rd</button>
            <button className="whitespace-nowrap px-4 py-2 bg-white text-slate-600 text-xs font-bold rounded-xl border border-slate-100 shadow-sm">Kimironko</button>
            </div>
        </div>

        {/* Selected Road Card */}
        <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Location</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">{selectedRoad}</h2>
              <span className="text-xs text-slate-500">Kacyiru Sector</span>
            </div>
            <button className="text-primary text-xs font-bold bg-primary/5 px-3 py-1.5 rounded-lg">Change</button>
          </div>

          {/* Condition Toggles */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-3">Traffic Condition</label>
            <div className="grid grid-cols-3 gap-3">
              <button className="flex flex-col items-center justify-center py-4 rounded-2xl border-2 border-transparent bg-slate-50 hover:bg-status-green/10 hover:border-status-green/50 transition-all group active:scale-95">
                <span className="material-icons-round text-status-green mb-2 text-2xl group-hover:scale-110 transition-transform">check_circle</span>
                <span className="text-xs font-bold text-slate-600">Clear</span>
              </button>
              <button className="flex flex-col items-center justify-center py-4 rounded-2xl border-2 border-status-yellow bg-status-yellow/10 shadow-sm ring-2 ring-status-yellow/20">
                <span className="material-icons-round text-status-yellow mb-2 text-2xl">warning</span>
                <span className="text-xs font-bold text-slate-900">Moderate</span>
              </button>
              <button className="flex flex-col items-center justify-center py-4 rounded-2xl border-2 border-transparent bg-slate-50 hover:bg-status-red/10 hover:border-status-red/50 transition-all group active:scale-95">
                <span className="material-icons-round text-status-red mb-2 text-2xl group-hover:scale-110 transition-transform">block</span>
                <span className="text-xs font-bold text-slate-600">Heavy</span>
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Cause</label>
                <div className="relative">
                    <select className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm font-medium text-slate-700 appearance-none focus:ring-2 focus:ring-primary/20">
                        <option>Heavy Rush Hour</option>
                        <option>Accident</option>
                        <option>Road Works</option>
                        <option>Police Checkpoint</option>
                    </select>
                    <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
            </div>
            <div>
                 <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Details</label>
                 <textarea className="w-full bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-sm p-4 font-medium" placeholder="Describe the situation..." rows={3}></textarea>
            </div>
          </div>
        </div>
        
        {/* Broadcast Toggle */}
        {isPolice && (
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-4 flex items-center justify-between border border-primary/10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-sm">
                        <span className="material-icons-round">campaign</span>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">Push Notification</p>
                        <p className="text-[10px] text-slate-500 font-medium">Alert 12k+ users nearby</p>
                    </div>
                </div>
                 <div className="relative w-12 h-7 bg-primary rounded-full shadow-inner">
                  <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
        )}
      </div>

      {/* Floating Submit Action */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-md border-t border-slate-100 z-20 pb-24">
        <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-4 rounded-2xl shadow-glow flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
          <span className="material-icons-round">send</span>
          {isPolice ? 'Publish Official Update' : 'Submit Report'}
        </button>
      </div>
    </div>
  );
};

export default ReportScreen;