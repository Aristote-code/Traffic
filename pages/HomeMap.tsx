import React, { useState, useEffect } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

// Custom Map Style (Silver/Clean)
const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [{ "color": "#f5f5f5" }]
  },
  {
    "elementType": "labels.icon",
    "stylers": [{ "visibility": "off" }]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#616161" }]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [{ "color": "#f5f5f5" }]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#bdbdbd" }]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{ "color": "#eeeeee" }]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#757575" }]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{ "color": "#e5e5e5" }]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#9e9e9e" }]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{ "color": "#ffffff" }]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#757575" }]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{ "color": "#dadada" }]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#616161" }]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#9e9e9e" }]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [{ "color": "#e5e5e5" }]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [{ "color": "#eeeeee" }]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{ "color": "#c9c9c9" }]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#9e9e9e" }]
  }
];

const HomeMap: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mapError, setMapError] = useState(false);
  
  // Default center (Kigali, Rwanda)
  const center = { lat: -1.9441, lng: 30.0619 };
  
  // Safe environment access
  // Removed hardcoded invalid key to prevent ApiNotActivatedMapError.
  // User must provide a valid key via environment variables.
  const getEnv = (key: string) => (typeof process !== 'undefined' ? process.env?.[key] : undefined);
  const apiKey = getEnv('GOOGLE_MAPS_API_KEY') || getEnv('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY') || '';

  useEffect(() => {
    const handleAuthFailure = () => {
      setMapError(true);
    };
    // Listen for the global gm_authFailure event we defined in index.html
    window.addEventListener("gm_authFailure", handleAuthFailure);
    return () => window.removeEventListener("gm_authFailure", handleAuthFailure);
  }, []);

  return (
    <div className="relative w-full h-full bg-slate-100 overflow-hidden">
      {/* Search Header */}
      <div className="absolute top-0 left-0 right-0 p-4 z-40 pt-12 bg-gradient-to-b from-white/90 to-transparent pointer-events-none">
        <div className="glass rounded-2xl shadow-soft flex items-center p-2 pr-3 pointer-events-auto">
          <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
            <span className="material-icons-round">search</span>
          </button>
          <input 
            className="flex-1 bg-transparent border-none outline-none text-sm font-medium py-2 placeholder-slate-400 text-slate-800"
            placeholder="Search roads, places..." 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
          <button className="w-8 h-8 flex items-center justify-center text-primary bg-primary/10 rounded-full">
            <span className="material-icons-round text-[18px]">mic</span>
          </button>
        </div>
      </div>

      {/* Real Google Map with Error Handling */}
      {!mapError && apiKey ? (
        <APIProvider apiKey={apiKey} onError={() => setMapError(true)}>
          <Map
            defaultCenter={center}
            defaultZoom={14}
            disableDefaultUI={true}
            styles={mapStyle}
            className="w-full h-full"
            gestureHandling="greedy"
            reuseMaps={true}
          >
            {/* Custom Markers */}
            <Marker position={{ lat: -1.9400, lng: 30.0600 }} />
            <Marker position={{ lat: -1.9500, lng: 30.0550 }} title="Road Work" />
          </Map>
        </APIProvider>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-0 p-8 text-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="w-24 h-24 bg-white rounded-3xl shadow-soft flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
                <span className="material-icons-round text-5xl text-slate-300 relative z-10">map</span>
                {mapError && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
                )}
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-2 tracking-tight">Map Unavailable</h3>
            <p className="text-sm text-slate-500 max-w-[280px] leading-relaxed mb-6">
              {mapError 
                ? "The Google Maps API key provided is not active or valid for this domain." 
                : "TrafficWatch requires a Google Maps API Key to render live traffic data."}
            </p>
            
            {!apiKey && (
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm max-w-xs w-full text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Developer Setup</p>
                <code className="block bg-slate-50 p-3 rounded-lg text-xs font-mono text-slate-600 break-all border border-slate-100">
                  export GOOGLE_MAPS_API_KEY=...
                </code>
              </div>
            )}

            {mapError && (
              <a 
                href="https://console.cloud.google.com/google/maps-apis/overview" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 shadow-sm rounded-xl text-xs font-bold text-primary hover:bg-slate-50 transition-colors"
              >
                <span>Console</span>
                <span className="material-icons-round text-sm">open_in_new</span>
              </a>
            )}
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40">
        <button className="w-12 h-12 glass rounded-2xl shadow-soft flex items-center justify-center text-slate-600 active:scale-95 transition-transform">
          <span className="material-icons-round">layers</span>
        </button>
        <button className="w-12 h-12 bg-primary rounded-2xl shadow-glow flex items-center justify-center text-white active:scale-95 transition-transform">
          <span className="material-icons-round">my_location</span>
        </button>
      </div>

      {/* Bottom Sheet Summary */}
      <div className="absolute bottom-24 left-4 right-4 z-40">
        <div className="glass rounded-3xl shadow-soft p-5 border-t border-white/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-900">Kigali Center</span>
              <span className="px-2.5 py-1 bg-status-green/10 text-status-green text-[10px] font-bold rounded-full uppercase tracking-wide">Stable Flow</span>
            </div>
            <span className="text-[10px] text-slate-400 font-semibold bg-slate-100 px-2 py-1 rounded-lg">Updated 2m ago</span>
          </div>
          
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { val: 12, label: 'Clear', color: 'text-status-green', bg: 'bg-green-50' },
              { val: 5, label: 'Moderate', color: 'text-status-yellow', bg: 'bg-yellow-50' },
              { val: 3, label: 'Heavy', color: 'text-status-red', bg: 'bg-red-50' }
            ].map((stat, i) => (
              <div key={i} className={`${stat.bg} p-3 rounded-2xl flex flex-col items-center justify-center transition-transform active:scale-95`}>
                <span className={`${stat.color} font-black text-xl leading-none mb-1`}>{stat.val}</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm border border-slate-100 active:bg-slate-50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-icons-round text-primary text-[22px]">directions_car</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-slate-500">Suggested Route</p>
              <p className="text-sm font-bold text-slate-900">To City Center via KN 3 Rd</p>
            </div>
            <div className="text-right">
                <p className="text-sm font-bold text-slate-900">15 min</p>
                <p className="text-[10px] text-status-green font-bold">Fastest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMap;