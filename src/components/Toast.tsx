import React from 'react';

interface ToastProps {
  message: string | null;
  isVisible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  return (
    <div id="toast" className={`toast ${isVisible ? 'show' : ''}`} role="alert" aria-live="polite">
      <div className="toast-icon">
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span id="toastMsg" className="toast-message">
        {message || 'Copied to clipboard!'}
      </span>
    </div>
  );
};
