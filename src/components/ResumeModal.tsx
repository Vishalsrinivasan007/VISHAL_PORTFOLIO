import React, { useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal active"
      id="resume-modal"
      aria-hidden="false"
      role="dialog"
      aria-labelledby="resumeModalTitle"
      style={{ zIndex: 1100 }}
    >
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-dialog" style={{ maxWidth: '900px', width: '95%', maxHeight: '92vh' }}>
        <div className="modal-content" style={{ display: 'flex', flexDirection: 'column', maxHeight: '92vh' }}>
          {/* Modal Bar with Download & Print Actions */}
          <div
            className="modal-header"
            style={{
              padding: '16px 24px',
              borderBottom: '1px solid var(--border-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div>
              <span className="badge badge-primary">Executive Resume</span>
              <h3 id="resumeModalTitle" className="modal-title" style={{ fontSize: '1.25rem', margin: 0 }}>
                Vishal Srinivasan
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Direct 1-Click Instant Download Button */}
              <a
                href="/Vishal_Srinivasan_Resume.pdf"
                download="Vishal_Srinivasan_Resume.pdf"
                className="btn btn-primary btn-sm"
                title="Instantly download resume as PDF"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download PDF</span>
              </a>

              {/* Open in full page view / print */}
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                title="Open standalone printable page"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
                <span>Full Page / Print</span>
              </a>

              <button className="modal-close-btn" aria-label="Close resume" onClick={onClose}>
                &times;
              </button>
            </div>
          </div>

          {/* Scrollable Document Body */}
          <div
            className="modal-body"
            style={{
              padding: '24px 32px',
              overflowY: 'auto',
              backgroundColor: 'var(--bg-paper, var(--bg-card))',
              color: 'var(--text-primary)',
              lineHeight: 1.6
            }}
          >
            {/* Resume Header */}
            <header style={{ borderBottom: '2px solid var(--border-card)', paddingBottom: '16px', marginBottom: '20px' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                Vishal Srinivasan
              </h1>
              <address
                style={{
                  fontStyle: 'normal',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <span>
                  <strong>Email: </strong>
                  <a href="mailto:rsvishalgeetha@gmail.com" className="text-accent hover:underline">
                    rsvishalgeetha@gmail.com
                  </a>
                </span>
                <span>
                  <strong>Mobile: </strong>
                  <a href="tel:+917708800758" className="text-accent hover:underline">
                    +91 7708800758
                  </a>
                </span>
                <span>
                  <strong>LinkedIn: </strong>
                  <a
                    href="https://www.linkedin.com/in/vishal-srinivasan-78654326a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEjPAzQmvSXaMb7J1%2Fb5L3Q%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    linkedin.com/in/r-s-vishal-srinivasan
                  </a>
                </span>
                <span>
                  <strong>GitHub: </strong>
                  <a
                    href="https://github.com/Vishalsrinivasan007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    github.com/Vishalsrinivasan007
                  </a>
                </span>
              </address>
            </header>

            {/* Professional Summary */}
            <section style={{ marginBottom: '22px' }}>
              <h2
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderBottom: '1px solid var(--border-card)',
                  paddingBottom: '4px',
                  marginBottom: '10px'
                }}
              >
                Professional Summary
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                Motivated Computer Science graduate with strong fundamentals in MERN stack development and Python. Skilled
                in building full-stack web applications using modern JavaScript frameworks. Eager to contribute to a dynamic
                development team and grow in a fast-paced tech environment.
              </p>
            </section>

            {/* Technical Skills */}
            <section style={{ marginBottom: '22px' }}>
              <h2
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderBottom: '1px solid var(--border-card)',
                  paddingBottom: '4px',
                  marginBottom: '10px'
                }}
              >
                Programming &amp; Technical Skills
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem' }}>
                <div>
                  <strong>Languages: </strong>
                  <span style={{ color: 'var(--text-secondary)' }}>JavaScript (ES6+), Python, HTML5, CSS3</span>
                </div>
                <div>
                  <strong>Frontend: </strong>
                  <span style={{ color: 'var(--text-secondary)' }}>React.js, Vite, Axios, Responsive Web Design</span>
                </div>
                <div>
                  <strong>Backend: </strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Node.js, Express.js, REST APIs, JWT Authentication, Bcrypt</span>
                </div>
                <div>
                  <strong>Database: </strong>
                  <span style={{ color: 'var(--text-secondary)' }}>MongoDB, Mongoose ODM</span>
                </div>
                <div>
                  <strong>Tools &amp; Platforms: </strong>
                  <span style={{ color: 'var(--text-secondary)' }}>Git, GitHub, VS Code, Postman</span>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section style={{ marginBottom: '22px' }}>
              <h2
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderBottom: '1px solid var(--border-card)',
                  paddingBottom: '4px',
                  marginBottom: '12px'
                }}
              >
                Key Technical Projects
              </h2>

              <div style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>MERN-Authentication System</span>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>MongoDB, Express, React, Node.js, JWT, Bcrypt</span>
                </div>
                <ul style={{ paddingLeft: '20px', marginTop: '6px', listStyleType: 'disc', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <li>Implemented JWT-based authentication featuring secure signup, login, and token validation functionality.</li>
                  <li>Used bcrypt for salted cryptographic password hashing and developed custom Express middleware for protected route security.</li>
                  <li>Synchronized client-side authentication states in React with protected routes and error feedback.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Full-Stack Notes Application</span>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>React.js, Node.js, Express.js, MongoDB, Axios</span>
                </div>
                <ul style={{ paddingLeft: '20px', marginTop: '6px', listStyleType: 'disc', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <li>Built a full-stack Notes App with complete CRUD features to add, view, edit, delete, and search notes.</li>
                  <li>Designed a responsive, modular UI in React to display notes dynamically with real-time title search filtering.</li>
                  <li>Connected client-side interactions to a Node.js/Express REST API backed by MongoDB persistence.</li>
                </ul>
              </div>
            </section>

            {/* Experience */}
            <section style={{ marginBottom: '22px' }}>
              <h2
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderBottom: '1px solid var(--border-card)',
                  paddingBottom: '4px',
                  marginBottom: '10px'
                }}
              >
                Professional Experience
              </h2>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                  <div>
                    <span style={{ fontWeight: 700 }}>Python Programming Intern</span> &mdash;{' '}
                    <span style={{ color: 'var(--text-secondary)' }}>Livewire Training Services Pvt, Ltd</span>
                  </div>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    <time dateTime="2023-06">Jun 2023</time> &ndash; <time dateTime="2023-07">Jul 2023</time>
                  </span>
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Tiruchengode, India</div>
                <ul style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <li>Completed intensive Python internship focusing on foundational programming, basic concepts, and data structures.</li>
                  <li>Covered comprehensive Python syntax, Object-Oriented Programming (OOP) paradigms, error handling, and modular scripting.</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section style={{ marginBottom: '22px' }}>
              <h2
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderBottom: '1px solid var(--border-card)',
                  paddingBottom: '4px',
                  marginBottom: '10px'
                }}
              >
                Education
              </h2>

              <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                  <div>
                    <span style={{ fontWeight: 700 }}>Master of Computer Applications (MCA)</span> &mdash;{' '}
                    <span style={{ color: 'var(--text-secondary)' }}>Bharathiar University</span>
                  </div>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    <time dateTime="2026-07">July 2026</time> &ndash; <time dateTime="2028-07">July 2028</time>
                  </span>
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>Coimbatore, Tamil Nadu</div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '4px' }}>
                  <div>
                    <span style={{ fontWeight: 700 }}>Bachelor of Computer Science (B.Sc CS)</span> &mdash;{' '}
                    <span style={{ color: 'var(--text-secondary)' }}>Sengunthar Arts and Science College</span>
                  </div>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    <time dateTime="2021-10">Oct 2021</time> &ndash; <time dateTime="2024-04">April 2024</time>
                  </span>
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  Namakkal, Tamil Nadu &bull; <strong>CGPA: 7.587 / 10</strong>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  borderBottom: '1px solid var(--border-card)',
                  paddingBottom: '4px',
                  marginBottom: '10px'
                }}
              >
                Certifications &amp; Workshops
              </h2>

              <div style={{ marginBottom: '8px' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>
                  MERN Stack Development Certification (6 Months) &mdash;{' '}
                  <span style={{ fontWeight: 400, color: 'var(--text-secondary)' }}>Nucaza Innovations Pvt. Ltd.</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Covered MongoDB, React, Node.js, and Express.js through hands-on full-stack development and projects.
                </p>
              </div>

              <div style={{ marginBottom: '8px' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>
                  Artificial Intelligence Workshop (1 Month) &mdash;{' '}
                  <span style={{ fontWeight: 400, color: 'var(--text-secondary)' }}>Novitech</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Covered AI fundamentals, core algorithms, and real-world technology applications.
                </p>
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>
                  Python Programming Workshop &mdash;{' '}
                  <span style={{ fontWeight: 400, color: 'var(--text-secondary)' }}>Besant Technologies</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Covered Python syntax, core data types, conditional loops, functions, and hands-on coding exercises.
                </p>
              </div>
            </section>
          </div>

          <div className="modal-footer" style={{ padding: '12px 24px' }}>
            <button className="btn btn-ghost btn-sm modal-close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
