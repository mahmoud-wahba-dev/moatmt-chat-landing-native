document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.dropdown .btn-ghost');
  const dropdownContent = document.querySelector('.dropdown .dropdown-content');

  if (mobileMenuBtn && dropdownContent) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      // Toggle visibility manually or rely on DaisyUI focus behavior
      // DaisyUI dropdown works with focus, so clicking the button (label) focuses it.
      // However, to close it by clicking outside, we might need a bit of help if not using the pure CSS method perfectly.
      // For now, we'll let DaisyUI handle it via CSS/Focus, but if we need a forced toggle:
      mobileMenuBtn.blur(); // Close if already open (if we want toggle behavior) - actually DaisyUI opens on focus.
      // If we want a click toggle, we might need to toggle a class or focus.
      
      // Let's rely on DaisyUI's CSS focus behavior first. 
      // If pixel perfection requires a specific click-to-open/click-to-close behavior that CSS :focus doesn't provide (like staying open), we can add it.
      // The original Next.js code used DaisyUI standard classes.
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
        mobileMenuBtn.blur();
      }
    });
  }

  // FAQ Accordion Logic (if not using pure CSS)
  // The React code used <input type="radio"> which is the pure CSS way in DaisyUI (collapse pattern).
  // So no JS needed for FAQ if we keep the input radio/checkbox structure.
});
