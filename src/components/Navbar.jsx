// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/sound';

export default function Navbar({ activeSection, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-panel border-b border-cyan-500/20 bg-cyber-darker/85 shadow-lg shadow-black/50 py-3 backdrop-blur-xl'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="group flex items-center space-x-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-cyber-black rounded-[6.5px] flex items-center justify-center">
                <span className="font-cyber font-black text-cyan-400 text-sm group-hover:text-cyan-300">
                  N
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-cyber font-bold tracking-wider text-base sm:text-lg text-slate-100 flex items-center">
                NITISH<span className="text-purple-400 font-black group-hover:text-cyan-400 transition-colors">//</span>X
              </span>
              <span className="text-[9px] font-mono text-cyan-400/80 -mt-1 tracking-widest uppercase">
                ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 glass-panel px-4 py-1.5 rounded-full border border-cyan-500/15 bg-cyber-dark/40 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-300 font-semibold bg-cyan-500/10 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              aria-label={isMuted ? "Unmute subtle audio feedback" : "Mute audio feedback"}
              title={isMuted ? "Subtle UI Sound (Off)" : "Subtle UI Sound (On)"}
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 glass-panel border border-cyan-500/20 hover:border-cyan-400/40 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Let's Connect CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.03] transition-all duration-300"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white glass-panel border border-cyan-500/20"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar at very top */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-transparent">
          <div
            id="scroll-progress-bar"
            className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 w-0 transition-all duration-75"
          />
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-30 md:hidden bg-cyber-black/95 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-center px-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-4 max-w-sm mx-auto w-full">
          <div className="pb-4 border-b border-cyan-500/20 text-center">
            <span className="font-cyber font-bold text-xl text-white">
              NITISH<span className="text-purple-400">//</span>X
            </span>
            <p className="text-xs font-mono text-cyan-400 mt-1">BUILD • THINK • CREATE</p>
          </div>

          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`py-3 px-4 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
              </a>
            );
          })}

          <div className="pt-4 border-t border-cyan-500/20 flex flex-col space-y-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full text-center py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
