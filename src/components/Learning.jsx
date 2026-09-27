// src/components/Learning.jsx
import React from 'react';
import { Compass, Zap, Network, FileCode, Server, Layers, Cloud, Sparkles, ArrowRight } from 'lucide-react';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';
import { useTilt3D } from '../hooks/useTilt3D';
import { soundFx } from '../utils/sound';

const ICON_MAP = {
  Zap,
  Network,
  FileCode,
  Server,
  Layers,
  Cloud
};

function ExploringCard({ item }) {
  const Icon = ICON_MAP[item.icon] || Sparkles;
  const tilt = useTilt3D(6, 1.02);

  return (
    <div
      ref={tilt.ref}
      style={tilt.style}
      {...tilt.props}
      onMouseEnter={() => soundFx.playHover()}
      className="glass-panel p-5 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 shadow-lg relative overflow-hidden group transition-all duration-300 flex flex-col justify-between"
    >
      {/* Specular glare */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${tilt.glare.x}% ${tilt.glare.y}%, rgba(192,132,252,${tilt.glare.opacity * 1.5}), transparent 60%)`
        }}
      />

      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:text-purple-300 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
            Active Study
          </span>
        </div>

        <h4 className="font-display font-bold text-lg text-white mb-1 group-hover:text-purple-300 transition-colors">
          {item.title}
        </h4>
        <p className="text-xs font-mono text-cyan-300/80 mb-2">
          {item.category}
        </p>
        <p className="text-xs text-slate-400 leading-relaxed">
          {item.desc}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span className="flex items-center space-x-1 text-purple-400">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
          <span>Curiosity Loop</span>
        </span>
        <span className="group-hover:translate-x-1 transition-transform">
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
        </span>
      </div>
    </div>
  );
}

export default function Learning() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>HORIZONS &amp; EVOLUTION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Currently Exploring
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Deepening software engineering mastery across advanced language features, algorithms, modern web stacks, and distributed systems.
            </p>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-cyan-400 glass-panel px-4 py-2 rounded-xl border border-cyan-500/20">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>CONTINUOUS LEARNING PIPELINE</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CURRENTLY_EXPLORING.map((item, index) => (
            <ExploringCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
