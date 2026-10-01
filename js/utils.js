/**
 * utils.js — Shared Utilities
 */

/* ─── Contact Delivery Config ──────────────────────────────────
 *  Web3Forms (https://web3forms.com) delivers submissions to your
 *  inbox. Paste the access key from your Web3Forms dashboard into
 *  accessKey below to activate it.
 *
 *  While accessKey is still the placeholder, the form falls back to
 *  WhatsApp so enquiries are never silently lost.
 * ────────────────────────────────────────────────────────────── */
const WEB3FORMS_KEY_PLACEHOLDER = 'PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE';

const CONTACT_CONFIG = {
  whatsapp: '2348140153779',
  formEndpoint: 'https://api.web3forms.com/submit',
  accessKey: WEB3FORMS_KEY_PLACEHOLDER,
  fromName: 'Portfolio Contact Form',
  subject: 'New enquiry from your portfolio'
};

/** True once a real Web3Forms key has been supplied. */
function web3FormsReady() {
  const key = (CONTACT_CONFIG.accessKey || '').trim();
  return !!CONTACT_CONFIG.formEndpoint && !!key && key !== WEB3FORMS_KEY_PLACEHOLDER;
}

/* ─── In-page scroll helper ────────────────────────────────────
   Scrolls a section into view on the current page, offset by the fixed
   header so the heading is never hidden underneath it.
   ────────────────────────────────────────────────────────────── */
function ScrollToSection(anchor) {
  const target = anchor && document.getElementById(anchor);
  if (!target) return false;

  const header = document.getElementById('site-header');
  const offset = (header?.offsetHeight || 0) + 16;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: 'smooth' });
  return true;
}

