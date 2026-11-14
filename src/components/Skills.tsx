import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory } from '../types/portfolio';

const FILTER_TABS: { label: string; value: SkillCategory }[] = [
  { label: 'All Skills', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend & Database', value: 'backend' },
  { label: 'Languages', value: 'languages' },
  { label: 'Tools & DevOps', value: 'tools' }
];

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<SkillCategory>('all');

  const filteredSkills =
    activeFilter === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === activeFilter);

  const renderSkillIcon = (id: string) => {
    switch (id) {
      case 'react':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="2" />
            <path d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9z" strokeDasharray="2 3" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
          </svg>
        );
      case 'node':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 22 8 22 16 12 22 2 16 2 8 12 2" />
            <line x1="12" y1="22" x2="12" y2="12" />
            <line x1="2" y1="8" x2="12" y2="12" />
            <line x1="22" y1="8" x2="12" y2="12" />
          </svg>
        );
      case 'express':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        );
      case 'mongodb':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a9 9 0 0 0-9 9c0 6 9 11 9 11s9-5 9-11a9 9 0 0 0-9-9z" />
            <circle cx="12" cy="11" r="3" />
          </svg>
        );
      case 'javascript':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 16v-6" />
            <path d="M15 16v-4a2 2 0 0 0-2-2h-1" />
          </svg>
        );
      case 'python':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        );
      case 'jwt-bcrypt':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        );
      case 'vite-axios':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        );
      case 'html-css':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3z" />
            <path d="M12 6v12" />
          </svg>
        );
      case 'git-github':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="18" r="3" />
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="6" y1="9" x2="6" y2="15" />
            <path d="M18 15v-1a5 5 0 0 0-5-5H6" />
          </svg>
        );
      case 'postman':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      case 'vscode':
      default:
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
    }
  };

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            A balanced toolkit for developing modern, full-stack web products.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-pills-wrapper reveal-up" role="tablist" aria-label="Skills Filter">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                className={`filter-pill ${isActive ? 'active' : ''}`}
                data-filter={tab.value}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.value)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="skills-grid" id="skillsGrid">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="skill-card reveal-up"
              data-category={skill.category}
              style={{ transitionDelay: `${(index * 0.05).toFixed(2)}s` }}
            >
              <div className="skill-icon-box">{renderSkillIcon(skill.id)}</div>
              <div className="skill-details">
                <div className="skill-head">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level-tag">{skill.level}</span>
                </div>
                <p className="skill-desc">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
