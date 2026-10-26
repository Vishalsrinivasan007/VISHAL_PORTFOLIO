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
   7. Contact Form Handler (Direct Email Draft Helper)
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const subject = document.getElementById('msgSubject').value.trim();
    const message = document.getElementById('msgBody').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.');
      return;
    }

    // Compose a mailto link
    const mailtoUrl = `mailto:rsvishalgeetha@gmail.com?subject=${encodeURIComponent(
      subject || `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `Hi Vishal,\n\n${message}\n\nFrom: ${name} (${email})`
    )}`;

    showToast('Opening your email client to send message...');
    
    // Open email client
    window.location.href = mailtoUrl;

    contactForm.reset();
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

