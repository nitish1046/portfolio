// src/components/LoadingScreen.jsx
import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0: Initializing, 1: NITISH//X, 2: Tagline, 3: Completed
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Quick progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    const t1 = setTimeout(() => setPhase(1), 350);
    const t2 = setTimeout(() => setPhase(2), 750);
    const t3 = setTimeout(() => {
      setPhase(3);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 300);
    }, 1250);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-cyber-black transition-opacity duration-500 ${
        phase === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] -z-10 animate-pulse-slow" />

      <div className="relative flex flex-col items-center max-w-md px-6 text-center">
        {/* Holographic Diamond / Icon */}
        <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 border border-cyan-400/40 rounded-xl rotate-45 animate-spin-slow" />
          <div className="absolute inset-1.5 border border-purple-400/30 rounded-xl -rotate-45" />
          <span className="font-cyber font-black text-cyan-400 text-lg">N</span>
        </div>

        {/* Phase text */}
        <div className="h-14 flex items-center justify-center">
          {phase === 0 && (
            <span className="font-mono text-xs sm:text-sm text-cyan-400 tracking-[0.25em] animate-pulse">
              INITIALIZING SYSTEM...
            </span>
          )}
          {phase === 1 && (
            <h1 className="font-cyber text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-purple-400 tracking-wider animate-fadeIn">
              NITISH<span className="text-purple-400">//</span>X
            </h1>
          )}
          {phase >= 2 && (
            <div className="flex flex-col items-center animate-fadeIn">
              <h1 className="font-cyber text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-purple-400 tracking-wider">
                NITISH<span className="text-purple-400">//</span>X
              </h1>
              <p className="mt-1 font-mono text-xs tracking-[0.3em] text-cyan-300/80 uppercase">
                BUILD • THINK • CREATE
              </p>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-56 sm:w-64 h-1 bg-slate-900 rounded-full mt-6 overflow-hidden border border-cyan-500/20">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status text */}
        <div className="flex justify-between w-56 sm:w-64 mt-2 text-[10px] font-mono text-slate-500">
          <span>STATUS: ONLINE</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
