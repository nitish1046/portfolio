// src/components/Education.jsx
import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';
import { useTilt3D } from '../hooks/useTilt3D';
import { soundFx } from '../utils/sound';

export default function Education() {
  const tilt = useTilt3D(5, 1.01);

  return (
    <section id="education" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-mono mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education Timeline
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Futuristic Timeline Layout */}
        <div className="max-w-3xl mx-auto relative">
          {/* Glowing central timeline track */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent opacity-60" />

          {/* Timeline Node */}
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 group">
            
            {/* Center Pulsing Marker */}
            <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyber-black border-2 border-cyan-400 flex items-center justify-center z-10 shadow-[0_0_15px_#00d2ff]">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            </div>

            {/* Main Education Card */}
            <div
              ref={tilt.ref}
              style={tilt.style}
              {...tilt.props}
              onMouseEnter={() => soundFx.playHover()}
              className="ml-14 sm:ml-auto sm:w-[88%] glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/25 shadow-xl hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Meta Tags */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center space-x-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>UNDERGRADUATE DEGREE</span>
                </span>

                <div className="flex items-center space-x-2 text-xs font-mono text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{EDUCATION.graduation}</span>
                </div>
              </div>

              {/* Title & Institution */}
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight mb-2">
                {EDUCATION.degree}
              </h3>
              
              <div className="flex items-center space-x-2 text-sm text-cyan-300 font-medium mb-6">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{EDUCATION.institution}</span>
              </div>

              {/* Highlights & Modules */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                {EDUCATION.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Status Badge */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800/60 text-xs font-mono">
                <span className="text-slate-400">ENROLLMENT STATUS:</span>
                <span className="text-emerald-400 font-semibold flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ACTIVE / IN PROGRESS</span>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
