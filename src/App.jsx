// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Learning from './components/Learning';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Profiles from './components/Profiles';
import Resume from './components/Resume';
import ResumeModal from './components/ResumeModal';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundFX from './components/BackgroundFX';
import LoadingScreen from './components/LoadingScreen';
import { useScrollSpy } from './hooks/useScrollSpy';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Sections list for scrollspy
  const sectionIds = ['hero', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 150);

  // Top scroll progress bar
  useEffect(() => {
    const updateScrollProgress = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (totalScroll / (windowHeight || 1)) * 100;
      
      const bar = document.getElementById('scroll-progress-bar');
      if (bar) {
        bar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="relative min-h-screen bg-cyber-black text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Short Cinematic Initializing Screen */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Futuristic Custom Desktop Cursor */}
      <CustomCursor />

      {/* Cybernetic Animated Background Mesh, Particles, and Ambient Grid */}
      <BackgroundFX />

      {/* Fixed Modern Glassmorphic Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* 2. Intro / About Section: Who Am I? */}
        <About />

        {/* 3. Education Timeline */}
        <Education />

        {/* 4. Technical Arsenal */}
        <Skills />

        {/* 5. Currently Exploring Stream */}
        <Learning />

        {/* 6. Things I've Built (Projects) */}
        <Projects />

        {/* 7. Achievements & Certifications */}
        <Achievements />

        {/* 8. Find Me Online (Profiles) */}
        <Profiles />

        {/* 9. Resume CTA */}
        <Resume onOpenResume={() => setResumeModalOpen(true)} />

        {/* 10. Beyond Code (Hobbies & Interests) */}
        <Hobbies />

        {/* 11. Let's Build Something Together (Contact) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Previewer Modal */}
      {resumeModalOpen && (
        <ResumeModal onClose={() => setResumeModalOpen(false)} />
      )}
    </div>
  );
}
