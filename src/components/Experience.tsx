import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="timeline-dual-grid">
          {/* Experience Column */}
          <div className="timeline-column reveal-left">
            <div className="column-header">
              <div className="column-icon-badge">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <div>
                <span className="section-tag">Career Journey</span>
                <h2 className="column-title">Work Experience</h2>
              </div>
            </div>

            <div className="timeline">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-card">
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

          {/* Education Column */}
          <div className="timeline-column reveal-right" id="education">
            <div className="column-header">
              <div className="column-icon-badge">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <span className="section-tag">Academic Background</span>
                <h2 className="column-title">Education</h2>
              </div>
            </div>

            <div className="timeline">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <div>
                        <h3 className="role-title">{edu.degree}</h3>
                        <div className="company-name">{edu.institution}</div>
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
      </div>
    </section>
  );
};
