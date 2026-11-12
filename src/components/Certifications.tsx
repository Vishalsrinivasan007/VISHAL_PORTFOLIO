import React from 'react';
import { CREDENTIALS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">Continuous Learning</span>
          <h2 className="section-title">Certifications &amp; Workshops</h2>
          <p className="section-subtitle">
            Dedicated training programs that shaped my engineering foundation.
          </p>
        </div>

        <div className="credentials-grid">
          {CREDENTIALS_DATA.map((cred, idx) => {
            const staggerClass = `stagger-${idx + 1}`;
            const cardClasses = `credential-card ${cred.isHighlight ? 'highlight-credential' : ''} reveal-up ${staggerClass}`;

            return (
              <div key={idx} className={cardClasses}>
                <div
                  className={`credential-icon ${
                    cred.type === 'cert' ? 'cert-icon' : 'workshop-icon'
                  }`}
                >
                  {cred.type === 'cert' ? (
                    <svg
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    >
                      <circle cx="12" cy="8" r="7" />
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                    </svg>
                  ) : idx === 1 ? (
                    <svg
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    >
                      <polyline points="4 17 10 11 4 5" />
                      <line x1="12" y1="19" x2="20" y2="19" />
                    </svg>
                  )}
                </div>

                <div className="credential-body">
                  <span
                    className={`credential-badge ${
                      cred.badgeVariant === 'neutral' ? 'badge-neutral' : ''
                    }`}
                  >
                    {cred.badgeText}
                  </span>
                  <h3 className="credential-title">{cred.title}</h3>
                  <div className="credential-issuer">{cred.issuer}</div>
                  <p className="credential-desc">{cred.description}</p>
                  <div className="credential-tags">
                    {cred.tags.map((tag) => (
                      <span key={tag} className="chip-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
