// src/components/About.jsx
import React from 'react';
import { UserCheck, Award, FolderGit2, GraduationCap, Compass, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTilt3D } from '../hooks/useTilt3D';
import { soundFx } from '../utils/sound';

function StatCard({ icon: Icon, value, label, sub, colorClass, borderClass }) {
  const tilt = useTilt3D(6, 1.03);

  return (
    <div
      ref={tilt.ref}
      style={tilt.style}
      {...tilt.props}
      onMouseEnter={() => soundFx.playHover()}
      className={`glass-panel p-5 sm:p-6 rounded-2xl relative overflow-hidden transition-all duration-300 border ${borderClass} group`}
    >
      {/* Specular glare */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${tilt.glare.x}% ${tilt.glare.y}%, rgba(255,255,255,${tilt.glare.opacity}), transparent 60%)`
        }}
      />
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${colorClass} bg-opacity-10 border border-current border-opacity-30`}>
          <Icon className="w-5 h-5" />
        </div>
        <Sparkles className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
      </div>
      <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-1 group-hover:text-cyan-300 transition-colors">
        {value}
      </h4>
      <p className="text-xs font-mono text-cyan-400 font-medium uppercase tracking-wider mb-0.5">
        {label}
      </p>
      <p className="text-xs text-slate-400">
        {sub}
      </p>
    </div>
  );
}

export default function About() {
  const { aboutDetailed } = PERSONAL_INFO;

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>DISCOVERY &amp; IDENTITY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Who Am I<span className="text-purple-400">?</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Glassmorphic Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/20 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base relative z-10">
              <p className="text-base sm:text-lg text-slate-200 font-medium border-l-2 border-cyan-400 pl-4 py-1">
                {aboutDetailed.lead}
              </p>

              <p className="text-slate-300/90">
                {aboutDetailed.paragraph2}
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-cyber-dark/80 border border-purple-500/20 shadow-inner">
                <span className="text-xs font-mono uppercase tracking-widest text-purple-400 block mb-1">
                  Core Objective //
                </span>
                <p className="text-slate-200 font-medium italic">
                  "{aboutDetailed.goal}"
                </p>
              </div>
            </div>

            {/* Mindset Pillars */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-center">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="font-mono text-xs font-bold text-cyan-400 block">BUILD</span>
                <span className="text-[11px] text-slate-400">Practical Code</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="font-mono text-xs font-bold text-sky-400 block">THINK</span>
                <span className="text-[11px] text-slate-400">Deep Algorithms</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="font-mono text-xs font-bold text-purple-400 block">CREATE</span>
                <span className="text-[11px] text-slate-400">Real Impact</span>
              </div>
            </div>
          </div>

          {/* Right: Verified Stats & Profile Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard
              icon={GraduationCap}
              value="CS Student"
              label="Academic Path"
              sub="B.Tech Computer Science"
              colorClass="text-cyan-400"
              borderClass="border-cyan-500/20 hover:border-cyan-400/50"
            />
            <StatCard
              icon={UserCheck}
              value="Aspiring SWE"
              label="Engineering Focus"
              sub="Building Scalable Systems"
              colorClass="text-sky-400"
              borderClass="border-sky-500/20 hover:border-sky-400/50"
            />
            <StatCard
              icon={FolderGit2}
              value="3 Featured"
              label="Built Projects"
              sub="Practical Solutions"
              colorClass="text-purple-400"
              borderClass="border-purple-500/20 hover:border-purple-400/50"
            />
            <StatCard
              icon={Award}
              value="Hackathons"
              label="Collaboration"
              sub="Active Participant"
              colorClass="text-emerald-400"
              borderClass="border-emerald-500/20 hover:border-emerald-400/50"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
