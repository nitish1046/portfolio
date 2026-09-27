import React, { useState } from 'react';
import { 
  Send, Mail, Copy, Check, Sparkles, MessageSquare, 
  ArrowUpRight, ShieldCheck, Terminal 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTilt3D } from '../hooks/useTilt3D';
import { soundFx } from '../utils/sound';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const tilt = useTilt3D(4, 1.01);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopiedEmail(true);
    soundFx.playSuccess();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.playSuccess();
    setSubmitted(true);

    // Confetti celebration
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#00d2ff', '#a855f7', '#38bdf8']
      });
    } catch {
      // Confetti fallback
    }

    // Prepare direct mailto link
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name} via Portfolio`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${PERSONAL_INFO.contact.email}?subject=${subject}&body=${body}`;

    // Provide user with a direct mail client launch
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>TRANSMISSION &amp; COLLABORATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Together<span className="text-purple-400">.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Have an idea, project, collaboration, or opportunity? Let's connect.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Grid: Contact Information & Functional Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Email Card with One-Click Copy */}
            <div className="glass-panel p-6 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/50 shadow-xl transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 flex items-center space-x-1.5 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                Direct Electronic Mail
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="font-mono text-sm sm:text-base text-white hover:text-cyan-300 transition-colors font-medium break-all"
              >
                {PERSONAL_INFO.contact.email}
              </a>
            </div>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              className="glass-panel p-6 rounded-3xl border border-sky-500/20 hover:border-sky-400/50 shadow-xl transition-all duration-300 group flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">
                    LinkedIn Network
                  </span>
                  <span className="font-mono text-sm text-white font-medium group-hover:text-sky-300 transition-colors">
                    linkedin.com/in/nitish1046
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              className="glass-panel p-6 rounded-3xl border border-purple-500/20 hover:border-purple-400/50 shadow-xl transition-all duration-300 group flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">
                    GitHub Codebases
                  </span>
                  <span className="font-mono text-sm text-white font-medium group-hover:text-purple-300 transition-colors">
                    github.com/nitish1046
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Location & Status Card */}
            <div className="p-4 rounded-2xl bg-cyber-dark/60 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>LOCATION: Jaipur, Rajasthan</span>
              <span className="text-emerald-400 font-semibold flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ONLINE // READY</span>
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div
              ref={tilt.ref}
              style={tilt.style}
              {...tilt.props}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/25 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <h3 className="font-display font-bold text-lg text-white flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  PORTAL // ACTIVE
                </span>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">
                    Transmission Prepared!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Opening your default mail client with your message to <strong>{PERSONAL_INFO.contact.email}</strong>. You can also send directly from your email app anytime.
                  </p>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-mono text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="contact-name">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Vance"
                        className="w-full px-4 py-3 rounded-xl bg-cyber-dark/80 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 text-sm placeholder-slate-500 transition-colors focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="contact-email">
                        Your Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-cyber-dark/80 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 text-sm placeholder-slate-500 transition-colors focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="contact-subject">
                      Subject / Topic
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Inquiry / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-cyber-dark/80 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 text-sm placeholder-slate-500 transition-colors focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5" htmlFor="contact-message">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Nitish, I came across your portfolio and wanted to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-cyber-dark/80 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 text-sm placeholder-slate-500 transition-colors focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      onMouseEnter={() => soundFx.playHover()}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold font-mono text-xs sm:text-sm tracking-wider bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-slate-500 text-center pt-2">
                    Structured to launch a direct mail transmission to Nitish's verified inbox.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
