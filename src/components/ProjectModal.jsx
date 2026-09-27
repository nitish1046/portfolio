import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Cpu, Code2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ProjectVisual } from './ProjectVisuals';
import { soundFx } from '../utils/sound';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-3xl rounded-3xl border border-cyan-500/30 bg-cyber-darker p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          aria-label="Close Project Modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Visual */}
        <div className="mb-6">
          <ProjectVisual type={project.visualType} />
        </div>

        {/* Category & Title */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
            {project.category}
          </span>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/25">
            {project.themeBadge}
          </span>
        </div>

        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Personal Contribution Box */}
        {project.contribution && (
          <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 mb-6 flex items-start space-x-3">
            <Cpu className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                Personal Contribution:
              </span>
              <p className="text-sm font-medium text-slate-200 mt-0.5">
                {project.contribution}
              </p>
            </div>
          </div>
        )}

        {/* Key Features List */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-3 flex items-center space-x-2">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Core Features &amp; Architecture:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Badges */}
        <div className="mb-8">
          <h4 className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-2 flex items-center space-x-2">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Technologies Utilized:</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-cyber-dark border border-slate-700 text-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold font-mono bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-transform"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository &rarr;</span>
          </a>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