/* ─── Scroll Reveal ─────────────────────────────────────────── */
const ScrollReveal = (() => {
  let observer;

  function init() {
    // Disconnect old observer before re-creating
    if (observer) observer.disconnect();

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  return { init };
})();

/* ─── Page-specific Initialization ─────────────────────────── */
const PageInit = (() => {

  function run(pageId) {
    switch (pageId) {
      case 'home':         _initHome();       break;
      case 'about':        _initAbout();      break;
      case 'social-media': _initSocial();     break;
      case 'web-dev':      _initWebDev();     break;
      case 'hire-me':      _initHireMe();     break;
    }
  }

  /* ── Home ── */
  function _initHome() {
    _animateCounters();
  }

  /* ── About ── */
  function _initAbout() {
    _initSkillTabs();
  }

/* ── Social Media ── */
  function _initSocial() {
    _initScrollLinks();
  }

  /* ── Web Dev ── */
  function _initWebDev() {
    _initScrollLinks();
  }

  /* ── In-page scroll links ──
     Same-page jumps handled manually so the URL hash stays on the
     current route instead of becoming an unknown route. Cross-page
     links (those carrying data-route) are handled by the router. */
  function _initScrollLinks() {
    document.querySelectorAll('[data-scroll-to]:not([data-route])').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!ScrollToSection(btn.dataset.scrollTo)) return;

        // Keep the hash on the current route so a refresh doesn't fall back to Home.
        history.replaceState(null, '', '#' + (Router.getCurrent() || 'home'));
      });
    });
  }

  /* ── Hire Me / Contact ── */
  function _initHireMe() {
    _initContactForm();
  }

  /* ── Counter Animation ── */
  function _animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(el => {
      const target   = parseFloat(el.dataset.count);
      const suffix   = el.dataset.suffix || '';
      const duration = 1800;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = (Number.isInteger(target) ? Math.floor(value) : value.toFixed(1)) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }

  /* ── Skill Tabs ── */
  function _initSkillTabs() {
    const tabs   = document.querySelectorAll('.skill-tab');
    const panels = document.querySelectorAll('.skills-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        panels.forEach(p => {
          p.hidden = p.dataset.panel !== target;
        });
      });
    });
  }

  /* ── Contact Form ── */
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const MIN_MESSAGE = 20;

  const FIELD_RULES = {
    name: v => !v
      ? 'Please enter your name.'
      : v.length < 2 ? 'Please enter your full name.' : '',

    email: v => !v
      ? 'Please enter your email address.'
      : !EMAIL_RE.test(v) ? 'Please enter a valid email address.' : '',

    message: v => !v
      ? 'Please tell me a little about your project.'
      : v.length < MIN_MESSAGE
        ? `A bit more detail, please — ${MIN_MESSAGE - v.length} more character${MIN_MESSAGE - v.length === 1 ? '' : 's'}.`
        : ''
  };

  function _initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const status  = form.querySelector('[data-form-status]');
    const btn     = form.querySelector('[type="submit"]');
    const botTrap = form.querySelector('[name="_gotcha"]');
    const idleLabel = btn.innerHTML;

    /* Show or clear the message under a field */
    function setFieldError(field, message) {
      const group = field.closest('.form-group');
      const box   = group && group.querySelector('.form-error');
      if (message) field.setAttribute('aria-invalid', 'true');
      else field.removeAttribute('aria-invalid');
      if (box) box.textContent = message;
      return !message;
    }

    function checkField(field) {
      const rule = FIELD_RULES[field.name];
      if (!rule) return true;
      return setFieldError(field, rule(field.value.trim()));
    }

    function checkAll() {
      let firstBad = null;
      Object.keys(FIELD_RULES).forEach(name => {
        const field = form.elements[name];
        if (!field) return;
        if (!checkField(field) && !firstBad) firstBad = field;
      });
      return firstBad;
    }

    /* Live feedback: clear an error as soon as the field is fixed */
    form.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(field => {
      field.addEventListener('input', () => {
        if (field.getAttribute('aria-invalid') === 'true') checkField(field);
      });
      field.addEventListener('blur', () => {
        if (FIELD_RULES[field.name] && field.value.trim()) checkField(field);
      });
    });

    function setStatus(kind, message) {
      if (!status) return;
      status.className = 'form-status' + (kind ? ` form-status--${kind}` : '');
      status.textContent = message || '';
      status.hidden = !message;
    }

    function setLoading(on) {
      btn.disabled = on;
      btn.innerHTML = on
        ? '<span class="spinner" aria-hidden="true"></span> Sending…'
        : idleLabel;
    }

    /* Turn a select's value into human-readable option text */
    function optionText(select, value) {
      if (!value) return 'Not specified';
      const opt = Array.from(select.options).find(o => o.value === value);
      return opt ? opt.textContent.trim() : value;
    }

    function buildMessage(data) {
      return [
        'New enquiry from your portfolio',
        '',
        `Name:    ${data.name}`,
        `Email:   ${data.email}`,
        `Service: ${data.service}`,
        `Budget:  ${data.budget}`,
        '',
        data.message
      ].join('\n');
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (btn.disabled) return; // ignore double submits

      // Spam guard: bots fill hidden fields, people never see them
      if (botTrap && botTrap.value) {
        setStatus('success', 'Thanks — your message has been sent.');
        return;
      }

      const firstBad = checkAll();
      if (firstBad) {
        setStatus('error', 'Please check the highlighted fields and try again.');
        firstBad.focus();
        firstBad.scrollIntoView({ block: 'center', behavior: 'smooth' });
        return;
      }

      const data = {
        name:    form.elements.name.value.trim(),
        email:   form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
        service: optionText(form.elements.service, form.elements.service.value),
        budget:  optionText(form.elements.budget,  form.elements.budget.value)
      };

      setLoading(true);
      setStatus('', '');

      try {
        if (web3FormsReady()) {
          const res = await fetch(CONTACT_CONFIG.formEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
              access_key: CONTACT_CONFIG.accessKey.trim(),
              subject: CONTACT_CONFIG.subject,
              from_name: CONTACT_CONFIG.fromName,
              name: data.name,
              email: data.email,
              message: buildMessage(data),
              // Web3Forms drops the submission silently if this is filled
              botcheck: botTrap?.value || ''
            })
          });

          // Web3Forms can answer 200 with success:false, so check the body too
          const result = await res.json().catch(() => ({}));
          if (!res.ok || result.success === false) {
            throw new Error(result.message || 'HTTP ' + res.status);
          }

          setStatus('success', 'Thanks — your message is on its way. I usually reply within 24 hours.');
        } else {
          // No Web3Forms key yet: hand off to WhatsApp, which needs no setup.
          const url = `https://wa.me/${CONTACT_CONFIG.whatsapp}?text=${encodeURIComponent(buildMessage(data))}`;
          const win = window.open(url, '_blank', 'noopener');
          if (!win) throw new Error('The message window was blocked by your browser.');
          setStatus('success', 'Thanks — WhatsApp has opened with your message ready to send. Just hit send and I will reply shortly.');
        }

        form.reset();
        form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
        form.querySelectorAll('.form-error').forEach(el => { el.textContent = ''; });
      } catch (err) {
        console.error('[ContactForm]', err);
        setStatus('error', `Sorry, that did not go through. Please email me directly at segunsalau5@gmail.com.`);
      } finally {
        setLoading(false);
      }
    });
  }

  return { run };
})();

/* ─── Helpers ───────────────────────────────────────────────── */
function el(tag, attrs = {}, ...children) {
  const element = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') element.className = v;
    else if (k === 'html') element.innerHTML = v;
    else element.setAttribute(k, v);
  });
  children.forEach(child => {
    if (typeof child === 'string') element.insertAdjacentHTML('beforeend', child);
    else if (child) element.appendChild(child);
  });
  return element;
}
