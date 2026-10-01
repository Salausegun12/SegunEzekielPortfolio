/**
 * pages.js — Page Content (HTML Templates for each route)
 * Each function returns an HTML string for the router to render.
 *
 * PLACEHOLDER NOTES:
 *  • Replace src="assets/images/logo/mylogo.png" with your logo.
 *  • Replace .profile-placeholder blocks with <img> tags pointing to your photos.
 *  • Replace .project-img-placeholder blocks with your project screenshots.
 *  • Replace .work-sample-placeholder blocks with your social media samples.
 *  • Replace .author-photo-placeholder blocks with client photos.
 *  • Update all text content (name, bio, skills, services, projects, testimonials).
 */

/* ═══════════════════════════════════════════════════════════
   PAGE 1 — HOME
   ═══════════════════════════════════════════════════════════ */
function renderHome() {
  return `
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="hero" aria-label="Hero section">
      <div class="hero__bg-grid" aria-hidden="true"></div>

      <!-- Glow orbs -->
      <div class="glow-orb glow-orb--primary" style="width:600px;height:600px;top:-100px;left:-150px;" aria-hidden="true"></div>
      <div class="glow-orb glow-orb--accent"  style="width:400px;height:400px;bottom:0;right:0;" aria-hidden="true"></div>

      <div class="container hero__content">
        <div class="home-hero__grid">

          <!-- Text -->
          <div class="home-hero__text">
            <div class="home-hero__kicker">
              <span class="dot" aria-hidden="true"></span>
              Available for new projects
            </div>

            <h1 class="home-hero__headline">
              I Create
              <span class="text-gradient"> Digital Impact</span>
              <br>Online.
            </h1>

            <p class="home-hero__desc">
              Social Media Manager &amp; Web Developer crafting scroll-stopping content,
              powerful brand presences, and high-performance websites that convert visitors into loyal customers.
            </p>

            <div class="home-hero__actions">
              <a href="#hire-me" data-route="hire-me" class="btn btn--primary btn--lg" id="hero-cta-primary">
                Let's Work Together
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#web-dev" data-route="web-dev" class="btn btn--outline btn--lg" id="hero-cta-portfolio">
                View My Work
              </a>
            </div>

            <div class="home-hero__roles">
              <span class="badge badge--rose">📱 Social Media Manager</span>
              <span class="badge badge--accent">💻 Web Developer</span>
              <span class="badge badge--primary">🎨 Brand Strategist</span>
            </div>
          </div>

          <!-- Profile visual -->
          <div class="home-hero__visual">
            <div class="profile-frame">
              <div class="profile-frame__ring" aria-hidden="true"></div>

              <img
                class="profile-frame__img"
                src="assets/images/first%20picture.jpeg"
                alt="Segun Ezekiel"
                width="600"
                height="600"
                fetchpriority="high"
              >

              <!-- Floating info badges -->
              <div class="home-hero__badges" aria-hidden="true">
                <div class="hero-badge hero-badge--tl">
                  <span class="badge-icon">🚀</span> 50+ Projects
                </div>
                <div class="hero-badge hero-badge--tr">
                  <span class="badge-icon">⭐</span> 5.0 Rating
                </div>
                <div class="hero-badge hero-badge--bl">
                  <span class="badge-icon">📊</span> 10M+ Reach
                </div>
                <div class="hero-badge hero-badge--br">
                  <span class="badge-icon">🏆</span> 3+ Years Exp.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ STATS ═══ -->
    <section class="home-stats" aria-label="Key statistics">
      <div class="container">
        <div class="home-stats__grid">
          <div class="stat-item reveal">
            <div class="stat-value" data-count="50" data-suffix="+">0+</div>
            <div class="stat-label">Projects Delivered</div>
          </div>
          <div class="stat-item reveal reveal-delay-1">
            <div class="stat-value" data-count="30" data-suffix="+">0+</div>
            <div class="stat-label">Happy Clients</div>
          </div>
          <div class="stat-item reveal reveal-delay-2">
            <div class="stat-value" data-count="10" data-suffix="M+">0M+</div>
            <div class="stat-label">Social Media Reach</div>
          </div>
          <div class="stat-item reveal reveal-delay-3">
            <div class="stat-value" data-count="3" data-suffix="+">0+</div>
            <div class="stat-label">Years Experience</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ SERVICES TEASER ═══ -->
    <section class="section" aria-labelledby="services-heading">
      <div class="container">
        <header class="section__header reveal">
          <p class="section__eyebrow">What I Do</p>
          <h2 class="section__title" id="services-heading">
            Two Disciplines.<br>
            <span class="text-gradient">One Powerful Package.</span>
          </h2>
          <p class="section__subtitle">
            Whether you need a stunning website or a thriving social media presence,
            I bring both worlds together under one roof.
          </p>
        </header>

        <div class="home-services__grid">
          <!-- Social Media Card -->
          <a href="#social-media" data-route="social-media" class="service-card service-card--social reveal" id="home-service-social" style="background-image:linear-gradient(180deg,rgba(10,6,18,0.78) 0%,rgba(8,5,16,0.88) 55%,rgba(8,5,16,0.96) 100%),url('assets/images/social.jpg')">
            <span class="service-card__icon" aria-hidden="true">📱</span>
            <h3 class="service-card__title">Social Media Management</h3>
            <p class="service-card__desc">
              Strategic content creation, community management, analytics-driven growth campaigns,
              and brand storytelling across all major platforms.
            </p>
            <span class="service-card__arrow">
              Explore Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </a>

          <!-- Web Dev Card -->
          <a href="#web-dev" data-route="web-dev" class="service-card service-card--web reveal reveal-delay-1" id="home-service-web" style="background-image:linear-gradient(180deg,rgba(6,14,20,0.78) 0%,rgba(5,10,18,0.88) 55%,rgba(5,8,16,0.96) 100%),url('assets/images/web1.jpg')">
            <span class="service-card__icon" aria-hidden="true">💻</span>
            <h3 class="service-card__title">Web Development</h3>
            <p class="service-card__desc">
              Clean, performant, and accessible websites built with modern technologies.
              From landing pages to full-scale web applications.
            </p>
            <span class="service-card__arrow">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- ═══ CTA BAND ═══ -->
    <section class="section--sm" style="background:linear-gradient(135deg,rgba(100,60,200,0.08),rgba(0,180,200,0.06)); border-top:1px solid rgba(100,60,200,0.12); border-bottom:1px solid rgba(0,180,200,0.12);" aria-label="Call to action">
      <div class="container" style="text-align:center;">
        <h2 class="reveal" style="font-size:clamp(1.5rem,4vw,2.5rem); font-weight:800; margin-bottom:1rem;">
          Ready to grow your digital presence?
        </h2>
        <p class="reveal reveal-delay-1" style="color:var(--color-text-300); margin-bottom:2rem; max-width:50ch; margin-inline:auto;">
          Let's build something meaningful together. Reach out and let's start a conversation.
        </p>
        <a href="#hire-me" data-route="hire-me" class="btn btn--primary btn--xl reveal reveal-delay-2" id="home-cta-bottom">
          Get In Touch
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  </div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   PAGE 2 — ABOUT & SKILLS
   ═══════════════════════════════════════════════════════════ */
function renderAbout() {
  return `
  <div>
    <!-- ═══ PAGE HERO ═══ -->
    <section class="page-hero" aria-label="About page hero">
      <div class="glow-orb glow-orb--primary" style="width:500px;height:500px;top:-100px;right:-100px;" aria-hidden="true"></div>
      <div class="container page-hero__content">
        <p class="page-hero__eyebrow">About Me</p>
        <h1 class="page-hero__title">
          The Person Behind<br>
          <span class="text-gradient">The Brand</span>
        </h1>
        <p class="page-hero__subtitle">
          A passionate digital creative who bridges the gap between compelling social storytelling and technical web excellence.
        </p>
      </div>
    </section>

    <!-- ═══ ABOUT SECTION ═══ -->
    <section class="section" aria-labelledby="about-heading">
      <div class="container">
        <div class="about-grid">

          <!-- Photo -->
          <div class="about-photo-wrapper reveal">
            <img
              class="about-photo"
              src="assets/images/second%20picture.jpeg"
              alt="Segun Ezekiel at work"
              width="600"
              height="800"
              loading="lazy"
            >
          </div>

          <!-- Content -->
          <div class="about-content">
            <h2 class="section__title reveal" id="about-heading" style="text-align:left; margin-bottom:1.5rem;">
              Hi, I'm <span class="text-gradient">Segun Ezekiel</span>
            </h2>

            <p class="reveal reveal-delay-1">
              I'm a dual-skilled digital professional specialising in <strong style="color:var(--color-text-100)">Social Media Management</strong>
              and <strong style="color:var(--color-text-100)">Web Development</strong>. With a passion for both the creative
              and technical sides of the digital world, I help brands establish powerful online presences
              that drive real, measurable results.
            </p>

            <p class="reveal reveal-delay-2">
              My drive goes beyond simply growing a brand's social media presence; I want to help brands
              build a strong and complete online ecosystem. I combine engaging social media strategies with
              well-structured, conversion-focused websites and traffic-generating techniques that move
              audiences from social platforms to a brand's digital home.
            </p>

            <p class="reveal reveal-delay-3">
              What sets me apart is my ability to understand both sides of the equation — creating content
              that attracts attention and building digital platforms that turn that attention into
              meaningful engagement, enquiries, and business growth.
            </p>

            <!-- Quick facts -->
            <div class="reveal reveal-delay-4" style="display:flex; flex-wrap:wrap; gap:1rem; margin-top:2rem; margin-bottom:2.5rem;">
              <div style="display:flex; align-items:center; gap:0.5rem; background:var(--color-bg-700); border:var(--border-subtle); border-radius:var(--radius-lg); padding:0.75rem 1.25rem; font-size:0.875rem;">
                <span aria-hidden="true">📍</span>
                <span style="color:var(--color-text-300)">Location:</span>
                <strong style="color:var(--color-text-100)">Ibadan, Nigeria</strong>
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem; background:var(--color-bg-700); border:var(--border-subtle); border-radius:var(--radius-lg); padding:0.75rem 1.25rem; font-size:0.875rem;">
                <span aria-hidden="true">💼</span>
                <span style="color:var(--color-text-300)">Available:</span>
                <strong style="color:var(--color-success)">Yes, for new projects</strong>
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem; background:var(--color-bg-700); border:var(--border-subtle); border-radius:var(--radius-lg); padding:0.75rem 1.25rem; font-size:0.875rem;">
                <span aria-hidden="true">🎓</span>
                <span style="color:var(--color-text-300)">Experience:</span>
                <strong style="color:var(--color-text-100)">3+ Years</strong>
              </div>
            </div>

            <!-- Action buttons -->
            <div class="reveal reveal-delay-5" style="display:flex; flex-wrap:wrap; gap:1rem;">
              <a href="#hire-me" data-route="hire-me" class="btn btn--primary btn--lg" id="about-cta-hire">
                Work With Me
              </a>
            </div>

            <!-- ═══ SKILLS ═══ -->
            <div class="skills-section reveal" style="margin-top:3rem;">
              <h3 style="font-size:1.5rem; font-weight:700; margin-bottom:1.5rem;">
                Skills &amp; Tools
              </h3>

              <!-- Tab buttons -->
              <div class="skills-tabs" role="tablist" aria-label="Skill categories">
                <button class="skill-tab active" data-tab="social"  role="tab" aria-selected="true"  id="tab-social">Social Media</button>
                <button class="skill-tab"         data-tab="web"    role="tab" aria-selected="false" id="tab-web">Web Dev</button>
                <button class="skill-tab"         data-tab="design" role="tab" aria-selected="false" id="tab-design">Design</button>
                <button class="skill-tab"         data-tab="tools"  role="tab" aria-selected="false" id="tab-tools">Tools</button>
              </div>

              <!-- Social Media Skills -->
              <div class="skills-panel skills-grid" data-panel="social" role="tabpanel" aria-labelledby="tab-social">
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/instagram.svg" alt="" width="28" height="28" loading="lazy">Instagram</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/tiktok.svg" alt="" width="28" height="28" loading="lazy">TikTok</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/x.svg" alt="" width="28" height="28" loading="lazy">X / Twitter</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/linkedin.svg" alt="" width="28" height="28" loading="lazy">LinkedIn</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/facebook.svg" alt="" width="28" height="28" loading="lazy">Facebook</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/pinterest.svg" alt="" width="28" height="28" loading="lazy">Pinterest</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/googleanalytics.svg" alt="" width="28" height="28" loading="lazy">Analytics</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/g-copywriting.svg" alt="" width="28" height="28" loading="lazy">Copywriting</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/googleads.svg" alt="" width="28" height="28" loading="lazy">Paid Ads</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/g-strategy.svg" alt="" width="28" height="28" loading="lazy">Strategy</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/g-influencer.svg" alt="" width="28" height="28" loading="lazy">Influencer Mktg</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/g-podcasting.svg" alt="" width="28" height="28" loading="lazy">Podcasting</div>
              </div>

              <!-- Web Dev Skills -->
              <div class="skills-panel skills-grid" data-panel="web" hidden role="tabpanel" aria-labelledby="tab-web">
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/html5.svg" alt="" width="28" height="28" loading="lazy">HTML5</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/css3.svg" alt="" width="28" height="28" loading="lazy">CSS3</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/javascript.svg" alt="" width="28" height="28" loading="lazy">JavaScript</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/react.svg" alt="" width="28" height="28" loading="lazy">React</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/nextdotjs.svg" alt="" width="28" height="28" loading="lazy">Next.js</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/nodedotjs.svg" alt="" width="28" height="28" loading="lazy">Node.js</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/wordpress.svg" alt="" width="28" height="28" loading="lazy">WordPress</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/shopify.svg" alt="" width="28" height="28" loading="lazy">Shopify</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/mysql.svg" alt="" width="28" height="28" loading="lazy">MySQL</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/firebase.svg" alt="" width="28" height="28" loading="lazy">Firebase</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/g-hosting.svg" alt="" width="28" height="28" loading="lazy">Hosting</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/github.svg" alt="" width="28" height="28" loading="lazy">Git / GitHub</div>
              </div>

              <!-- Design Skills -->
              <div class="skills-panel skills-grid" data-panel="design" hidden role="tabpanel" aria-labelledby="tab-design">
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/canva.svg" alt="" width="28" height="28" loading="lazy">Canva</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/figma.svg" alt="" width="28" height="28" loading="lazy">Figma</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/adobephotoshop.svg" alt="" width="28" height="28" loading="lazy">Photoshop</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/adobeillustrator.svg" alt="" width="28" height="28" loading="lazy">Illustrator</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/adobepremierepro.svg" alt="" width="28" height="28" loading="lazy">Premiere Pro</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/adobeaftereffects.svg" alt="" width="28" height="28" loading="lazy">After Effects</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/g-uiux.svg" alt="" width="28" height="28" loading="lazy">UI/UX Design</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/g-brand.svg" alt="" width="28" height="28" loading="lazy">Brand Identity</div>
              </div>

              <!-- Tools -->
              <div class="skills-panel skills-grid" data-panel="tools" hidden role="tabpanel" aria-labelledby="tab-tools">
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/buffer.svg" alt="" width="28" height="28" loading="lazy">Buffer</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/hootsuite.svg" alt="" width="28" height="28" loading="lazy">Hootsuite</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/meta.svg" alt="" width="28" height="28" loading="lazy">Meta Suite</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/semrush.svg" alt="" width="28" height="28" loading="lazy">Semrush</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/mailchimp.svg" alt="" width="28" height="28" loading="lazy">Mailchimp</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/zapier.svg" alt="" width="28" height="28" loading="lazy">Zapier</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/notion.svg" alt="" width="28" height="28" loading="lazy">Notion</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/trello.svg" alt="" width="28" height="28" loading="lazy">Trello</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/slack.svg" alt="" width="28" height="28" loading="lazy">Slack</div>
                <div class="skill-chip"><img class="skill-icon" src="assets/images/skills/visualstudiocode.svg" alt="" width="28" height="28" loading="lazy">VS Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   PAGE 3 — SOCIAL MEDIA MANAGEMENT
   ═══════════════════════════════════════════════════════════ */
function renderSocialMedia() {
  return `
  <div>
    <!-- ═══ PAGE HERO ═══ -->
    <section class="page-hero" style="background:linear-gradient(160deg, hsl(330,40%,8%) 0%, hsl(260,30%,8%) 40%, hsl(228,20%,10%) 100%);" aria-label="Social media page hero">
      <div class="glow-orb glow-orb--rose" style="width:500px;height:500px;top:-100px;left:-100px;" aria-hidden="true"></div>
      <div class="container page-hero__content">
        <p class="page-hero__eyebrow" style="color:var(--color-rose-400);">Social Media Management</p>
        <h1 class="page-hero__title">
          Grow Your Brand.<br>
          <span class="text-gradient-rose">Dominate Your Feed.</span>
        </h1>
        <p class="page-hero__subtitle">
          Strategic, data-driven social media management that builds authentic communities,
          drives engagement, and turns followers into paying customers.
        </p>
        <div style="display:flex; flex-wrap:wrap; gap:1rem;">
          <a href="#hire-me" data-route="hire-me" class="btn btn--primary btn--lg" id="social-cta-hire">
            Get a Social Media Strategy
          </a>
          <a href="#social-samples" data-scroll-to="social-samples" class="btn btn--outline btn--lg" id="social-cta-work">
            View My Work
          </a>
        </div>
      </div>
    </section>

    <!-- ═══ PLATFORMS ═══ -->
    <section class="section--sm" style="border-bottom:var(--border-subtle);" aria-labelledby="platforms-heading">
      <div class="container">
        <header class="section__header reveal">
          <p class="section__eyebrow" style="color:var(--color-rose-400);">Platforms</p>
          <h2 class="section__title" id="platforms-heading">Platforms I Work On</h2>
        </header>
        <div class="platforms-grid reveal">
          <span class="platform-tag"><img class="tag-icon" src="assets/images/skills/instagram.svg" alt="" width="18" height="18" loading="lazy">Instagram</span>
          <span class="platform-tag"><img class="tag-icon" src="assets/images/skills/tiktok.svg" alt="" width="18" height="18" loading="lazy">TikTok</span>
          <span class="platform-tag"><img class="tag-icon" src="assets/images/skills/linkedin.svg" alt="" width="18" height="18" loading="lazy">LinkedIn</span>
          <span class="platform-tag"><img class="tag-icon" src="assets/images/skills/x.svg" alt="" width="18" height="18" loading="lazy">X / Twitter</span>
          <span class="platform-tag"><img class="tag-icon" src="assets/images/skills/facebook.svg" alt="" width="18" height="18" loading="lazy">Facebook</span>
          <span class="platform-tag"><img class="tag-icon" src="assets/images/skills/pinterest.svg" alt="" width="18" height="18" loading="lazy">Pinterest</span>
          <span class="platform-tag"><img class="tag-icon" src="assets/images/skills/youtube.svg" alt="" width="18" height="18" loading="lazy">YouTube</span>
          <span class="platform-tag"><img class="tag-icon" src="assets/images/skills/threads.svg" alt="" width="18" height="18" loading="lazy">Threads</span>
        </div>
      </div>
    </section>

    <!-- ═══ SERVICES ═══ -->
    <section class="section" aria-labelledby="social-services-heading">
      <div class="container">
        <header class="section__header reveal">
          <p class="section__eyebrow" style="color:var(--color-rose-400);">What I Offer</p>
          <h2 class="section__title" id="social-services-heading">
            Social Media <span class="text-gradient-rose">Services</span>
          </h2>
          <p class="section__subtitle">
            End-to-end social media solutions that align with your business goals and brand voice.
          </p>
        </header>

        <div class="social-services-grid">
          ${[
            { icon:'🎯', img:'strategy',    title:'Social Media Strategy', desc:'Custom strategies aligned with your business goals. Audience research, competitor analysis, content pillars, and posting cadence.' },
            { icon:'✍️', img:'content',     title:'Content Creation', desc:'Scroll-stopping captions, graphics, carousels, reels, and short-form video designed to increase engagement and reach.' },
            { icon:'📅', img:'scheduling',  title:'Content Scheduling', desc:'Consistent posting across all platforms using industry-leading scheduling tools for maximum visibility at optimal times.' },
            { icon:'💬', img:'community',   title:'Community Management', desc:'Active engagement with your audience — responding to comments, DMs, and building a loyal, thriving community around your brand.' },
            { icon:'📊', img:'analytics',   title:'Analytics & Reporting', desc:'Comprehensive monthly reports covering reach, engagement, follower growth, conversion metrics, and actionable insights.' },
            { icon:'📢', img:'paid',        title:'Paid Social Advertising', desc:'Targeted ad campaigns on Meta, TikTok, and LinkedIn that deliver measurable ROI and qualified leads.' },
          ].map((s, i) => `
          <div class="social-service-card reveal reveal-delay-${i % 3}" style="background-image:linear-gradient(180deg,rgba(12,9,22,0.72) 0%,rgba(10,8,18,0.88) 60%,rgba(9,7,16,0.94) 100%),url('assets/images/services/${s.img}.svg')">
            <div class="social-service-card__icon" aria-hidden="true">${s.icon}</div>
            <h3 class="social-service-card__title">${s.title}</h3>
            <p class="social-service-card__desc">${s.desc}</p>
          </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══ WORK SAMPLES ═══ -->
    <section class="section" id="social-samples" style="background:var(--color-bg-900); border-top:var(--border-subtle);" aria-labelledby="samples-heading">
      <div class="container">
        <header class="section__header reveal">
          <p class="section__eyebrow" style="color:var(--color-rose-400);">Portfolio</p>
          <h2 class="section__title" id="samples-heading">
            Work <span class="text-gradient-rose">Samples</span>
          </h2>
          <p class="section__subtitle">
            A selection of social media content, campaigns, and results I've delivered for brands.
          </p>
        </header>

        <div class="work-samples-grid reveal">
          ${[
            'Cybervast Instagram Page Weekly Algorithm',
            'Cybervast Tiktok Algorithm',
            'Cybervast Instagram Post',
            'TheFabaBrand Instagram Post',
            'Cybervast Indepth Algorithm for Instagram',
            'TheFabaBrand Instagram Post',
          ].map((title, i) => `
          <div class="work-sample-card reveal reveal-delay-${i % 3}" id="social-sample-${i + 1}">
            <img src="assets/images/media${i + 1}.jpeg" alt="${title}" width="576" height="1280" loading="lazy">
            <div class="work-sample-overlay">
              <div>
                <p style="font-size:0.75rem; font-weight:600; color:var(--color-text-100)">${title}</p>
              </div>
            </div>
          </div>
          `).join('')}
        </div>

        <!-- CTA -->
        <div class="reveal" style="text-align:center; margin-top:3rem;">
          <a href="#hire-me" data-route="hire-me" class="btn btn--primary btn--lg" id="social-samples-cta">
            Let's Grow Your Brand
          </a>
        </div>
      </div>
    </section>

    <!-- ═══ BRANDS WORKED WITH ═══ -->
    <section class="section--sm" style="border-top:var(--border-subtle);" aria-labelledby="brands-heading">
      <div class="container">
        <header class="section__header reveal">
          <p class="section__eyebrow">Brands</p>
          <h2 class="section__title" id="brands-heading" style="font-size:1.875rem;">
            Brands I've Worked With
          </h2>
        </header>
        <div class="brands-strip reveal">
          ${[
            { file:'CAC%20LOGO.png',      name:'CAC' },
            { file:'CYBERVAST%20LOGO.png', name:'Cybervast' },
            { file:'THEFABABRAND.png',     name:'TheFabaBrand' },
            { file:'VOCHMAL%20BREAD.png',  name:'Vochmal Bread' },
          ].map(b => `
          <div class="brand-tile">
            <img src="assets/images/brands/${b.file}" alt="${b.name} logo" loading="lazy">
          </div>
          `).join('')}
        </div>
      </div>
    </section>
  </div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   PAGE 4 — WEB DEVELOPMENT
   ═══════════════════════════════════════════════════════════ */
function renderWebDev() {
  return `
  <div>
    <!-- ═══ PAGE HERO ═══ -->
    <section class="page-hero" style="background:linear-gradient(160deg, hsl(192,40%,7%) 0%, hsl(220,30%,8%) 40%, hsl(228,20%,10%) 100%);" aria-label="Web development page hero">
      <div class="glow-orb glow-orb--accent" style="width:500px;height:500px;top:-100px;right:-100px;" aria-hidden="true"></div>
      <div class="container page-hero__content">
        <p class="page-hero__eyebrow">Web Development</p>
        <h1 class="page-hero__title">
          I Build Websites<br>
          <span class="text-gradient">That Actually Work.</span>
        </h1>
        <p class="page-hero__subtitle">
          Clean code, intuitive UX, and performance-first development.
          From landing pages to complex web applications — built to convert, built to last.
        </p>
        <div style="display:flex; flex-wrap:wrap; gap:1rem;">
          <a href="#hire-me" data-route="hire-me" class="btn btn--primary btn--lg" id="webdev-cta-hire">
            Start a Project
          </a>
          <a href="#web-projects" data-scroll-to="web-projects" class="btn btn--outline btn--lg" id="webdev-cta-projects">
            View Projects
          </a>
        </div>
      </div>
    </section>

    <!-- ═══ TECH STACK ═══ -->
    <section class="section--sm" style="border-bottom:var(--border-subtle);" aria-labelledby="tech-heading">
      <div class="container">
        <header class="section__header reveal">
          <p class="section__eyebrow">Technologies</p>
          <h2 class="section__title" id="tech-heading">My Tech Stack</h2>
        </header>
        <div class="tech-stack-grid reveal">
          ${[
            { name:'HTML5',     logo:'html5' },
            { name:'CSS3',      logo:'css3' },
            { name:'JavaScript',logo:'javascript' },
            { name:'React',     logo:'react' },
            { name:'Next.js',   logo:'nextdotjs' },
            { name:'Node.js',   logo:'nodedotjs' },
            { name:'PHP',       logo:'php' },
            { name:'WordPress', logo:'wordpress' },
            { name:'Shopify',   logo:'shopify' },
            { name:'MySQL',     logo:'mysql' },
            { name:'Firebase',  logo:'firebase' },
            { name:'Git',       logo:'git' },
            { name:'Figma',     logo:'figma' },
            { name:'VS Code',   logo:'visualstudiocode' },
            { name:'Vercel',    logo:'vercel' },
            { name:'Netlify',   logo:'netlify' },
          ].map(t => `
          <span class="tech-item">
            <img class="tech-icon" src="assets/images/skills/${t.logo}.svg" alt="" width="18" height="18" loading="lazy">${t.name}
          </span>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══ WEB SERVICES ═══ -->
    <section class="section" aria-labelledby="web-services-heading">
      <div class="container">
        <header class="section__header reveal">
          <p class="section__eyebrow">Services</p>
          <h2 class="section__title" id="web-services-heading">
            What I <span class="text-gradient">Build</span>
          </h2>
          <p class="section__subtitle">
            Every project is crafted with attention to detail, performance, and a seamless user experience.
          </p>
        </header>

        <div class="web-services-grid">
          ${[
            { icon:'🌐', title:'Business Websites', desc:'Professional websites for small businesses, agencies, and personal brands that make a powerful first impression.' },
            { icon:'🛒', title:'E-Commerce Stores', desc:'Full-featured online stores with smooth checkout experiences, integrated payments, and inventory management.' },
            { icon:'🚀', title:'Landing Pages', desc:'High-converting landing pages designed to capture leads and drive action — optimised for every device.' },
            { icon:'⚛️', title:'Web Applications', desc:'Custom web apps built with modern frameworks like React and Next.js — scalable, fast, and maintainable.' },
            { icon:'📦', title:'WordPress Development', desc:'Custom WordPress themes and plugins, migrations, speed optimisation, and ongoing maintenance.' },
            { icon:'🔧', title:'Website Redesigns', desc:'Transform outdated websites into modern, performant experiences that reflect your brand\'s true potential.' },
          ].map((s, i) => `
          <div class="web-service-card reveal reveal-delay-${i % 3}">
            <div class="web-service-card__icon" aria-hidden="true">${s.icon}</div>
            <h3 style="font-size:1.125rem; font-weight:700; margin-bottom:0.5rem;">${s.title}</h3>
            <p style="font-size:0.875rem; color:var(--color-text-300); line-height:1.7;">${s.desc}</p>
          </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══ PROJECTS ═══ -->
    <section class="section" id="web-projects" style="background:var(--color-bg-900); border-top:var(--border-subtle);" aria-labelledby="projects-heading">
      <div class="container">
        <header class="section__header reveal">
          <p class="section__eyebrow">Portfolio</p>
          <h2 class="section__title" id="projects-heading">
            Featured <span class="text-gradient">Projects</span>
          </h2>
          <p class="section__subtitle">
            A selection of websites and web applications I've designed and built.
          </p>
        </header>

        <div class="projects-grid">
          ${[
            {
              id: 1,
              image: 'assets/images/projects/DANIELS.png',
              title: 'DANIELS LANDSCAPE WEBSITE',
              tags: ['TypeScript'],
              desc: 'A well-polished marketing website created for Daniels Landscape, a landscaping business based in the United States. The design pairs a clean, nature-driven aesthetic with a fast, responsive build, giving the company a credible online presence and making it effortless for local customers to explore services and get in touch.',
              url: 'https://daniellandscape.vercel.app/',
            },
            {
              id: 2,
              image: 'assets/images/projects/bayelsa.png',
              title: 'BAYELSA STATE POLYTECHNIC ADMISSION LETTER GENERATOR',
              tags: ['TypeScript'],
              desc: 'An automatic admission letter generator made for Bayelsa State Polytechnic — a renowned institution in South-South Nigeria. The tool streamlines the admission letter process, letting staff generate accurate, professionally formatted letters in seconds instead of preparing each one manually.',
              url: 'https://admission-letter-generator-iota.vercel.app/',
            },
            {
              id: 3,
              image: 'assets/images/projects/GENEVA.png',
              title: 'GENEVA TREE SERVICES TREE WEBSITE',
              tags: ['TypeScript'],
              desc: 'A beautifully crafted website designed for Geneva Tree Services — a tree service company based in Nebraska. The site presents the company\u2019s services with an inviting, outdoors-inspired design while making it easy for homeowners to learn more and request a quote.',
              url: 'https://geneva-tree-services.vercel.app/',
            },
            {
              id: 4,
              image: 'assets/images/projects/miyspend.png',
              title: 'MIYSPEND PERSONAL FINANCE TRACKING MOBILE APP',
              tags: ['Node.js', 'Expo'],
              desc: 'A well-designed mobile app tailored to solve every need when it comes to personal finance tracking. MiySpend gives users a clear view of their income, spending, and budgets, making it simple for anyone to stay in control of their money.',
            },
          ].map(p => `
          <article class="project-card reveal reveal-delay-${p.id % 2}" id="project-card-${p.id}">
            <div class="project-card__image">
              ${p.image ? `
              <img src="${p.image}" alt="${p.title}" loading="lazy">
              ` : `
              <div class="project-img-placeholder" role="img" aria-label="Project ${p.id} screenshot">
                <span class="placeholder-icon" aria-hidden="true">🖥️</span>
                <span style="font-size:0.65rem; text-transform:uppercase; letter-spacing:0.1em;">Project Screenshot ${p.id}</span>
                <code style="font-size:0.6rem; opacity:0.5; margin-top:0.25rem">assets/images/projects/project-${p.id}.jpg</code>
              </div>
              `}
            </div>
            <div class="project-card__body">
              <div class="project-card__tags">
                ${p.tags.map(t => `<span class="project-card__tag">${t}</span>`).join('')}
              </div>
              <h3 class="project-card__title">${p.title}</h3>
              <p class="project-card__desc">${p.desc}</p>
              ${p.url ? `
              <div class="project-card__links">
                <a href="${p.url}" class="btn btn--outline btn--sm" id="project-${p.id}-live" target="_blank" rel="noopener noreferrer">
                  Live Site
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                </a>
              </div>
              ` : ''}
            </div>
          </article>
          `).join('')}
        </div>

        <!-- CTA -->
        <div class="reveal" style="text-align:center; margin-top:3rem;">
          <a href="#hire-me" data-route="hire-me" class="btn btn--primary btn--lg" id="webdev-bottom-cta">
            Let's Build Your Website
          </a>
        </div>
      </div>
    </section>

    <!-- ═══ PROCESS ═══ -->
    <section class="section" aria-labelledby="process-heading">
      <div class="container">
        <header class="section__header reveal">
          <p class="section__eyebrow">How I Work</p>
          <h2 class="section__title" id="process-heading">
            My <span class="text-gradient">Development Process</span>
          </h2>
        </header>

        <div class="process-grid">
          ${[
            { title:'Discovery',    desc:'Understanding your goals, audience, and requirements through detailed consultation.' },
            { title:'Planning',     desc:'Wireframing, sitemap, and technical architecture. A clear roadmap before any code is written.' },
            { title:'Design',       desc:'UI/UX design mockups reviewed and approved before development begins.' },
            { title:'Development',  desc:'Clean, semantic, accessible code written with performance and maintainability in mind.' },
            { title:'Testing',      desc:'Cross-browser, cross-device testing and performance audits before launch.' },
            { title:'Launch & Support', desc:'Smooth launch with post-delivery support and optional maintenance packages.' },
          ].map((step, i) => `
          <div class="card process-card reveal reveal-delay-${i % 3}">
            <span class="process-card__step" aria-hidden="true">0${i + 1}</span>
            <h3 class="process-card__title">${step.title}</h3>
            <p class="process-card__desc">${step.desc}</p>
          </div>
          `).join('')}
        </div>
      </div>
    </section>
  </div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   PAGE 5 — WHY HIRE ME / CONTACT
   ═══════════════════════════════════════════════════════════ */
function renderHireMe() {
  return `
  <div>
    <!-- ═══ PAGE HERO ═══ -->
    <section class="page-hero" aria-label="Contact page hero">
      <div class="glow-orb glow-orb--primary" style="width:500px;height:500px;top:-80px;left:50%;transform:translateX(-50%);" aria-hidden="true"></div>
      <div class="container page-hero__content" style="text-align:center; max-width:800px; margin-inline:auto;">
        <p class="page-hero__eyebrow">Why Hire Me</p>
        <h1 class="page-hero__title">
          The Right Choice<br>
          <span class="text-gradient">For Your Brand</span>
        </h1>
        <p class="page-hero__subtitle">
          I'm not just a freelancer — I'm a strategic digital partner who cares deeply
          about your brand's growth and long-term success.
        </p>
      </div>
    </section>

    <!-- ═══ VALUE PROPOSITIONS ═══ -->
    <section class="section" aria-labelledby="value-heading">
      <div class="container">
        <header class="section__header reveal">
          <p class="section__eyebrow">Why Choose Me</p>
          <h2 class="section__title" id="value-heading">
            What Sets Me <span class="text-gradient">Apart</span>
          </h2>
          <p class="section__subtitle">
            Rare combination of creative content expertise and technical web development skills.
          </p>
        </header>

        <div class="value-props-grid">
          ${[
            { icon:'🎯', img:'dual',        title:'Dual Expertise',       desc:'Uniquely positioned as both a Social Media Manager and Web Developer — a rare and powerful combination that gives your brand a complete digital edge.' },
            { icon:'📊', img:'data',        title:'Data-Driven Decisions', desc:'Every strategy, post, and design decision is backed by analytics and real performance data, not guesswork.' },
            { icon:'⚡', img:'fast',        title:'Fast & Reliable',       desc:'I deliver on time, communicate proactively, and never leave you wondering about project status. Your time is valuable.' },
            { icon:'🎨', img:'creative',    title:'Creative Excellence',   desc:'Premium design sensibility and a sharp eye for aesthetics that makes your brand look world-class across every touchpoint.' },
            { icon:'🤝', img:'partnership', title:'Partnership Mentality', desc:'I treat every project like it\'s my own business. Your goals become my goals, your success becomes my success.' },
            { icon:'🔄', img:'fullservice', title:'Full-Service Digital',  desc:'From building your website to growing your social media presence — get everything you need from one trusted partner.' },
          ].map((v, i) => `
          <div class="value-card reveal reveal-delay-${i % 3}" style="background-image:linear-gradient(180deg,rgba(14,12,30,0.74) 0%,rgba(12,10,26,0.89) 60%,rgba(10,9,22,0.94) 100%),url('assets/images/value/${v.img}.svg')">
            <span class="value-card__icon" aria-hidden="true">${v.icon}</span>
            <h3 class="value-card__title">${v.title}</h3>
            <p class="value-card__desc">${v.desc}</p>
          </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══ TESTIMONIALS ═══ -->
    <section class="section" style="background:var(--color-bg-900); border-top:var(--border-subtle);" aria-labelledby="testimonials-heading">
      <div class="container">
        <header class="section__header reveal">
          <p class="section__eyebrow">Social Proof</p>
          <h2 class="section__title" id="testimonials-heading">
            What Clients <span class="text-gradient">Say</span>
          </h2>
        </header>

        <div class="testimonials-grid">
          ${[
            {
              quote: 'Segun rebuilt our Instagram from the ground up — content pillars, a weekly algorithm, and a visual identity that finally looked like a real brand. Engagement went up sharply within the first month, and for the first time our posts were driving actual sales instead of just likes.',
              name: 'TheFabaBrand',
              role: 'CEO · TheFabaBrand',
              logo: 'THEFABABRAND.png'
            },
            {
              quote: 'What stood out was the thinking behind the numbers. Segun did not just post content — he built a system, explained why each decision worked, and gave us a clear report every month. Our reach and follower quality both improved, and he is genuinely easy to work with.',
              name: 'Cybervast Limited',
              role: 'Director · Cybervast Limited',
              logo: 'CYBERVAST%20LOGO.png'
            },
            {
              quote: 'We needed someone who could handle both the website and the social media side, and most people we spoke to could only do one. Segun handled both. Our new site loads fast, our orders started coming through it, and our daily content is finally consistent.',
              name: 'Vochmal Foods',
              role: 'CEO · Vochmal Foods',
              logo: 'VOCHMAL%20BREAD.png'
            },
          ].map((t, i) => `
          <blockquote class="testimonial-card reveal reveal-delay-${i}" id="testimonial-${i + 1}">
            <p class="testimonial-card__quote">${t.quote}</p>
            <footer class="testimonial-card__author">
              <div class="author-logo">
                <img src="assets/images/brands/${t.logo}" alt="${t.name} logo" loading="lazy">
              </div>
              <div>
                <div class="author-name">${t.name}</div>
                <div class="author-role">${t.role}</div>
              </div>
            </footer>
          </blockquote>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══ CONTACT ═══ -->
    <section class="section" id="contact" aria-labelledby="contact-heading">
      <div class="container">
        <div class="contact-grid">

          <!-- Contact Info -->
          <div class="contact-info">
            <div class="reveal">
              <p class="section__eyebrow">Let's Connect</p>
              <h2 class="contact-info__headline" id="contact-heading">
                Ready to<br>
                <span class="text-gradient">Start Something</span><br>
                Great?
              </h2>
            </div>
            <p class="contact-info__desc reveal reveal-delay-1">
              Whether you need a social media overhaul, a brand-new website, or a strategic digital partner —
              I'd love to hear from you. Let's talk about what we can build together.
            </p>

            <div class="contact-links">
              <a href="mailto:segunsalau5@gmail.com" class="contact-link reveal reveal-delay-1" id="contact-email">
                <div class="contact-link__icon" aria-hidden="true">📧</div>
                <div class="contact-link__text">
                  <div class="contact-link__label">Email</div>
                  <div class="contact-link__value">segunsalau5@gmail.com</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>

              <a href="https://wa.me/2348140153779" target="_blank" rel="noopener noreferrer" class="contact-link reveal reveal-delay-2" id="contact-whatsapp">
                <div class="contact-link__icon" aria-hidden="true">💬</div>
                <div class="contact-link__text">
                  <div class="contact-link__label">WhatsApp</div>
                  <div class="contact-link__value">+234 814 015 3779</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>

              <a href="https://linkedin.com/in/salau-segun" target="_blank" rel="noopener noreferrer" class="contact-link reveal reveal-delay-3" id="contact-linkedin">
                <div class="contact-link__icon" aria-hidden="true">💼</div>
                <div class="contact-link__text">
                  <div class="contact-link__label">LinkedIn</div>
                  <div class="contact-link__value">linkedin.com/in/salau-segun</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>

              <a href="https://instagram.com/salausegun1" target="_blank" rel="noopener noreferrer" class="contact-link reveal reveal-delay-4" id="contact-instagram">
                <div class="contact-link__icon" aria-hidden="true">📸</div>
                <div class="contact-link__text">
                  <div class="contact-link__label">Instagram</div>
                  <div class="contact-link__value">@salausegun1</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="reveal reveal-delay-2">
            <form class="contact-form" id="contact-form" novalidate aria-label="Contact form">
              <h3 style="font-size:1.25rem; font-weight:700; margin-bottom:1.5rem;">Send Me a Message</h3>

              <!-- Honeypot: hidden from people, tempting to bots -->
              <div class="form-hp" aria-hidden="true">
                <label for="contact-website">Leave this field empty</label>
                <input type="text" id="contact-website" name="_gotcha" tabindex="-1" autocomplete="off">
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="contact-name">Full Name *</label>
                  <input class="form-input" type="text" id="contact-name" name="name" placeholder="Your full name" required autocomplete="name" minlength="2" maxlength="80" aria-describedby="err-name">
                  <span class="form-error" id="err-name" aria-live="polite"></span>
                </div>
                <div class="form-group">
                  <label class="form-label" for="contact-email-input">Email Address *</label>
                  <input class="form-input" type="email" id="contact-email-input" name="email" placeholder="your@email.com" required autocomplete="email" maxlength="120" aria-describedby="err-email">
                  <span class="form-error" id="err-email" aria-live="polite"></span>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-service">Service Interested In</label>
                <select class="form-select" id="contact-service" name="service">
                  <option value="" disabled selected>Select a service…</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="web-dev">Web Development</option>
                  <option value="both">Both Services</option>
                  <option value="other">Other / Not Sure Yet</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-budget">Budget Range</label>
                <select class="form-select" id="contact-budget" name="budget">
                  <option value="" disabled selected>Select your budget…</option>
                  <option value="below-500">Below $500</option>
                  <option value="500-1000">$500 – $1,000</option>
                  <option value="1000-3000">$1,000 – $3,000</option>
                  <option value="3000-plus">$3,000+</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-message">Your Message *</label>
                <textarea class="form-textarea" id="contact-message" name="message" placeholder="Tell me about your project, goals, and timeline…" rows="5" required minlength="20" maxlength="2000" aria-describedby="err-message"></textarea>
                <span class="form-error" id="err-message" aria-live="polite"></span>
              </div>

              <p class="form-status" data-form-status role="status" hidden></p>

              <button type="submit" class="btn btn--primary btn--lg form-submit" id="contact-submit">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  `;
}
