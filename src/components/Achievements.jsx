// src/components/Achievements.jsx
import React, { useState } from 'react';
import { Award, Calendar, Building, Sparkles, ExternalLink, ShieldCheck, X, FileBadge } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { useTilt3D } from '../hooks/useTilt3D';
import { soundFx } from '../utils/sound';

function CertificateModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-lg rounded-3xl border border-cyan-500/30 bg-cyber-darker p-6 sm:p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
          <Award className="w-6 h-6" />
        </div>

        <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-1">
          {item.category} RECORD
        </span>
        <h3 className="font-display font-bold text-2xl text-white mb-2">
          {item.title}
        </h3>
        <p className="text-xs font-mono text-cyan-300 mb-4 flex items-center space-x-2">
          <Building className="w-3.5 h-3.5" />
          <span>{item.organization}</span>
          <span>•</span>
          <span>{item.date}</span>
        </p>

        <p className="text-sm text-slate-300 leading-relaxed p-4 rounded-2xl bg-white/5 border border-white/5 mb-6">
          {item.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
          <span className="flex items-center space-x-1.5 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Participant Entry</span>
          </span>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

function AchievementCard({ item, onSelect }) {
  const tilt = useTilt3D(6, 1.02);

  return (
    <div
      ref={tilt.ref}
      style={tilt.style}
      {...tilt.props}
      onMouseEnter={() => soundFx.playHover()}
      className="glass-panel p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/50 shadow-lg relative overflow-hidden group flex flex-col justify-between transition-all duration-300"
    >
      {/* Specular glare */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${tilt.glare.x}% ${tilt.glare.y}%, rgba(192,132,252,${tilt.glare.opacity * 1.5}), transparent 60%)`
        }}
      />

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/25 px-2.5 py-0.5 rounded-full">
            {item.badge}
          </span>
        </div>

        <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {item.title}
        </h4>

        <div className="flex flex-col space-y-1 mb-3 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-1.5 text-slate-300">
            <Building className="w-3.5 h-3.5 text-purple-400" />
            <span>{item.organization}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>{item.date}</span>
          </div>
        </div>

        <p className="text-xs text-slate-300/80 leading-relaxed mb-4">
          {item.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <button
          onClick={() => {
            soundFx.playClick();
            onSelect(item);
          }}
          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center space-x-1.5 group-hover:translate-x-0.5 transition-transform"
        >
          <FileBadge className="w-4 h-4" />
          <span>View Certificate / Details &rarr;</span>
        </button>

        {item.isEditable && (
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest" title="Template placeholder card ready for new certification">
            [Editable Record]
          </span>
        )}
      </div>
    </div>
  );
}

export default function Achievements() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="achievements" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>MILESTONES &amp; CREDENTIALS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Achievements &amp; Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Hackathon participation, algorithmic learning records, and verified coursework milestones.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 via-sky-400 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <AchievementCard
              key={item.id}
              item={item}
              onSelect={setSelectedItem}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <CertificateModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}

      </div>
    </section>
  );
}
