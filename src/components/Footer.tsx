import React from 'react';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="brand-monogram">VS</span>
          <div>
            <span className="footer-title">Vishal Srinivasan</span>
            <p className="footer-subtitle">Full-Stack MERN &amp; Python Developer</p>
          </div>
        </div>

        <div className="footer-nav">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#hero');
            }}
          >
            Back to Top
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#projects');
            }}
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#skills');
            }}
          >
            Skills
          </a>
          <button
            type="button"
            onClick={onOpenResume}
            className="hover:underline cursor-pointer"
            style={{ color: 'inherit', font: 'inherit', padding: 0 }}
          >
            Resume
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#contact');
            }}
          >
            Contact
          </a>
        </div>

        <div className="footer-copyright">
          &copy; <time dateTime={String(currentYear)} id="currentYear">{currentYear}</time> Vishal Srinivasan. Designed with clean, modern code.
        </div>
      </div>
    </footer>
  );
};
