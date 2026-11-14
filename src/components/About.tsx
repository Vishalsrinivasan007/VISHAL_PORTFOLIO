import React from 'react';
import { ABOUT_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">{ABOUT_DATA.tag}</span>
          <h2 className="section-title">{ABOUT_DATA.title}</h2>
          <p className="section-subtitle">{ABOUT_DATA.subtitle}</p>
        </div>

        <div className="about-grid">
          <div className="about-text-column reveal-left">
            <div className="rich-card highlight-border">
              <h3 className="card-heading">{ABOUT_DATA.philosophyTitle}</h3>
              <p className="text-secondary">
                I am a motivated Computer Science graduate with strong fundamentals in{' '}
                <strong>MERN stack development</strong> and <strong>Python</strong>. My development
                journey centers around writing clean, maintainable code, architecting reliable RESTful
                APIs, and crafting intuitive user interfaces.
              </p>
              <p className="text-secondary">
                During my 6-month hands-on MERN stack development program with{' '}
                <strong>Nucaza Innovations</strong>, I built full-stack applications from
                scratch—handling MongoDB schemas, Express middleware, secure JWT authentication with
                bcrypt, and component-driven React frontends.
              </p>
              <p className="text-secondary">
                I am eager to contribute to a collaborative, high-performance engineering team, apply
                best practices, and continuously scale my technical abilities in a fast-paced
                environment.
              </p>

              <div className="card-chips">
                {ABOUT_DATA.chips.map((chip) => (
                  <span key={chip} className="chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-highlights-column">
            <div className="feature-box reveal-right" style={{ transitionDelay: '0.08s' }}>
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 7h-7" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
              </div>
              <div className="feature-body">
                <h4>{ABOUT_DATA.features[0].title}</h4>
                <p>{ABOUT_DATA.features[0].description}</p>
              </div>
            </div>

            <div className="feature-box reveal-right" style={{ transitionDelay: '0.18s' }}>
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="feature-body">
                <h4>{ABOUT_DATA.features[1].title}</h4>
                <p>{ABOUT_DATA.features[1].description}</p>
              </div>
            </div>

            <div className="feature-box reveal-right" style={{ transitionDelay: '0.28s' }}>
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
              </div>
              <div className="feature-body">
                <h4>{ABOUT_DATA.features[2].title}</h4>
                <p>{ABOUT_DATA.features[2].description}</p>
              </div>
            </div>

            <div className="feature-box reveal-right" style={{ transitionDelay: '0.38s' }}>
              <div className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
              </div>
              <div className="feature-body">
                <h4>{ABOUT_DATA.features[3].title}</h4>
                <p>{ABOUT_DATA.features[3].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
