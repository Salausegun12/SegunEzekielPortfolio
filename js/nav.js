/**
 * nav.js — Navigation Controller
 * Handles sticky header, mobile menu, and active link state.
 */

const Nav = (() => {
  let header, menuToggle, mobileMenu, mobileBackdrop, mobileClose;

  function init() {
    header        = document.getElementById('site-header');
    menuToggle    = document.getElementById('menu-toggle');
    mobileMenu    = document.getElementById('mobile-menu');
    mobileBackdrop = document.getElementById('mobile-backdrop');
    mobileClose   = document.getElementById('mobile-close');

    // Scroll: add .scrolled class
    _handleScroll();
    window.addEventListener('scroll', _handleScroll, { passive: true });

    // Mobile toggle
    menuToggle?.addEventListener('click', openMenu);
    mobileBackdrop?.addEventListener('click', closeMenu);
    mobileClose?.addEventListener('click', closeMenu);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Close mobile menu when a nav link is clicked
    mobileMenu?.querySelectorAll('[data-route]').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  function _handleScroll() {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('is-open');
    menuToggle?.classList.add('is-open');
    menuToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    mobileClose?.focus();
  }

  function closeMenu() {
    if (!mobileMenu?.classList.contains('is-open')) return;
    mobileMenu.classList.remove('is-open');
    menuToggle?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuToggle?.focus();
  }

  function setActive(routeId) {
    // Desktop nav links
    document.querySelectorAll('.nav__link[data-route]').forEach(link => {
      link.classList.toggle('active', link.dataset.route === routeId);
    });

    // Mobile nav links
    document.querySelectorAll('.mobile-nav__link[data-route]').forEach(link => {
      link.classList.toggle('active', link.dataset.route === routeId);
    });
  }

  return { init, setActive, openMenu, closeMenu };
})();
