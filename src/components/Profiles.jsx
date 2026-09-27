import React from 'react';
import { Terminal, Globe, ExternalLink, Sparkles, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon, HackerRankIcon } from './Icons';
import { CODING_PROFILES } from '../data/portfolioData';
import { useTilt3D } from '../hooks/useTilt3D';
import { soundFx } from '../utils/sound';

function ProfileCard({ profile }) {
  const [copied, setCopied] = React.useState(false);
  const tilt = useTilt3D(8, 1.03);

  const copyUsername = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(profile.username);
    setCopied(true);
    soundFx.playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = (iconName) => {
    if (iconName === 'Github') return <GithubIcon className="w-6 h-6" />;
    if (iconName === 'Linkedin') return <LinkedinIcon className="w-6 h-6" />;
    return <HackerRankIcon className="w-6 h-6" />;
  };

  return (
    <div
      ref={tilt.ref}
      style={tilt.style}
      {...tilt.props}
      onMouseEnter={() => soundFx.playHover()}
      className="glass-panel p-6 sm:p-7 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/60 shadow-xl relative overflow-hidden group flex flex-col justify-between transition-all duration-300"
    >
      {/* Specular glare */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl"
        style={{
          background: `radial-gradient(circle at ${tilt.glare.x}% ${tilt.glare.y}%, rgba(56,189,248,${tilt.glare.opacity * 1.5}), transparent 60%)`
        }}
      />

      <div>
        <div className="flex items-center justify-between mb-5">
          <div
            className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform"
            style={{ color: profile.color }}
          >
            {getIcon(profile.icon)}
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            {profile.badge}
          </span>
        </div>

        <h3 className="font-display font-bold text-2xl text-white mb-1 group-hover:text-cyan-300 transition-colors">
          {profile.name}
        </h3>

        <div className="flex items-center space-x-2 mb-3">
          <code className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
            {profile.handle}
          </code>
          <button
            onClick={copyUsername}
            title="Copy username"
            className="p-1 rounded text-slate-400 hover:text-cyan-300 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mb-6">
          {profile.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
        <a
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundFx.playClick()}
          className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-slate-200 hover:text-cyan-300 transition-colors"
        >
          <span>Open Profile</span>
          <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          VERIFIED IDENTITY
        </span>
      </div>
    </div>
  );
}

export default function Profiles() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>DEVELOPER PRESENCE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Find Me Online
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Connect across my verified coding repositories, professional network, and algorithmic platforms.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CODING_PROFILES.map((profile, idx) => (
            <ProfileCard key={idx} profile={profile} />
          ))}
        </div>

      </div>
    </section>
  );
}
