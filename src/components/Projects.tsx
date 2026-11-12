import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';

interface ProjectsProps {
  onOpenModal: (modalId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenModal }) => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Projects &amp; Architectures</h2>
          <p className="section-subtitle">
            Real-world applications built with the MERN stack and clean coding principles.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS_DATA.map((project, index) => {
            const isEven = index % 2 === 0;
            const revealClass = isEven ? 'reveal-left' : 'reveal-right';
            const cardClasses = `project-card ${project.isHighlight ? 'highlight-card' : ''} ${revealClass}`;

            return (
              <article key={project.id} className={cardClasses}>
                <div className="project-header">
                  <div className="project-type-tag">
                    <span className="badge badge-primary">{project.primaryBadge}</span>
                    <span className={`badge badge-${project.secondaryBadgeType}`}>
                      {project.secondaryBadge}
                    </span>
                  </div>
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      title="View Source Code on GitHub"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <div className="project-features-list">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="feature-bullet">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>
                        <strong>{feat.title}:</strong> {feat.desc}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  {project.hasArchitecture && project.modalId ? (
                    <button
                      className="btn btn-outline btn-sm open-modal-btn"
                      onClick={() => onOpenModal(project.modalId!)}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="15"
                        height="15"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                      <span>View Architecture Details</span>
                    </button>
                  ) : null}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-inline"
                  >
                    <span>
                      {project.hasArchitecture ? 'GitHub Repository' : 'View on GitHub'}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
