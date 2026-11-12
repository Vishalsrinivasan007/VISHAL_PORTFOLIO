import React, { useEffect } from 'react';
import { ARCHITECTURES_DATA } from '../data/portfolioData';

interface ProjectModalProps {
  modalId: string | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ modalId, onClose }) => {
  const data = modalId ? ARCHITECTURES_DATA[modalId] : null;

  useEffect(() => {
    if (!data) return;

    // Lock body scrolling when modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key
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
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div
      className="modal active"
      id={data.id}
      aria-hidden="false"
      role="dialog"
      aria-labelledby="projectModalTitle"
    >
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <span className={`badge badge-${data.badgeType}`}>{data.badgeText}</span>
              <h3 id="projectModalTitle" className="modal-title">
                {data.title}
              </h3>
            </div>
            <button className="modal-close-btn" aria-label="Close dialog" onClick={onClose}>
              &times;
            </button>
          </div>

          <div className="modal-body">
            <div className="modal-section">
              <h4>Overview &amp; Design Rationale</h4>
              <p>{data.overview}</p>
            </div>

            <div className="modal-section">
              <h4>
                {data.id === 'auth-modal' ? 'Key Architecture Highlights' : 'Key Technical Features'}
              </h4>
              <div className="architecture-grid">
                {data.steps.map((st, idx) => (
                  <div key={idx} className="arch-box">
                    <span className="arch-step">{st.step}</span>
                    <p>{st.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {data.endpoints && (
              <div className="modal-section">
                <h4>API Endpoint Specifications</h4>
                <div className="code-table-wrapper">
                  <table className="code-table">
                    <thead>
                      <tr>
                        <th>Method</th>
                        <th>Endpoint</th>
                        <th>Access</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.endpoints.map((ep, idx) => (
                        <tr key={idx}>
                          <td>
                            <span
                              className={`badge badge-${ep.method === 'POST' ? 'success' : 'info'}`}
                            >
                              {ep.method}
                            </span>
                          </td>
                          <td>
                            <code>{ep.endpoint}</code>
                          </td>
                          <td>{ep.access}</td>
                          <td>{ep.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {data.schemaSnippet && (
              <div className="modal-section">
                <h4>{data.schemaSnippet.title}</h4>
                <pre className="code-snippet">
                  <code>{data.schemaSnippet.code}</code>
                </pre>
              </div>
            )}
          </div>

          <div className="modal-footer">
            <a
              href={data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>Explore on GitHub</span>
            </a>
            <button className="btn btn-ghost btn-sm modal-close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
