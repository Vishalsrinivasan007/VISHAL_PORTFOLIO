import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ThemeMode } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
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
  const activeSectionRef = useRef('hero');
  activeSectionRef.current = activeSection;

  // Lock to avoid jitter during programmatic smooth scrolling when clicking a nav link
  const clickLockTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isClickLockedRef = useRef(false);

  const handleSelectSection = (id: string) => {
    setActiveSection(id);
    isClickLockedRef.current = true;
    if (clickLockTimeoutRef.current) {
      clearTimeout(clickLockTimeoutRef.current);
    }
    clickLockTimeoutRef.current = setTimeout(() => {
      isClickLockedRef.current = false;
    }, 850);
  };

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

  // ScrollSpy to highlight active navigation link accurately
  useEffect(() => {
    const handleScroll = () => {
      if (isClickLockedRef.current) return;

      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // 1. If at the top of the page (Hero section), no nav link is active
      const aboutEl = document.getElementById('about');
      const aboutTop = aboutEl
        ? aboutEl.getBoundingClientRect().top + scrollY
        : 600;

      if (scrollY < aboutTop - 180) {
        if (activeSectionRef.current !== 'hero') {
          setActiveSection('hero');
        }
        return;
      }

      // 2. If scrolled near the bottom of the page, Contact is active
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      if (clientHeight + scrollY >= scrollHeight - 60) {
        if (activeSectionRef.current !== 'contact') {
          setActiveSection('contact');
        }
        return;
      }

      // 3. Sections to track in document order (both desktop and mobile)
      const sectionsToTrack = [
        'about',
        'skills',
        'projects',
        'experience',
        'education',
        'certifications',
        'contact'
      ];

      const navOffset = 180;

      // Find active section by checking backwards from bottom to top
      for (let i = sectionsToTrack.length - 1; i >= 0; i--) {
        const id = sectionsToTrack[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementAbsoluteTop = rect.top + scrollY;

          if (scrollY >= elementAbsoluteTop - navOffset) {
            if (activeSectionRef.current !== id) {
              setActiveSection(id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (clickLockTimeoutRef.current) {
        clearTimeout(clickLockTimeoutRef.current);
      }
    };
  }, []);

  // Scroll Reveal Animations with dynamic observing
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document
        .querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale')
        .forEach((el) => el.classList.add('revealed'));
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
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
      }
    );

    const observeUnrevealed = () => {
      const elements = document.querySelectorAll(
        '.reveal:not(.revealed), .reveal-up:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed), .reveal-scale:not(.revealed)'
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeUnrevealed();

    // Dynamically observe elements rendered later (e.g., filtered skill cards)
    const mutationObserver = new MutationObserver(() => {
      observeUnrevealed();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects onOpenModal={(id) => setActiveModal(id)} />
        <Experience />
        <Education />
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
