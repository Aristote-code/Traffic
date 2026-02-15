import React from 'react';

const RoutesScreen: React.FC = () => {
  return (
    <div className="flex-1 bg-bg-light flex flex-col h-full overflow-hidden">
      {/* Header */}
      <header className="px-6 pt-14 pb-4 space-y-4 bg-white/80 backdrop-blur-md z-10 sticky top-0">
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
            <span className="material-icons-round text-slate-600 text-sm">arrow_back_ios_new</span>
          </button>
          <h1 className="text-xl font-bold text-slate-800">Route Suggestions</h1>
        </div>
        
        {/* Input Card */}
        <div className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100">
          <div className="space-y-4 relative">
            {/* Connector Line */}
            <div className="absolute left-[13px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary to-status-red opacity-20"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center z-10">
                  <span className="material-icons-round text-primary text-[14px]">my_location</span>
              </div>
              <input readOnly className="w-full bg-transparent border-b border-slate-100 text-sm font-semibold py-1 text-slate-700" value="Gishushu, Kigali" />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-7 h-7 rounded-full bg-status-red/10 flex items-center justify-center z-10">
                  <span className="material-icons-round text-status-red text-[14px]">location_on</span>
              </div>
              <input readOnly className="w-full bg-transparent border-none text-sm font-semibold py-1 text-slate-700" value="Kigali City Market" />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-2 space-y-4 pb-32">
        <div className="flex justify-between items-center py-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Available Routes</h2>
          <button className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">Filters</button>
        </div>

        {/* Card 1: Fastest */}
        <div className="bg-white p-5 rounded-3xl shadow-glow border-2 border-primary/10 relative cursor-pointer active:scale-[0.98] transition-all">
          <div className="absolute top-5 right-5">
              <span className="bg-status-green/10 text-status-green text-[10px] font-bold px-2 py-1 rounded-lg uppercase flex items-center gap-1">
                <span className="material-icons-round text-[12px]">bolt</span> Fastest
              </span>
          </div>
          
          <div className="mb-4">
            <h3 className="font-black text-2xl text-slate-800 tracking-tight">12 min</h3>
            <p className="text-sm font-medium text-slate-500">4.2 km • via KG 11 Ave</p>
          </div>

          {/* Traffic Bar */}
          <div className="w-full h-2 bg-slate-100 rounded-full flex overflow-hidden mb-3">
            <div className="h-full bg-status-green w-[70%]"></div>
            <div className="h-full bg-status-yellow w-[20%]"></div>
            <div className="h-full bg-status-red w-[10%]"></div>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium bg-slate-50 p-2 rounded-xl">
             <span className="material-icons-round text-status-yellow text-sm">warning</span>
             <span>Moderate congestion on KN 3 Rd</span>
          </div>
        </div>

        {/* Card 2: Fewest Reports */}
        <div className="bg-white p-5 rounded-3xl shadow-soft border border-slate-100 relative cursor-pointer active:scale-[0.98] transition-all">
           <div className="absolute top-5 right-5">
              <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-lg uppercase flex items-center gap-1">
                <span className="material-icons-round text-[12px]">shield</span> Safe
              </span>
          </div>
          
          <div className="mb-4">
            <h3 className="font-bold text-2xl text-slate-800 tracking-tight">15 min</h3>
            <p className="text-sm font-medium text-slate-500">5.0 km • via Umuganda Blvd</p>
          </div>

          <div className="w-full h-2 bg-slate-100 rounded-full flex overflow-hidden mb-3">
            <div className="h-full bg-status-green w-full"></div>
          </div>
           <p className="text-xs text-slate-400 font-medium">Clear path with 0 active reports</p>
        </div>

        <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-4 rounded-2xl shadow-glow flex items-center justify-center gap-2 transition-transform active:scale-95 mt-4">
          <span className="material-icons-round">navigation</span>
          START NAVIGATION
        </button>
      </div>
    </div>
  );
};

export default RoutesScreen;