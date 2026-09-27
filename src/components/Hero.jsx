// src/components/Hero.jsx
import React from 'react';
import { ArrowDown, FileText, Send, Sparkles, Terminal, Code, Cpu } from 'lucide-react';
import Hero3DScene from './Hero3DScene';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Hero({ onOpenResume }) {
  const scrollTo = (selector) => {
    soundFx.playClick();
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Identity, Headlines & Bio */}
          <div className="lg:col-span-7 flex flex-col z-10">
            {/* Top Brand Pill & Live Status Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-semibold tracking-wide">NITISH//X</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300">BUILD • THINK • CREATE</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Available for Internships</span>
              </div>
            </div>

            {/* Profile Photo in Premium Holographic Glass Frame + Name */}
            <div className="flex items-center space-x-5 mb-6">
              <div className="relative group">
                {/* Rotating Glowing Holographic Orbit Rings */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 opacity-75 blur-sm group-hover:opacity-100 transition duration-500 animate-spin-slow" />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2px] bg-cyber-black">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/40 relative bg-cyber-dark">
                    <img
                      src="/nitish.jpg"
                      alt="Nitish"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                    {/* Glass sheen overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/20 pointer-events-none" />
                  </div>
                </div>

                {/* Cyber Corner Badge */}
                <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-cyber-black border border-cyan-400 shadow-md">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>

              <div>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                  Nitish
                </h1>
                <p className="font-mono text-xs sm:text-sm text-cyan-400 font-medium tracking-wide mt-1">
                  Computer Science Student &amp; Aspiring Software Engineer
                </p>
              </div>
            </div>

            {/* Headlines */}
            <div className="space-y-2 mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200">
                Building Ideas. Writing Code. Creating Impact.
              </h2>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                Turning Code into Real-World Solutions.
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-2xl mb-8 glass-panel p-4 sm:p-5 rounded-2xl border-l-2 border-l-cyan-400 shadow-lg">
              I'm Nitish, a Computer Science student and aspiring Software Engineer passionate about building practical, real-world solutions through technology. I enjoy developing projects, exploring software development, solving programming problems, and continuously improving my technical skills. I'm always eager to learn, build, and turn ideas into working products.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary: View My Projects */}
              <button
                onClick={() => scrollTo('#projects')}
                onMouseEnter={() => soundFx.playHover()}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center space-x-2"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              {/* Secondary: Download Resume */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  if (onOpenResume) onOpenResume();
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm glass-panel border border-cyan-500/30 text-slate-100 hover:text-cyan-300 hover:border-cyan-400/60 hover:bg-cyan-500/10 active:scale-95 transition-all duration-200 flex items-center space-x-2 shadow-md"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              {/* Additional: Let's Connect */}
              <button
                onClick={() => scrollTo('#contact')}
                onMouseEnter={() => soundFx.playHover()}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white hover:bg-white/5 active:scale-95 transition-all duration-200 flex items-center space-x-2"
              >
                <Send className="w-4 h-4 text-purple-400" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Quick Tech Highlights Badge Strip */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono text-slate-400">
              <span className="text-slate-500 uppercase tracking-widest text-[10px]">CORE DOMAINS:</span>
              <span className="px-2.5 py-1 rounded-md bg-cyber-dark/80 border border-cyan-500/20 text-cyan-300 flex items-center space-x-1.5">
                <Code className="w-3 h-3 text-cyan-400" />
                <span>C++ / Python / C</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-cyber-dark/80 border border-purple-500/20 text-purple-300 flex items-center space-x-1.5">
                <Cpu className="w-3 h-3 text-purple-400" />
                <span>Data Structures &amp; Algorithms</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-cyber-dark/80 border border-sky-500/20 text-sky-300 flex items-center space-x-1.5">
                <Sparkles className="w-3 h-3 text-sky-400" />
                <span>Web Architecture</span>
              </span>
            </div>
          </div>

          {/* Right Column: 3D Interactive Futuristic Digital World Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Hero3DScene />
          </div>

        </div>
      </div>
    </section>
  );
}
