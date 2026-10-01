/**
 * router.js — Simple Hash-based SPA Router
 * Manages page switching without a full page reload.
 */

const Router = (() => {
  /** Map of route id → page rendering function */
  const routes = {};

  /** Currently active route id */
  let currentRoute = null;

  /** Section to scroll to once the next page has rendered */
  let pendingAnchor = null;

  /**
   * Register a route.
   * @param {string} id  - Route identifier (e.g. 'home')
   * @param {Function} renderFn - Function that returns HTML string or DOM node
   */
  function register(id, renderFn) {
    routes[id] = renderFn;
  }

  /** Resolve a route id, falling back to home when it is not registered */
  function _resolve(id) {
    if (routes[id]) return id;
    console.warn(`[Router] Unknown route: "${id}". Falling back to home.`);
    return 'home';
  }

  /**
   * Navigate to a route by id
   * @param {string} id - Route identifier
   * @param {string} [anchor] - Optional section id to scroll to after render
   */
  function navigate(id, anchor) {
    id = _resolve(id);

    // Update hash without triggering hashchange listener loop
    const newHash = `#${id}`;
    if (window.location.hash !== newHash) {
      history.pushState(null, '', newHash);
    }

    pendingAnchor = anchor || null;

    _render(id);
  }

  /** Internal render logic */
  function _render(id) {
    id = _resolve(id);
    currentRoute = id;

    const main = document.getElementById('main-content');
    if (!main) return;

    // Fade out
    main.style.opacity = '0';
    main.style.transform = 'translateY(10px)';

    setTimeout(() => {
      // Clear and render new page
      main.innerHTML = '';
      const content = routes[id]?.();
      if (content) {
        if (typeof content === 'string') {
          main.innerHTML = content;
        } else {
          main.appendChild(content);
        }
      }

      // Add page-transition class to first child
      const firstChild = main.firstElementChild;
      if (firstChild) firstChild.classList.add('page-transition');

      // Fade in
      main.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      main.style.opacity = '1';
      main.style.transform = 'translateY(0)';

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Jump to a requested section now that the new page is in the DOM
      if (pendingAnchor) {
        const anchor = pendingAnchor;
        pendingAnchor = null;
        ScrollToSection(anchor);
      }

      // Update active nav
      Nav.setActive(id);

      // Initialize page-specific scripts
      PageInit.run(id);

      // Run scroll reveal
      ScrollReveal.init();

    }, 180);
  }

  /** Initialise router — reads current hash or defaults to home */
  function init() {
    const hashRoute = _resolve(window.location.hash.replace('#', '') || 'home');

    // Normalise the URL so an unknown hash never stays in the address bar
    if (window.location.hash !== `#${hashRoute}`) {
      history.replaceState(null, '', `#${hashRoute}`);
    }

    // Listen for browser back/forward
    window.addEventListener('popstate', () => {
      const id = window.location.hash.replace('#', '') || 'home';
      _render(id);
    });

    // Intercept all [data-route] links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-route]');
      if (!link) return;
      e.preventDefault();
      navigate(link.dataset.route, link.dataset.scrollTo);
    });

    _render(hashRoute);
  }

  function getCurrent() { return currentRoute; }

  return { register, navigate, init, getCurrent };
})();
