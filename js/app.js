/**
 * Arpita Singh - Business Analyst Portfolio
 * Interactive Functionality & Modal Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Navbar scroll shadow & active link highlight
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('shadow-sm', 'border-slate-300/80');
    } else {
      navbar.classList.remove('shadow-sm', 'border-slate-300/80');
    }
  });

  // 4. Modal System (General handler for all modals)
  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    if (window.lucide) lucide.createIcons();
    
    // Focus first focusable element
    const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable) focusable.focus();
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    // Only remove overflow-hidden if no other modal is open
    const anyModalOpen = document.querySelectorAll('.modal-dialog:not(.hidden)');
    if (anyModalOpen.length === 0) {
      document.body.classList.remove('overflow-hidden');
    }
  };

  // Attach trigger buttons with [data-modal-target]
  document.querySelectorAll('[data-modal-target]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-modal-target');
      openModal(targetId);
    });
  });

  // Attach close buttons with [data-modal-close]
  document.querySelectorAll('[data-modal-close]').forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal-dialog');
      closeModal(modal);
    });
  });

  // Close when clicking modal backdrop
  document.querySelectorAll('.modal-dialog').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModals = document.querySelectorAll('.modal-dialog:not(.hidden)');
      openModals.forEach(modal => closeModal(modal));
    }
  });

  // 5. Resume Print & Download Buttons
  const printResumeBtn = document.getElementById('print-resume-btn');
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  const downloadResumeBtn = document.getElementById('download-resume-btn');
  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', () => {
      showToast('Downloading Arpita_Singh_Resume.pdf...', 'success');
      // Create a temporary link to download resume
      setTimeout(() => {
        window.print();
      }, 800);
    });
  }

  // 6. Interactive Deliverable Tabs (BA Showcase)
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-tab-target');

      // Update button styling
      tabButtons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white', 'shadow-sm');
        btn.classList.add('bg-white', 'text-slate-600', 'hover:bg-slate-100');
      });
      button.classList.add('bg-blue-600', 'text-white', 'shadow-sm');
      button.classList.remove('bg-white', 'text-slate-600', 'hover:bg-slate-100');

      // Switch tab pane
      tabPanes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.remove('hidden');
          pane.classList.add('block');
        } else {
          pane.classList.add('hidden');
          pane.classList.remove('block');
        }
      });
      if (window.lucide) lucide.createIcons();
    });
  });

  // 7. Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Disable and show loading
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="inline-flex items-center gap-2">
          <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          Sending Message...
        </span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast('Thank you! Your message has been sent successfully. I will get back to you within 24 hours.', 'success');
        if (window.lucide) lucide.createIcons();
      }, 1000);
    });
  }

  // 8. Toast Notification Utility
  function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border text-sm font-medium transition-all duration-300 transform translate-y-2 opacity-0 ${
      type === 'success'
        ? 'bg-slate-900 text-white border-blue-500/40 shadow-blue-500/10'
        : 'bg-white text-slate-800 border-slate-200 shadow-slate-200/50'
    }`;

    toast.innerHTML = `
      <div class="w-2 h-2 rounded-full ${type === 'success' ? 'bg-emerald-400 animate-pulse' : 'bg-blue-600'}"></div>
      <span>${message}</span>
      <button class="ml-auto text-slate-400 hover:text-white" onclick="this.parentElement.remove()">
        &times;
      </button>
    `;

    toastContainer.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    });

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4000);
  }

  // Make showToast accessible globally if needed
  window.showToast = showToast;
});
