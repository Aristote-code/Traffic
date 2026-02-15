import React, { useState } from 'react';
import { Alert, TrafficStatus } from '../types';

const DashboardScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const mockAlerts: Alert[] = [
    {
      id: '1', title: 'Accident: Multi-vehicle', location: 'KN 7 Rd', type: 'ACCIDENT',
      description: 'Two cars collided blocking outbound lane.', timeAgo: '2m', status: TrafficStatus.CLOSED,
      reporter: { name: 'Mugisha J', trustScore: 98, avatarUrl: '', isOfficial: false }, verified: false
    },
    {
      id: '2', title: 'Rush Hour Jam', location: 'KG 11 Ave', type: 'CONGESTION',
      description: 'Signals out. Gridlock.', timeAgo: '8m', status: TrafficStatus.HEAVY,
      reporter: { name: 'Keza A', trustScore: 85, avatarUrl: '', isOfficial: false }, verified: false
    },
    {
      id: '3', title: 'Debris', location: 'KK 3 Rd', type: 'CONSTRUCTION',
      description: 'Large pothole fixing.', timeAgo: '15m', status: TrafficStatus.MODERATE,
      reporter: { name: 'User 3', trustScore: 70, avatarUrl: '', isOfficial: false }, verified: false
    }
  ];

  return (
    <div className="flex-1 bg-bg-light flex flex-col h-full">
      {/* Header */}
      <header className="px-6 pt-14 pb-4 bg-white/90 backdrop-blur-md sticky top-0 z-20 border-b border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">Police Dashboard</h1>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Kigali Command Center</p>
          </div>
          <div className="relative">
             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-4 border-white shadow-soft flex items-center justify-center">
                <span className="material-icons-round text-slate-500 text-2xl">person</span>
             </div>
             <span className="absolute bottom-0 right-0 w-4 h-4 bg-status-green border-2 border-white rounded-full"></span>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex space-x-1 bg-slate-100 p-1 rounded-2xl">
          <button onClick={() => setActiveTab('pending')} className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'pending' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
            Pending Review <span className="ml-1 bg-primary/10 text-primary px-1.5 py-0.5 rounded-md text-[10px]">3</span>
          </button>
          <button onClick={() => setActiveTab('verified')} className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'verified' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
            Verified
          </button>
        </div>
      </header>

      <main className="px-6 py-4 space-y-4 pb-32 overflow-y-auto">
        
        {/* Report Cards */}
        {activeTab === 'pending' && mockAlerts.map((alert) => (
          <div key={alert.id} className="bg-white rounded-3xl shadow-soft overflow-hidden group">
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${alert.status === TrafficStatus.CLOSED ? 'bg-red-50 text-status-red' : 'bg-yellow-50 text-status-yellow'}`}>
                    {alert.status === TrafficStatus.CLOSED ? 'Critical' : 'Moderate'}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">{alert.timeAgo} ago</span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-1">{alert.title}</h3>
              <div className="flex items-center text-slate-500 text-sm mb-3">
                <span className="material-icons-round text-[16px] mr-1">location_on</span>
                <span className="font-medium">{alert.location}</span>
              </div>
              
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{alert.description}</p>
              
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">
                        {alert.reporter.name.charAt(0)}
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-900">{alert.reporter.name}</p>
                        <p className="text-[10px] text-slate-500">Trust Score: <span className="text-status-green font-bold">{alert.reporter.trustScore}%</span></p>
                    </div>
                </div>
                 {alert.reporter.trustScore > 90 && <span className="material-icons-round text-primary bg-primary/10 rounded-full p-1 text-sm">verified</span>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm active:bg-slate-50 transition-colors">
                  <span className="material-icons-round text-[18px]">close</span>
                  Dismiss
                </button>
                <button className="flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-lg shadow-slate-900/20 active:bg-slate-800 transition-colors">
                  <span className="material-icons-round text-[18px]">check</span>
                  Verify
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default DashboardScreen;