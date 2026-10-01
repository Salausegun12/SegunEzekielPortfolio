/**
 * app.js — Main Application Entry Point
 * Bootstraps the SPA: registers routes, initializes nav and router.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── Register Routes ──────────────────────────────────────────
  Router.register('home',         renderHome);
  Router.register('about',        renderAbout);
  Router.register('social-media', renderSocialMedia);
  Router.register('web-dev',      renderWebDev);
  Router.register('hire-me',      renderHireMe);

  // ── Initialize Navigation ─────────────────────────────────────
  Nav.init();

  // ── Initialize Router (renders first page) ─────────────────────
  Router.init();

});
