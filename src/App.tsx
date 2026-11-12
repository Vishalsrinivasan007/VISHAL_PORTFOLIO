import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ThemeMode } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { BackToTop } from './components/BackToTop';
import { Toast } from './components/Toast';

export const App: React.FC = () => {
  // Theme State
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Modal States
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Active Section for Navbar ScrollSpy
  const [activeSection, setActiveSection] = useState('hero');

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);

    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    toastTimeoutRef.current = setTimeout(() => {
      setIsToastVisible(false);
    }, 3200);
  }, []);

  // Sync theme with DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    showToast(`Switched to ${newTheme} mode`);
  };

  // ScrollSpy to highlight active navigation link
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'skills',
      'projects',
      'experience',
      'education',
      'certifications',
      'contact'
    ];

    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 140;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Reveal Animations
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale'
    );

    if (!revealElements.length) return;

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -45px 0px',
        threshold: 0.12
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects onOpenModal={(id) => setActiveModal(id)} />
        <Experience />
        <Certifications />
        <Contact onShowToast={showToast} />
      </main>

      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Project Architecture Modal */}
      <ProjectModal modalId={activeModal} onClose={() => setActiveModal(null)} />

      {/* ATS-Friendly Printable & Downloadable Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Toast Alert */}
      <Toast message={toastMessage} isVisible={isToastVisible} />
    </>
  );
};
