import React, { useState } from 'react';
import { ExternalLink, Code, Layers, Sparkles, FolderGit2, CheckCircle2, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisuals';
import ProjectModal from './ProjectModal';
import { useTilt3D } from '../hooks/useTilt3D';
import { soundFx } from '../utils/sound';

function ProjectCard({ project, onSelectProject }) {
  const tilt = useTilt3D(6, 1.02);

  return (
    <div
      ref={tilt.ref}
      style={tilt.style}
      {...tilt.props}
      onMouseEnter={() => soundFx.playHover()}
      className="glass-panel rounded-3xl border border-cyan-500/20 hover:border-cyan-400/50 shadow-xl overflow-hidden group flex flex-col justify-between transition-all duration-300 relative"
    >
      {/* Specular glare */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl"
        style={{
          background: `radial-gradient(circle at ${tilt.glare.x}% ${tilt.glare.y}%, rgba(56,189,248,${tilt.glare.opacity * 1.5}), transparent 60%)`
        }}
      />

      {/* Visual Area with hover zoom effect */}
      <div className="p-4 sm:p-5 pb-0 overflow-hidden">
        <div className="transition-transform duration-500 group-hover:scale-[1.02]">
          <ProjectVisual type={project.visualType} />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          {/* Category & Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
              {project.themeBadge}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-slate-300/90 text-xs sm:text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Personal Contribution Box (if present) */}
          {project.contribution && (
            <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/25 mb-4 flex items-center space-x-2 text-xs">
              <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
              <div className="font-mono text-slate-300">
                <span className="text-cyan-400 font-semibold">Role: </span>
                <span>{project.contribution}</span>
              </div>
            </div>
          )}

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons / Actions */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-0.5"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub &rarr;</span>
          </a>

          <button
            onClick={() => {
              soundFx.playClick();
              onSelectProject(project);
            }}
            className="px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white glass-panel border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all flex items-center space-x-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>Architecture &amp; Features</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>APPLICATIONS &amp; CODEBASES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Things I've Built
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Practical software projects addressing food logistics, intelligent vehicle infrastructure, and smart urban sustainability.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={setSelectedProject}
            />
          ))}
        </div>

        {/* Modal for detailed view */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
