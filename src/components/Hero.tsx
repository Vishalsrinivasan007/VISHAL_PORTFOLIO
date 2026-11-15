import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { TechOrbit } from './TechOrbit';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-indicator" />
            <span>{HERO_DATA.status}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{HERO_DATA.name}</span>
          </h1>

          <p className="hero-subtitle">{HERO_DATA.role}</p>

          <p className="hero-description">
            Computer Science graduate specializing in building robust full-stack applications with{' '}
            <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>,{' '}
            <strong>MongoDB</strong>, and <strong>Python</strong>. Focused on clean architecture,
            secure authentication, and sleek, responsive user interfaces.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#projects');
              }}
            >
              <span>Explore Projects</span>
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
            >
              <span>Get In Touch</span>
            </a>

            <button
              onClick={onOpenResume}
              className="btn btn-ghost"
              title="View Resume"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>View Resume</span>
            </button>
          </div>

          {/* Quick Connect & Socials Bar */}
          <div className="hero-social-bar">
            <span className="social-label">Connect:</span>
            <div className="social-links">
              <a
                href={HERO_DATA.socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={HERO_DATA.socials[0].title}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={HERO_DATA.socials[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={HERO_DATA.socials[1].title}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={HERO_DATA.socials[2].href}
                className="social-link"
                title={HERO_DATA.socials[2].title}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>rsvishalgeetha@gmail.com</span>
              </a>

              <a
                href={HERO_DATA.socials[3].href}
                className="social-link"
                title={HERO_DATA.socials[3].title}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 7708800758</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive 3D Tech Orbit & Floating Halo (Option 4) */}
        <TechOrbit />
      </div>
    </section>
  );
};
