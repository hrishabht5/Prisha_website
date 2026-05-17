/* ===== SHARED HEADER ===== */
const HEADER_HTML = `
<div id="top-strip">
  <div class="top-strip-inner">
    <div class="top-strip-left">
      <span class="top-strip-item">&#128336; Mon&ndash;Sun: 9:00 AM &ndash; 9:00 PM</span>
      <span class="top-strip-item">&#128205; Bawadia Kalan, Bhopal &ndash; 462026</span>
    </div>
    <div class="top-strip-right">
      <a href="tel:+917980043162" class="top-strip-item">&#128222; +91 79800 43162</a>
      <a href="mailto:mrdl.gpt@gmail.com" class="top-strip-item">&#128140; mrdl.gpt@gmail.com</a>
      <div class="strip-social">
        <a href="https://www.instagram.com/prishaclinic_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">&#128247;</a>
        <a href="https://www.facebook.com/profile.php?id=61578853131643" target="_blank" rel="noopener noreferrer" aria-label="Facebook">&#128100;</a>
        <a href="https://www.youtube.com/@prisha_clinic_bhopal" target="_blank" rel="noopener noreferrer" aria-label="YouTube">&#127909;</a>
        <a href="https://wa.me/917980043162" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">&#128172;</a>
      </div>
    </div>
  </div>
</div>
<header id="site-header">
  <nav class="navbar container">
    <a href="index.html" class="logo" aria-label="Prisha Clinic Home">
      <img src="assets/images/logo.jpg" alt="Prisha Speech Therapy and Hearing Clinic" class="logo-img">
      <div class="logo-text">Prisha <span>Speech Therapy &amp; Hearing Clinic</span></div>
    </a>
    <button id="burger" aria-label="Toggle navigation menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <ul id="nav-menu" role="list">
      <li><a href="index.html" class="nav-link">Home</a></li>
      <li><a href="about.html" class="nav-link">About Us</a></li>
      <li><a href="services.html" class="nav-link">Services</a></li>
      <li><a href="contact.html" class="nav-link cta-nav">Book Appointment</a></li>
    </ul>
  </nav>
</header>`;

/* ===== SHARED FOOTER ===== */
const FOOTER_HTML = `
<footer id="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col footer-brand">
        <img src="assets/images/logo.jpg" alt="Prisha Clinic" style="height:52px;border-radius:6px;margin-bottom:0.75rem;background:white;padding:4px;">
        <p>Compassionate, expert speech therapy and hearing care for all ages in Bhopal, Madhya Pradesh.</p>
        <div class="footer-social" style="margin-top:1rem;">
          <a href="https://www.instagram.com/prishaclinic_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">&#128247;</a>
          <a href="https://www.facebook.com/profile.php?id=61578853131643" target="_blank" rel="noopener noreferrer" aria-label="Facebook">&#128100;</a>
          <a href="https://www.youtube.com/@prisha_clinic_bhopal" target="_blank" rel="noopener noreferrer" aria-label="YouTube">&#127909;</a>
          <a href="https://wa.me/917980043162" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">&#128172;</a>
          <a href="tel:+917980043162" aria-label="Call us">&#128222;</a>
          <a href="mailto:mrdl.gpt@gmail.com" aria-label="Email us">&#128140;</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Dr. Mridula Rani</a></li>
          <li><a href="services.html">Our Services</a></li>
          <li><a href="contact.html">Book Appointment</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Our Services</h4>
        <ul>
          <li><a href="services.html#speech">Speech Therapy</a></li>
          <li><a href="services.html#audiometry">Audiometry &amp; Hearing Tests</a></li>
          <li><a href="services.html#hearing-aids">Hearing Aids &amp; Fitting</a></li>
          <li><a href="services.html#cochlear">Cochlear Implant Therapy</a></li>
          <li><a href="contact.html">General Consultation &#8377;500</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Us</h4>
        <ul>
          <li>&#128205; B49 Jai Bhawani Society, Near Galaxy Towers, Bawadia Kalan, Bhopal &ndash; 462026</li>
          <li>&#128222; <a href="tel:+917980043162">+91 79800 43162</a></li>
          <li>&#128140; <a href="mailto:mrdl.gpt@gmail.com">mrdl.gpt@gmail.com</a></li>
          <li>&#128336; Mon&ndash;Sun: 9:00 AM &ndash; 9:00 PM</li>
          <li>&#128247; <a href="https://www.instagram.com/prishaclinic_/" target="_blank" rel="noopener noreferrer">@prishaclinic_</a></li>
          <li>&#128100; <a href="https://www.facebook.com/profile.php?id=61578853131643" target="_blank" rel="noopener noreferrer">Facebook Page</a></li>
          <li>&#127909; <a href="https://www.youtube.com/@prisha_clinic_bhopal" target="_blank" rel="noopener noreferrer">YouTube Channel</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Prisha Speech Therapy &amp; Hearing Clinic, Bhopal &mdash; All rights reserved &bull; Rated 4.8&#9733; on Justdial</p>
    </div>
  </div>
</footer>`;

