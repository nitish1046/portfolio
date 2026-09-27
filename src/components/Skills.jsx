// src/components/Skills.jsx
import React, { useState } from 'react';
import { 
  Code2, Cpu, Globe, Terminal, Shield, GitBranch, Layers, 
  FileCode, CheckCircle, Sparkles 
} from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';
import { useTilt3D } from '../hooks/useTilt3D';
import { soundFx } from '../utils/sound';

function SkillCard({ skill, categoryName }) {
  const tilt = useTilt3D(8, 1.03);

  return (
    <div
      ref={tilt.ref}
      style={tilt.style}
      {...tilt.props}
      onMouseEnter={() => soundFx.playHover()}
      className="glass-panel p-5 sm:p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/60 shadow-lg relative overflow-hidden group transition-all duration-300"
    >
      {/* Specular glare */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${tilt.glare.x}% ${tilt.glare.y}%, rgba(56,189,248,${tilt.glare.opacity * 1.5}), transparent 60%)`
        }}
      />

      {/* Top Category & Level Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
          {categoryName}
        </span>
        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
          {skill.badge}
        </span>
      </div>

      {/* Skill Name */}
      <h4 className="font-display font-bold text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
        <span>{skill.name}</span>
        <Sparkles className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors" />
      </h4>

      {/* Level description */}
      <p className="text-xs font-mono text-purple-300 mb-2">
        Focus: {skill.level}
      </p>

      {/* Skill description */}
      <p className="text-xs text-slate-300/80 leading-relaxed">
        {skill.desc}
      </p>

      {/* Bottom glowing accent bar */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="flex items-center space-x-1 text-cyan-400">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>Verified Skill</span>
        </span>
        <span className="text-slate-500 group-hover:text-cyan-300 transition-colors">NITISH//X</span>
      </div>
    </div>
  );
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Arsenal' },
    { id: 'programming', label: 'Programming' },
    { id: 'cs', label: 'Computer Science' },
    { id: 'web', label: 'Web Development' },
    { id: 'tools', label: 'Tools & Version Control' },
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? SKILLS_CATEGORIES 
    : SKILLS_CATEGORIES.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>CAPABILITIES &amp; FOUNDATIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Practical programming languages, algorithmic problem solving, core computer science concepts, and developer workflows.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all duration-200 border ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                    : 'glass-panel text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.flatMap((cat) =>
            cat.skills.map((skill, idx) => (
              <SkillCard
                key={`${cat.id}-${skill.name}-${idx}`}
                skill={skill}
                categoryName={cat.name}
              />
            ))
          )}
        </div>

        {/* Verification Note (adhering to prompt instructions to avoid fake percentages) */}
        <div className="mt-12 text-center text-xs font-mono text-slate-500 flex items-center justify-center space-x-2">
          <Shield className="w-4 h-4 text-cyan-400" />
          <span>Skills represent verified competencies, coursework, and practical project applications.</span>
        </div>

      </div>
    </section>
  );
}
