// src/components/ProjectVisuals.jsx
import React from 'react';

export function ProjectVisual({ type }) {
  if (type === 'foodRescue') {
    return (
      <div className="relative w-full h-48 sm:h-56 bg-cyber-dark/90 rounded-2xl overflow-hidden flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-400/50 transition-colors">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
        
        {/* SVG Holographic Logistics & Matching Diagram */}
        <svg className="w-full h-full p-4" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Grid lines */}
          <line x1="50" y1="30" x2="350" y2="30" stroke="#065f46" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="50" y1="100" x2="350" y2="100" stroke="#065f46" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="50" y1="170" x2="350" y2="170" stroke="#065f46" strokeWidth="0.8" strokeDasharray="3 3" />

          {/* Network routes */}
          <path d="M 90 100 Q 150 40 200 100 T 310 100" stroke="#10b981" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse" />
          <path d="M 90 100 Q 170 160 200 100 T 310 60" stroke="#06b6d4" strokeWidth="1.5" />

          {/* Donor Node */}
          <circle cx="90" cy="100" r="24" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
          <circle cx="90" cy="100" r="16" fill="#047857" />
          <text x="90" y="104" textAnchor="middle" fill="#ecfdf5" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">DONOR</text>

          {/* Matching Engine Hub */}
          <rect x="175" y="75" width="50" height="50" rx="10" fill="#0c1a30" stroke="#38bdf8" strokeWidth="2" />
          <text x="200" y="98" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">MATCH</text>
          <text x="200" y="112" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="JetBrains Mono">ENGINE</text>

          {/* Shelter Node */}
          <circle cx="310" cy="100" r="24" fill="#1e1b4b" stroke="#a855f7" strokeWidth="2" />
          <circle cx="310" cy="100" r="16" fill="#4c1d95" />
          <text x="310" y="104" textAnchor="middle" fill="#faf5ff" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">SHELTER</text>

          {/* Metrics Pill */}
          <rect x="140" y="150" width="120" height="24" rx="12" fill="#06121e" stroke="#10b981" strokeWidth="1" />
          <circle cx="152" cy="162" r="3" fill="#34d399" />
          <text x="204" y="166" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontFamily="JetBrains Mono">IMPACT VERIFIED</text>
        </svg>

        <div className="absolute top-3 left-3 text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
          LOGISTICS_DISPATCH_UI // SQLite
        </div>
      </div>
    );
  }

  if (type === 'evCharging') {
    return (
      <div className="relative w-full h-48 sm:h-56 bg-cyber-dark/90 rounded-2xl overflow-hidden flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-400/50 transition-colors">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-600/10 pointer-events-none" />

        {/* SVG Futuristic EV Station & C++ Vector Buffer */}
        <svg className="w-full h-full p-4" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Station Pillar */}
          <rect x="70" y="40" width="46" height="120" rx="8" fill="#0b1329" stroke="#00d2ff" strokeWidth="2" />
          <rect x="80" y="55" width="26" height="22" rx="4" fill="#003554" />
          <text x="93" y="70" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">94%</text>
          <line x1="78" y1="95" x2="108" y2="95" stroke="#38bdf8" strokeWidth="2" />
          <line x1="78" y1="105" x2="98" y2="105" stroke="#38bdf8" strokeWidth="2" />
          <text x="93" y="135" textAnchor="middle" fill="#00d2ff" fontSize="8" fontFamily="JetBrains Mono">150 kW</text>

          {/* Cable with energy pulse */}
          <path d="M 116 100 C 150 100, 160 140, 200 130" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          
          {/* EV Vehicle Wireframe Silhouette */}
          <path d="M 200 140 L 230 110 L 300 110 L 330 140 L 350 140 C 355 140 360 145 360 150 L 360 160 L 190 160 L 190 150 C 190 145 195 140 200 140 Z" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
          <circle cx="230" cy="160" r="14" fill="#080e1a" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="320" cy="160" r="14" fill="#080e1a" stroke="#38bdf8" strokeWidth="2" />

          {/* C++ Vector / Memory indicator box */}
          <rect x="180" y="40" width="170" height="45" rx="6" fill="#060c18" stroke="#3b82f6" strokeWidth="1" />
          <text x="190" y="58" fill="#93c5fd" fontSize="9" fontFamily="JetBrains Mono">std::vector&lt;StationSlot&gt;</text>
          <text x="190" y="73" fill="#34d399" fontSize="8" fontFamily="JetBrains Mono">Status: BOOKED // Billing Active</text>
        </svg>

        <div className="absolute top-3 left-3 text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
          C++_OOP // STL_VECTORS
        </div>
      </div>
    );
  }

  // Waste Segregation Monitoring System
  return (
    <div className="relative w-full h-48 sm:h-56 bg-cyber-dark/90 rounded-2xl overflow-hidden flex items-center justify-center border border-purple-500/20 group-hover:border-purple-400/50 transition-colors">
      {/* Glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none" />

      {/* SVG Sensor Telemetry & Smart City Monitoring */}
      <svg className="w-full h-full p-4" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* City skyline background mesh */}
        <path d="M 40 160 L 40 110 L 80 110 L 80 140 L 120 140 L 120 90 L 170 90 L 170 160 Z" stroke="#312e81" strokeWidth="1" fill="#1e1b4b" fillOpacity="0.3" />
        <path d="M 230 160 L 230 100 L 280 100 L 280 130 L 320 130 L 320 80 L 360 80 L 360 160 Z" stroke="#312e81" strokeWidth="1" fill="#1e1b4b" fillOpacity="0.3" />

        {/* Smart Bin / Monitoring Node in foreground */}
        <rect x="165" y="60" width="70" height="95" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
        <rect x="175" y="70" width="50" height="30" rx="4" fill="#2e1065" />
        <text x="200" y="88" textAnchor="middle" fill="#c084fc" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">SENSORS</text>
        <line x1="175" y1="110" x2="225" y2="110" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="200" y="128" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="JetBrains Mono">FILL: 38% OK</text>
        <circle cx="178" cy="142" r="3" fill="#34d399" />
        <circle cx="190" cy="142" r="3" fill="#38bdf8" />
        <circle cx="202" cy="142" r="3" fill="#a855f7" />

        {/* Ultrasonic Waves emitting */}
        <path d="M 180 50 C 190 42, 210 42, 220 50" stroke="#c084fc" strokeWidth="1.5" />
        <path d="M 170 42 C 190 32, 210 32, 230 42" stroke="#c084fc" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M 160 34 C 190 22, 210 22, 240 34" stroke="#c084fc" strokeWidth="1.5" strokeOpacity="0.3" />
      </svg>

      <div className="absolute top-3 left-3 text-[10px] font-mono text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/30">
        ENVIRONMENTAL_LOGIC // URBAN_MONITOR
      </div>
    </div>
  );
}
