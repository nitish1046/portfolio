// src/components/ResumeModal.jsx
import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, GraduationCap, Code2, Award, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, SKILLS_CATEGORIES, PROJECTS } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-4xl rounded-3xl border border-cyan-500/30 bg-cyber-darker p-6 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs text-cyan-300 font-semibold tracking-wider">
              NITISH // OFFICIAL RESUME PREVIEW
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="/resume.pdf"
              download="Nitish_Resume.pdf"
              onClick={() => soundFx.playSuccess()}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              aria-label="Print resume"
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 border border-white/10 transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              aria-label="Close resume viewer"
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 border border-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper Layout */}
        <div className="bg-slate-950/70 p-6 sm:p-10 rounded-2xl border border-slate-800/80 shadow-inner text-slate-200">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 mb-6">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-mono text-cyan-400 text-sm mt-1">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs font-mono text-slate-400">
              <span>Email: {PERSONAL_INFO.contact.email}</span>
              <span>•</span>
              <span>LinkedIn: {PERSONAL_INFO.contact.linkedin}</span>
              <span>•</span>
              <span>GitHub: {PERSONAL_INFO.contact.github}</span>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 flex items-center space-x-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                <h3 className="font-bold text-white text-sm sm:text-base">
                  {EDUCATION.degree}
                </h3>
                <span className="text-xs font-mono text-purple-300">
                  {EDUCATION.graduation}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {EDUCATION.institution}
              </p>
            </div>
          </div>

          {/* Technical Arsenal */}
          <div className="mb-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold mb-3 flex items-center space-x-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Arsenal</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILLS_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs">
                  <span className="font-mono text-cyan-300 font-semibold block mb-1">
                    {cat.name}:
                  </span>
                  <p className="text-slate-300">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 flex items-center space-x-2">
              <FolderGit2 className="w-4 h-4" />
              <span>Featured Projects</span>
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <h3 className="font-bold text-white text-sm">
                      {proj.title}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400">
                      {proj.contribution}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1 text-[11px] font-mono text-slate-400">
                    <span>Tech:</span>
                    {proj.technologies.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2 flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Achievements &amp; Activities</span>
            </h2>
            <p className="text-xs text-slate-300 p-3 rounded-xl bg-white/5 border border-white/5 leading-relaxed">
              Hackathon Participant • HackerRank Profile: @nitishkumar74111 • Active Continuous Learning &amp; Problem Solving
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
          <span>Path: <code className="text-cyan-400">/resume.pdf</code></span>
          <span>NITISH//X DEVELOPER DOSSIER</span>
        </div>
      </div>
    </div>
  );
}
