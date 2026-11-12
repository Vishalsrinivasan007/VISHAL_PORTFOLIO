import React, { useState, useRef } from 'react';
import { CONTACT_CARDS_DATA } from '../data/portfolioData';

interface ContactProps {
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    msgSubject: '',
    msgBody: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const subjectInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  // Helper to copy text with toast feedback
  const handleCopy = async (text: string, label: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      onShowToast(`Copied "${text}" to clipboard!`);
    } catch {
      onShowToast(`Failed to copy ${label}`);
    }
  };

  // Auto-capitalization helpers with cursor preservation
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const val = input.value;
    const transformed = val.replace(/(^|\s)([a-z\u00E0-\u00FC])/g, (_, prefix, char) => prefix + char.toUpperCase());

    setFormData((prev) => ({ ...prev, senderName: transformed }));

    requestAnimationFrame(() => {
      if (nameInputRef.current) {
        nameInputRef.current.setSelectionRange(start, end);
      }
    });
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const val = input.value;
    const transformed = val.replace(/^(\s*)([a-z\u00E0-\u00FC])/, (_, p, c) => p + c.toUpperCase());

    setFormData((prev) => ({ ...prev, msgSubject: transformed }));

    requestAnimationFrame(() => {
      if (subjectInputRef.current) {
        subjectInputRef.current.setSelectionRange(start, end);
      }
    });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const val = input.value;

    let transformed = val.replace(/^(\s*)([a-z\u00E0-\u00FC])/, (_, p, c) => p + c.toUpperCase());
    transformed = transformed.replace(/([.!?]\s+)([a-z\u00E0-\u00FC])/g, (_, p, c) => p + c.toUpperCase());
    transformed = transformed.replace(/(\n\s*)([a-z\u00E0-\u00FC])/g, (_, p, c) => p + c.toUpperCase());

    setFormData((prev) => ({ ...prev, msgBody: transformed }));

    requestAnimationFrame(() => {
      if (messageInputRef.current) {
        messageInputRef.current.setSelectionRange(start, end);
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { senderName, senderEmail, msgSubject, msgBody } = formData;

    if (!senderName.trim() || !senderEmail.trim() || !msgBody.trim()) {
      onShowToast('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/rsvishalgeetha@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: senderName.trim(),
          email: senderEmail.trim(),
          _subject: msgSubject.trim() || `Portfolio Inquiry from ${senderName.trim()}`,
          message: msgBody.trim(),
          _template: 'table'
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true)) {
        onShowToast("Message sent! Delivered directly to Vishal's inbox.");
        setFormData({
          senderName: '',
          senderEmail: '',
          msgSubject: '',
          msgBody: ''
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch {
      // Fallback: If network blocks API (adblocker or offline), open mail client fallback
      const mailtoUrl = `mailto:rsvishalgeetha@gmail.com?subject=${encodeURIComponent(
        msgSubject.trim() || `Portfolio Inquiry from ${senderName.trim()}`
      )}&body=${encodeURIComponent(
        `Hi Vishal,\n\n${msgBody.trim()}\n\nFrom: ${senderName.trim()} (${senderEmail.trim()})`
      )}`;

      onShowToast('Opening email client as backup...');
      window.location.href = mailtoUrl;
      setFormData({
        senderName: '',
        senderEmail: '',
        msgSubject: '',
        msgBody: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderContactIcon = (type: string) => {
    switch (type) {
      case 'email':
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        );
      case 'phone':
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        );
      case 'github':
      default:
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        );
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a question or looking to recruit a passionate MERN &amp; Python developer? Reach out anytime!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info Cards */}
          <address className="contact-info-panel reveal-left">
            {CONTACT_CARDS_DATA.map((info, idx) => (
              <div key={idx} className="info-card">
                <div className="info-icon">{renderContactIcon(info.iconType)}</div>
                <div className="info-details">
                  <div className="info-label">{info.label}</div>
                  <a
                    href={info.href}
                    className="info-value"
                    target={info.isExternal ? '_blank' : undefined}
                    rel={info.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {info.value}
                  </a>
                  {info.copyText && (
                    <button
                      type="button"
                      className="copy-text-btn"
                      onClick={() => handleCopy(info.copyText!, info.label)}
                    >
                      {info.iconType === 'email' ? 'Copy Email Address' : 'Copy Phone Number'}
                    </button>
                  )}
                  {info.hint && <span className="info-hint">{info.hint}</span>}
                </div>
              </div>
            ))}
          </address>

          {/* Direct Message Form */}
          <div className="contact-form-panel reveal-right">
            <div className="form-wrapper">
              <h3 className="form-title">Send a Direct Message</h3>
              <p className="form-description">
                Have an opening or project discussion? Fill out the form and I will respond as soon as possible.
              </p>

              <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="senderName" className="form-label">
                      Your Name
                    </label>
                    <input
                      ref={nameInputRef}
                      type="text"
                      id="senderName"
                      name="senderName"
                      className="form-input"
                      placeholder="e.g. Alex Taylor"
                      autoCapitalize="words"
                      value={formData.senderName}
                      onChange={handleNameChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="senderEmail" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="senderEmail"
                      name="senderEmail"
                      className="form-input"
                      placeholder="alex@example.com"
                      autoCapitalize="none"
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="msgSubject" className="form-label">
                    Subject
                  </label>
                  <input
                    ref={subjectInputRef}
                    type="text"
                    id="msgSubject"
                    name="msgSubject"
                    className="form-input"
                    placeholder="Software Engineering Opportunity / Project Discussion"
                    autoCapitalize="sentences"
                    value={formData.msgSubject}
                    onChange={handleSubjectChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="msgBody" className="form-label">
                    Message
                  </label>
                  <textarea
                    ref={messageInputRef}
                    id="msgBody"
                    name="msgBody"
                    rows={5}
                    className="form-input"
                    placeholder="Hello Vishal, we reviewed your MERN stack profile and would like to talk..."
                    autoCapitalize="sentences"
                    value={formData.msgBody}
                    onChange={handleMessageChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                  style={isSubmitting ? { opacity: 0.85 } : undefined}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        style={{ animation: 'spin 0.8s linear infinite' }}
                      >
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
