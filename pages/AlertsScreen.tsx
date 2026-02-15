import React from 'react';

const AlertsScreen: React.FC = () => {
  const alerts = [
    {
      id: '1',
      title: 'Full Road Closure',
      location: 'KG 11 Ave (Remera)',
      desc: 'Major maintenance works. Road blocked from Giporoso to Prince House.',
      time: '2m ago',
      verified: true,
      status: 'closed',
      icon: 'block',
      color: 'bg-status-red text-white'
    },
    {
      id: '2',
      title: 'Heavy Congestion',
      location: 'KN 3 Rd (Downtown)',
      desc: 'Gridlock near Rubangura House heading towards Nyabugogo.',
      time: '12m ago',
      verified: false,
      status: 'heavy',
      icon: 'traffic',
      color: 'bg-status-yellow text-white'
    },
    {
      id: '3',
      title: 'Minor Accident',
      location: 'KK 15 Rd (Kicukiro)',
      desc: 'Two-vehicle collision at Sonatubes junction. Police on site.',
      time: '25m ago',
      verified: true,
      status: 'moderate',
      icon: 'car_crash',
      color: 'bg-primary text-white'
    }
  ];

  return (
    <div className="flex-1 bg-bg-light flex flex-col h-full">
      {/* Header */}
      <div className="px-6 pt-14 pb-6 bg-white/80 backdrop-blur-md sticky top-0 z-20">
        <div className="flex justify-between items-center mb-6">
           <div>
             <h1 className="text-2xl font-black text-slate-900 tracking-tight">Traffic Alerts</h1>
             <p className="text-sm text-slate-500 font-medium">Real-time community updates</p>
           </div>
           <button className="bg-white shadow-soft p-3 rounded-xl border border-slate-100 active:scale-95 transition-transform"><span className="material-icons-round text-slate-600">tune</span></button>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          <button className="px-5 py-2 bg-primary text-white text-xs font-bold rounded-full shadow-glow whitespace-nowrap">All Alerts</button>
          <button className="px-5 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-full whitespace-nowrap">Official</button>
          <button className="px-5 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-full whitespace-nowrap">Community</button>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-6 py-2 space-y-4 pb-32">
        {alerts.map(alert => (
          <div key={alert.id} className="bg-white p-5 rounded-3xl shadow-soft border border-slate-100 relative overflow-hidden group active:scale-[0.99] transition-transform">
            
            {/* Status Indicator Line */}
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${alert.status === 'closed' ? 'bg-status-red' : alert.status === 'heavy' ? 'bg-status-yellow' : 'bg-primary'}`}></div>

            <div className="flex justify-between items-start mb-3 pl-3">
              <div className={`w-10 h-10 ${alert.color} rounded-xl shadow-sm flex items-center justify-center`}>
                <span className="material-icons-round text-lg">{alert.icon}</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg">
                <span className="material-icons-round text-[12px] text-slate-400">schedule</span>
                <span className="text-[10px] font-bold text-slate-500">{alert.time}</span>
              </div>
            </div>

            <div className="pl-3">
              <h3 className="font-bold text-lg text-slate-800 leading-tight mb-1">{alert.location}</h3>
              <div className="flex items-center gap-2 mb-2">
                 {alert.verified && (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                    <span className="material-icons-round text-[12px]">verified</span> VERIFIED
                  </span>
                )}
                 <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${alert.status === 'closed' ? 'text-status-red bg-red-50' : 'text-slate-500 bg-slate-100'}`}>
                    {alert.title}
                 </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{alert.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsScreen;