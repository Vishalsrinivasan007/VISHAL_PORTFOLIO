import React, { useState, useEffect, useRef } from 'react';
import { ThemeMode } from '../types/portfolio';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  activeSection: string;
  onOpenResume?: () => void;
}

const NAV_ITEMS = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#education', label: 'Education', id: 'education' },
  { href: '#certifications', label: 'Certifications', id: 'certifications' },
  { href: '#contact', label: 'Contact', id: 'contact' }
];

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  activeSection,
  onOpenResume
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-container">
      <nav ref={navRef} className="navbar" id="navbar" aria-label="Main Navigation">
        <a
          href="#hero"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
        >
          <span className="brand-monogram">VS</span>
          <span className="brand-name">
            Vishal<span className="brand-dot">.</span>
          </span>
        </a>

        <div className={`nav-links-wrapper ${mobileMenuOpen ? 'open' : ''}`} id="navLinksWrapper">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav-actions">
          {/* Theme Toggle Button */}
          <button
            id="themeToggle"
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            onClick={onToggleTheme}
          >
            <svg
              className="sun-icon"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg
              className="moon-icon"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          {/* Resume Action */}
          <button
            onClick={onOpenResume}
            className="btn btn-outline btn-sm nav-resume-btn"
            title="View Resume"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobileMenuBtn"
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </nav>
    </header>
  );
};
