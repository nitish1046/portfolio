import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, HackerRankIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/sound';

export default function Footer() {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-cyber-darker border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-cyber-black rounded-[6.5px] flex items-center justify-center">
                  <span className="font-cyber font-black text-cyan-400 text-sm">N</span>
                </div>
              </div>
              <span className="font-cyber font-bold text-xl text-white tracking-wider">
                NITISH<span className="text-purple-400">//</span>X
              </span>
            </div>

            <p className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase font-semibold">
              {PERSONAL_INFO.tagline}
            </p>

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Designed with curiosity. Built with code. Always evolving.
            </p>

            <div className="text-xs font-mono text-slate-500">
              Jaipur, India • B.Tech Computer Science &amp; Engineering
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-300 font-semibold tracking-wider uppercase block mb-3 text-[11px]">
                Navigation
              </span>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#education" className="hover:text-cyan-400 transition-colors">Education</a></li>
                <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
              </ul>
            </div>
            <div>
              <span className="text-slate-300 font-semibold tracking-wider uppercase block mb-3 text-[11px]">
                Explore
              </span>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
                <li><a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievements</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                <li><a href="/resume.pdf" download="Nitish_Resume.pdf" className="hover:text-cyan-400 transition-colors">Resume</a></li>
              </ul>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end space-y-4">
            <span className="text-slate-300 font-semibold tracking-wider uppercase text-[11px] font-mono">
              Coordinates
            </span>

            <div className="flex items-center space-x-3">
              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.contact.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerRank"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
              >
                <HackerRankIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-2 inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-mono text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>
            &copy; 2026 Nitish. All rights reserved.
          </p>
          <p className="flex items-center space-x-1">
            <span>Powered by React, Three.js &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
