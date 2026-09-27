// src/components/Hobbies.jsx
import React from 'react';
import { 
  Activity, Code, Music, Camera, Compass, Gamepad2, Sparkles, Dumbbell, Heart
} from 'lucide-react';
import { HOBBIES } from '../data/portfolioData';
import { useTilt3D } from '../hooks/useTilt3D';
import { soundFx } from '../utils/sound';

const ICON_MAP = {
  Activity,
  Code,
  Music,
  Camera,
  Compass,
  Gamepad2,
  Sparkles,
  Dumbbell
};

function HobbyCard({ item }) {
  const Icon = ICON_MAP[item.icon] || Sparkles;
  const tilt = useTilt3D(10, 1.05);

  return (
    <div
      ref={tilt.ref}
      style={tilt.style}
      {...tilt.props}
      onMouseEnter={() => soundFx.playHover()}
      className="glass-panel p-4 rounded-2xl border border-cyan-500/15 hover:border-cyan-400/50 shadow-md relative overflow-hidden group transition-all duration-300 flex flex-col justify-between"
    >
      {/* Specular glare */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${tilt.glare.x}% ${tilt.glare.y}%, rgba(56,189,248,${tilt.glare.opacity * 1.5}), transparent 60%)`
        }}
      />

      <div className="flex items-center justify-between mb-3">
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:text-purple-300 group-hover:scale-110 transition-all">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
          {item.category}
        </span>
      </div>

      <div>
        <h4 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
          {item.name}
        </h4>
        <p className="text-[11px] text-slate-400 mt-1 leading-snug">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Hobbies() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono mb-3">
            <Heart className="w-3.5 h-3.5 text-pink-400" />
            <span>HUMAN PERSPECTIVE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Beyond Code
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-lg mx-auto">
            Disciplines, passions, and creative outlets that fuel focus, stamina, and strategic thinking.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Small Interactive Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {HOBBIES.map((item, idx) => (
            <HobbyCard key={idx} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
