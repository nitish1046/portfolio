// src/components/Resume.jsx
import React from 'react';
import { FileText, Download, Eye, Sparkles, ShieldCheck } from 'lucide-react';
import { useTilt3D } from '../hooks/useTilt3D';
import { soundFx } from '../utils/sound';

export default function Resume({ onOpenResume }) {
  const tilt = useTilt3D(4, 1.01);

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={tilt.ref}
          style={tilt.style}
          {...tilt.props}
          onMouseEnter={() => soundFx.playHover()}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 hover:border-cyan-400/60 shadow-2xl relative overflow-hidden text-center group"
        >
          {/* Ambient Glows */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-b from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Specular Glare */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl"
            style={{
              background: `radial-gradient(circle at ${tilt.glare.x}% ${tilt.glare.y}%, rgba(56,189,248,${tilt.glare.opacity * 2}), transparent 60%)`
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Top Icon Badge */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px] mb-6 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-cyber-black rounded-[14px] flex items-center justify-center">
                <FileText className="w-6 h-6 text-cyan-400" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-3">
              Want to know more<span className="text-purple-400">?</span>
            </h2>

            {/* Subtext */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Explore my experience, skills, projects, and technical journey in detail.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/resume.pdf"
                download="Nitish_Resume.pdf"
                onClick={() => soundFx.playSuccess()}
                className="px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm font-mono tracking-wider bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenResume();
                }}
                className="px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-300 glass-panel border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-500/10 active:scale-95 transition-all duration-200 flex items-center space-x-2"
              >
                <Eye className="w-4 h-4 text-purple-400" />
                <span>Interactive Preview</span>
              </button>
            </div>

            {/* Verification & Replacement notice */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center space-x-2 text-xs font-mono text-slate-500">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Resume location: <code className="text-cyan-400">/resume.pdf</code> (Ready to swap anytime)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
