import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Hands-on practical training applying software engineering principles in production-like workflows.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline timeline-experience reveal-up">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker marker-experience" />
                <div className="timeline-card highlight-card-subtle">
                  <div className="timeline-header">
                    <div>
                      <h3 className="role-title">{exp.role}</h3>
                      <div className="company-name">{exp.company}</div>
                    </div>
                    <span className="timeline-date">
                      <time dateTime={exp.startDateTime}>{exp.startDate}</time> &ndash;{' '}
                      <time dateTime={exp.endDateTime}>{exp.endDate}</time>
                    </span>
                  </div>

                  <div className="location-tag">
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{exp.location}</span>
                  </div>

                  <ul className="timeline-points">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>

                  <div className="timeline-techs">
                    {exp.techs.map((tech) => (
                      <span key={tech} className="chip-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
