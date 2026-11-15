import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic degrees and foundational computer science studies.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline timeline-education reveal-up">
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker marker-education" />
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="role-title">{edu.degree}</h3>
                      <div className="company-name text-cyan">{edu.institution}</div>
                    </div>
                    <span className="timeline-date">
                      <time dateTime={edu.startDateTime}>{edu.startDate}</time> &ndash;{' '}
                      <time dateTime={edu.endDateTime}>{edu.endDate}</time>
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
                    <span>{edu.location}</span>
                  </div>

                  {edu.cgpa && (
                    <div className="grade-badge">
                      <span>
                        CGPA: <strong>{edu.cgpa}</strong>
                      </span>
                    </div>
                  )}

                  <p className="timeline-desc">{edu.description}</p>

                  <div className="timeline-techs">
                    {edu.techs.map((tech) => (
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
