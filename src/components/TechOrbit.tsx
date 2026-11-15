import React, { useState } from 'react';

interface TechNode {
  id: string;
  name: string;
  role: string;
  badge: string;
  color: string;
  glowColor: string;
  icon: React.ReactNode;
}

export const TechOrbit: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const techNodes: TechNode[] = [
    {
      id: 'react',
      name: 'React.js',
      role: 'Component Architecture & Hooks',
      badge: 'Core UI',
      color: '#38bdf8',
      glowColor: 'rgba(56, 189, 248, 0.45)',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)" />
        </svg>
      )
    },
    {
      id: 'node',
      name: 'Node & Express',
      role: 'RESTful Endpoints & Middleware',
      badge: 'Backend Engine',
      color: '#22c55e',
      glowColor: 'rgba(34, 197, 94, 0.45)',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 22 8 22 16 12 22 2 16 2 8 12 2" />
          <line x1="12" y1="22" x2="12" y2="12" />
          <line x1="2" y1="8" x2="12" y2="12" />
          <line x1="22" y1="8" x2="12" y2="12" />
        </svg>
      )
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      role: 'Mongoose Schemas & Aggregations',
      badge: 'NoSQL Database',
      color: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.45)',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      )
    },
    {
      id: 'python',
      name: 'Python',
      role: 'Algorithms, Scripting & OOP',
      badge: 'Core Language',
      color: '#60a5fa',
      glowColor: 'rgba(96, 165, 250, 0.45)',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      id: 'security',
      name: 'Secure Auth',
      role: 'JWT, Bcrypt & Protected Routes',
      badge: 'Security-First',
      color: '#818cf8',
      glowColor: 'rgba(129, 140, 248, 0.45)',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      id: 'experience',
      name: '6+ Mos Hands-On',
      role: 'Full-Stack Internship at Nucaza',
      badge: 'Production Experience',
      color: '#c084fc',
      glowColor: 'rgba(192, 132, 252, 0.45)',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    }
  ];

  const currentNode = techNodes.find((n) => n.id === activeNode);

  return (
    <div className="orbit-stage reveal-scale">
      {/* Background Cosmic Atmosphere */}
      <div className="orbit-ambient-glow" />
      <div className="orbit-ambient-core" />

      {/* 3D Elliptical Orbit Rings */}
      <div className="orbit-system">
        <div className="orbit-ring ring-outer">
          <div className="ring-sparkle sparkle-1" />
          <div className="ring-sparkle sparkle-2" />
        </div>
        <div className="orbit-ring ring-middle">
          <div className="ring-sparkle sparkle-3" />
        </div>
        <div className="orbit-ring ring-inner" />

        {/* Central Geometric Core */}
        <div className="orbit-core" tabIndex={0} aria-label="Developer System Core">
          <div className="core-glass">
            <div className="core-emblem">VS</div>
            <div className="core-pulse" />
            <div className="core-live-status">
              <span className="live-dot" />
              <span>Full-Stack Core</span>
            </div>
          </div>
        </div>

        {/* Orbiting Satellite Tech Badges */}
        <div className="orbit-satellites">
          {techNodes.map((node, index) => {
            const isHovered = activeNode === node.id;
            return (
              <div
                key={node.id}
                className={`satellite-node node-${index + 1} ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                style={
                  {
                    '--node-color': node.color,
                    '--node-glow': node.glowColor
                  } as React.CSSProperties
                }
              >
                <div className="satellite-pill">
                  <div className="satellite-icon-box">{node.icon}</div>
                  <div className="satellite-text">
                    <span className="satellite-title">{node.name}</span>
                    <span className="satellite-tag">{node.badge}</span>
                  </div>
                </div>

                {/* Satellite Micro Halo Glow */}
                <div className="satellite-halo" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Detail Card HUD (displays hovered skill specs) */}
      <div className={`orbit-hud-panel ${currentNode ? 'visible' : ''}`}>
        {currentNode ? (
          <div className="hud-content">
            <div className="hud-header">
              <span className="hud-badge" style={{ color: currentNode.color }}>
                {currentNode.badge}
              </span>
              <span className="hud-name">{currentNode.name}</span>
            </div>
            <p className="hud-desc">{currentNode.role}</p>
          </div>
        ) : (
          <div className="hud-content default-hud">
            <span className="hud-hint">
              <span className="hud-hint-pulse" />
              Hover or tap any planetary node to explore capabilities
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
