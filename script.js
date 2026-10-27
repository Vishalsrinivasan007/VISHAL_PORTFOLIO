/**
 * Vishal Srinivasan - Portfolio Interactive Logic
 * Clean, lightweight, modular JavaScript without external heavy dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initScrollSpy();
  initSkillFilters();
  initModals();
  initCopyButtons();
  initContactForm();
  updateFooterYear();
  initScrollReveal();
  initLazyLoading();
  initInputAutoCapitalization();
});

/* ==========================================================================
   1. Theme Toggle (Dark & Light Mode with LocalStorage)
   ========================================================================== */
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  // Check saved preference or default to dark
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  } else {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }
}

/* ==========================================================================
   2. Mobile Navigation Menu
   ========================================================================== */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinksWrapper = document.getElementById('navLinksWrapper');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!mobileMenuBtn || !navLinksWrapper) return;

  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navLinksWrapper.classList.toggle('open');
    mobileMenuBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksWrapper.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinksWrapper.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      navLinksWrapper.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ==========================================================================
   3. ScrollSpy & Sticky Navbar Active State
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavigation, { passive: true });
  highlightNavigation();
}

/* ==========================================================================
   4. Skills Filter Pills
   ========================================================================== */
function initSkillFilters() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const skillCards = document.querySelectorAll('.skill-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Update active state
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');

      const filterValue = pill.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. Interactive Project Modals
   ========================================================================== */
function initModals() {
  const openButtons = document.querySelectorAll('.open-modal-btn');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.modal-close-btn');

  function openModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (!targetModal) return;

    targetModal.classList.add('active');
    targetModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) closeModal(modal);
    });
  });

  // Close when clicking modal backdrop
  modals.forEach(modal => {
    const backdrop = modal.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => closeModal(modal));
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('active')) {
          closeModal(modal);
        }
      });
    }
  });
}

/* ==========================================================================
   6. Copy to Clipboard with Toast Notification
   ========================================================================== */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('[data-copy]');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');

      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback for non-https or older browsers
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }

        showToast(`Copied "${textToCopy}" to clipboard!`);
      } catch (err) {
        showToast('Unable to copy automatically');
      }
    });
  });
}

/* ==========================================================================
   Toast Notification Helper
   ========================================================================== */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');

  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ==========================================================================
   7. Contact Form Handler (Direct Delivery to rsvishalgeetha@gmail.com)
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '<span>Send Message</span>';

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const subject = document.getElementById('msgSubject').value.trim();
    const message = document.getElementById('msgBody').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.');
      return;
    }

    // Set sending loading state on button
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.85';
      submitBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" style="animation: spin 0.8s linear infinite;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
        <span>Sending Message...</span>
      `;
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/rsvishalgeetha@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: subject || `Portfolio Inquiry from ${name}`,
          message: message,
          _template: 'table'
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true)) {
        showToast("Message sent! Delivered directly to Vishal's inbox.");
        contactForm.reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      // Fallback: If network blocks API (e.g. adblocker or offline), open mail client fallback
      const mailtoUrl = `mailto:rsvishalgeetha@gmail.com?subject=${encodeURIComponent(
        subject || `Portfolio Inquiry from ${name}`
      )}&body=${encodeURIComponent(
        `Hi Vishal,\n\n${message}\n\nFrom: ${name} (${email})`
      )}`;

      showToast('Opening email client as backup...');
      window.location.href = mailtoUrl;
      contactForm.reset();
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.innerHTML = originalBtnHtml;
      }
    }
  });
}

/* ==========================================================================
   8. Dynamic Footer Year
   ========================================================================== */
function updateFooterYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   9. Buttery Smooth Scroll Reveal Animations
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale'
  );

  if (!revealElements.length) return;

  // Graceful fallback for browsers without IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  // Auto-stagger children inside multi-card grids
  const staggerContainers = [
    { selector: '.hero-cards-grid', childSelector: '.stat-card', step: 0.1 },
    { selector: '.skills-grid', childSelector: '.skill-card', step: 0.05 },
    { selector: '.about-highlights-column', childSelector: '.feature-box', step: 0.09 },
    { selector: '.credentials-grid', childSelector: '.credential-card', step: 0.1 }
  ];

  staggerContainers.forEach(({ selector, childSelector, step }) => {
    const container = document.querySelector(selector);
    if (!container) return;
    const items = container.querySelectorAll(childSelector);
    items.forEach((item, index) => {
      if (!item.className.includes('stagger-')) {
        item.style.transitionDelay = `${(index * step).toFixed(2)}s`;
      }
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -45px 0px', // Triggers slightly before element comes fully into center
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve to prevent redundant recalculations and keep 60fps scrolling
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}

/* ==========================================================================
   10. Lazy Loading Optimization
   ========================================================================== */
function initLazyLoading() {
  // Ensure native loading="lazy" is set on any images/media
  const mediaElements = document.querySelectorAll('img:not([loading]), iframe:not([loading])');
  mediaElements.forEach(media => {
    media.setAttribute('loading', 'lazy');
  });

  // Support for data-src lazy images if added in the future
  const lazyImages = document.querySelectorAll('img[data-src]');
  if (lazyImages.length && 'IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '0px 0px 200px 0px' });

    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

/* ==========================================================================
   11. Auto-capitalize First Letters on Input (Desktop & Mobile)
   ========================================================================== */
function initInputAutoCapitalization() {
  const nameInput = document.getElementById('senderName');
  const subjectInput = document.getElementById('msgSubject');
  const messageInput = document.getElementById('msgBody');

  // Helper to update input value while strictly maintaining caret / cursor position
  function applyTransform(element, transformFn) {
    element.addEventListener('input', () => {
      const start = element.selectionStart;
      const end = element.selectionEnd;
      const current = element.value;
      const transformed = transformFn(current);

      if (current !== transformed) {
        element.value = transformed;
        element.setSelectionRange(start, end);
      }
    });
  }

  // Name: Capitalize first letter of each word (e.g. "alex taylor" -> "Alex Taylor")
  if (nameInput) {
    applyTransform(nameInput, (val) => {
      return val.replace(/(^|\s)([a-z\u00E0-\u00FC])/g, (match, prefix, char) => prefix + char.toUpperCase());
    });
  }

  // Subject: Capitalize first letter of the subject line
  if (subjectInput) {
    applyTransform(subjectInput, (val) => {
      if (!val) return val;
      return val.replace(/^(\s*)([a-z\u00E0-\u00FC])/, (m, p, c) => p + c.toUpperCase());
    });
  }

  // Message: Capitalize first letter of sentences and new lines
  if (messageInput) {
    applyTransform(messageInput, (val) => {
      if (!val) return val;
      // Capitalize first non-whitespace character
      let res = val.replace(/^(\s*)([a-z\u00E0-\u00FC])/, (m, p, c) => p + c.toUpperCase());
      // Capitalize after sentence-ending punctuation (. ! ?) followed by space
      res = res.replace(/([.!?]\s+)([a-z\u00E0-\u00FC])/g, (m, p, c) => p + c.toUpperCase());
      // Capitalize after newlines
      res = res.replace(/(\n\s*)([a-z\u00E0-\u00FC])/g, (m, p, c) => p + c.toUpperCase());
      return res;
    });
  }
}