/* ===== WHATSAPP FLOAT ===== */
const WHATSAPP_HTML = `
<a href="https://wa.me/917980043162" class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>`;

/* ===== INJECT & INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.getElementById('header-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (headerEl) headerEl.outerHTML = HEADER_HTML;
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;
  document.body.insertAdjacentHTML('beforeend', WHATSAPP_HTML);

  setActiveNav();
  initBurger();
  initStickyHeader();
  initScrollAnimations();
  initCounters();
  initFAQ();
  initContactForm();
  initSuccessMessage();
  initHeroParallax();
  initTestimonialsCarousel();
  initUnderlineDraw();
});

/* ===== ACTIVE NAV ===== */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ===== HAMBURGER ===== */
function initBurger() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('nav-menu');
  if (!burger || !menu) return;

  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });

  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    })
  );
}

/* ===== STICKY HEADER SHADOW ===== */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ===== SCROLL ANIMATIONS ===== */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.animate-on-scroll, .animate-from-left, .animate-from-right').forEach(el => observer.observe(el));
}

/* ===== ANIMATED COUNTERS ===== */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1800;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current) + suffix;
        if (current >= target) clearInterval(timer);
      }, 16);
    });
  }, { threshold: 0.4 });

  counters.forEach(el => observer.observe(el));
}

/* ===== FAQ ACCORDION ===== */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer').style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* ===== CONTACT FORM VALIDATION ===== */
function initContactForm() {
  const form = document.getElementById('appt-form');
  const dateInput = document.getElementById('appt-date');

  if (dateInput) {
    dateInput.min = new Date().toISOString().split('T')[0];
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    let valid = true;

    const nameInput = document.getElementById('appt-name');
    const phoneInput = document.getElementById('appt-phone');
    const serviceInput = document.getElementById('appt-service');

    clearErrors(form);

    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your full name.');
      valid = false;
    }

    if (!/^\d{10}$/.test(phoneInput.value.trim())) {
      showError(phoneInput, 'Please enter a valid 10-digit phone number.');
      valid = false;
    }

    if (dateInput && dateInput.value) {
      const picked = new Date(dateInput.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (picked < today) {
        showError(dateInput, 'Please select today or a future date.');
        valid = false;
      }
    } else if (dateInput) {
      showError(dateInput, 'Please select a preferred appointment date.');
      valid = false;
    }

    if (!serviceInput.value) {
      showError(serviceInput, 'Please select a service.');
      valid = false;
    }

    if (!valid) e.preventDefault();
  });
}

function showError(input, msg) {
  input.classList.add('error');
  const span = document.createElement('span');
  span.className = 'form-error';
  span.textContent = msg;
  input.parentElement.appendChild(span);
}

function clearErrors(form) {
  form.querySelectorAll('.form-error').forEach(el => el.remove());
  form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
}

/* ===== ANIMATION 3: HERO PARALLAX ===== */
function initHeroParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const content = document.querySelector('.hero-content');
  if (!content) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroHeight = content.closest('.hero').offsetHeight;
        if (scrollY < heroHeight) {
          content.style.transform = `translateY(${scrollY * 0.25}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ===== ANIMATION 4: TESTIMONIALS CAROUSEL ===== */
function initTestimonialsCarousel() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  Array.from(track.children).forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
}

/* ===== ANIMATION 5: SECTION UNDERLINE DRAW ===== */
function initUnderlineDraw() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('title-visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.section-title').forEach(el => observer.observe(el));
}

/* ===== FORMSPREE SUCCESS ===== */
function initSuccessMessage() {
  const successDiv = document.getElementById('form-success');
  if (successDiv && window.location.search.includes('success=true')) {
    successDiv.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
