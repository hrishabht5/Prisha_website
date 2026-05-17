/* ===== SHARED HEADER ===== */
const HEADER_HTML = `
<div class="bg-[#0090A8] text-white text-xs py-1.5 hidden md:block">
  <div class="max-w-6xl mx-auto px-4 flex justify-between items-center">
    <span>Mon&ndash;Sun: 9:00 AM &ndash; 9:00 PM &nbsp;&bull;&nbsp; Bawadia Kalan, Bhopal</span>
    <div class="flex gap-5">
      <a href="tel:+917980043162" class="hover:text-[#F5A623] transition-colors">+91 79800 43162</a>
      <a href="mailto:mrdl.gpt@gmail.com" class="hover:text-[#F5A623] transition-colors">mrdl.gpt@gmail.com</a>
    </div>
  </div>
</div>
<header id="site-header" class="sticky top-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-300">
  <nav class="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
    <a href="index.html" class="flex items-center gap-3 flex-shrink-0">
      <img src="assets/images/logo.jpg" alt="Prisha Clinic" class="h-10 w-auto rounded">
      <div class="leading-tight">
        <span class="font-bold text-gray-900 text-sm block">Prisha</span>
        <span class="text-xs text-gray-500 font-normal">Speech Therapy &amp; Hearing Clinic</span>
      </div>
    </a>
    <button id="burger" aria-label="Toggle navigation menu" aria-expanded="false"
      class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex flex-col gap-1.5">
      <span class="block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300"></span>
      <span class="block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300"></span>
      <span class="block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300"></span>
    </button>
    <ul id="nav-menu" role="list" class="hidden md:flex items-center gap-1 text-sm font-medium">
      <li><a href="index.html" class="nav-link px-3 py-2 rounded-lg text-gray-700 hover:text-[#0090A8] hover:bg-cyan-50 transition-colors block">Home</a></li>
      <li><a href="about.html" class="nav-link px-3 py-2 rounded-lg text-gray-700 hover:text-[#0090A8] hover:bg-cyan-50 transition-colors block">About Us</a></li>
      <li><a href="services.html" class="nav-link px-3 py-2 rounded-lg text-gray-700 hover:text-[#0090A8] hover:bg-cyan-50 transition-colors block">Services</a></li>
      <li><a href="contact.html" class="nav-link ml-2 px-4 py-2 rounded-full bg-[#EC1E8C] text-white hover:bg-pink-700 transition-colors block text-center">Book Appointment</a></li>
    </ul>
  </nav>
  <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2">
    <a href="index.html" class="nav-link block py-3 text-gray-700 border-b border-gray-50 hover:text-[#0090A8] transition-colors text-sm font-medium">Home</a>
    <a href="about.html" class="nav-link block py-3 text-gray-700 border-b border-gray-50 hover:text-[#0090A8] transition-colors text-sm font-medium">About Us</a>
    <a href="services.html" class="nav-link block py-3 text-gray-700 border-b border-gray-50 hover:text-[#0090A8] transition-colors text-sm font-medium">Services</a>
    <a href="contact.html" class="nav-link mt-3 px-4 py-2.5 rounded-full bg-[#EC1E8C] text-white text-center block hover:bg-pink-700 transition-colors text-sm font-medium">Book Appointment</a>
  </div>
</header>`;

/* ===== SHARED FOOTER ===== */
const FOOTER_HTML = `
<footer class="bg-[#0e2d45] text-white" id="site-footer">
  <div class="max-w-6xl mx-auto px-4 py-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <img src="assets/images/logo.jpg" alt="Prisha Clinic" class="h-11 w-auto rounded bg-white p-0.5">
          <div>
            <span class="font-bold text-white text-sm block">Prisha Clinic</span>
            <span class="text-xs text-gray-400">Est. 2009 &bull; ADIP Certified</span>
          </div>
        </div>
        <p class="text-sm text-gray-400 leading-relaxed mb-4">Speech therapy and hearing care for all ages in Bhopal, Madhya Pradesh. Open 7 days, 9 AM &ndash; 9 PM.</p>
        <div class="flex gap-2.5">
          <a href="https://www.instagram.com/prishaclinic_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-[#EC1E8C] transition-colors">&#128247;</a>
          <a href="https://www.facebook.com/profile.php?id=61578853131643" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-[#EC1E8C] transition-colors">&#128100;</a>
          <a href="https://www.youtube.com/@prisha_clinic_bhopal" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
            class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-[#EC1E8C] transition-colors">&#127909;</a>
          <a href="https://wa.me/917980043162" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
            class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-[#25D366] transition-colors">&#128172;</a>
        </div>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm">Quick Links</h4>
        <ul class="space-y-2.5 text-sm text-gray-400">
          <li><a href="index.html" class="hover:text-[#EC1E8C] transition-colors">Home</a></li>
          <li><a href="about.html" class="hover:text-[#EC1E8C] transition-colors">About Dr. Mridula Rani</a></li>
          <li><a href="services.html" class="hover:text-[#EC1E8C] transition-colors">Our Services</a></li>
          <li><a href="contact.html" class="hover:text-[#EC1E8C] transition-colors">Book Appointment</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm">Our Services</h4>
        <ul class="space-y-2.5 text-sm text-gray-400">
          <li><a href="services.html#speech" class="hover:text-[#EC1E8C] transition-colors">Speech Therapy</a></li>
          <li><a href="services.html#audiometry" class="hover:text-[#EC1E8C] transition-colors">Audiometry &amp; Hearing Tests</a></li>
          <li><a href="services.html#hearing-aids" class="hover:text-[#EC1E8C] transition-colors">Hearing Aids &amp; Fitting</a></li>
          <li><a href="services.html#cochlear" class="hover:text-[#EC1E8C] transition-colors">Cochlear Implant Therapy</a></li>
          <li><a href="contact.html" class="hover:text-[#EC1E8C] transition-colors">General Consultation &#8377;500</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm">Contact</h4>
        <ul class="space-y-2.5 text-sm text-gray-400">
          <li>B49 Jai Bhawani Society, Near Galaxy Towers, Bawadia Kalan, Bhopal &ndash; 462026</li>
          <li><a href="tel:+917980043162" class="hover:text-[#EC1E8C] transition-colors">+91 79800 43162</a></li>
          <li><a href="mailto:mrdl.gpt@gmail.com" class="hover:text-[#EC1E8C] transition-colors">mrdl.gpt@gmail.com</a></li>
          <li>Mon&ndash;Sun: 9:00 AM &ndash; 9:00 PM</li>
          <li><a href="https://www.instagram.com/prishaclinic_/" target="_blank" rel="noopener noreferrer" class="hover:text-[#EC1E8C] transition-colors">@prishaclinic_ on Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10 pt-6 text-center text-xs text-gray-500">
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
      link.style.color = '#0090A8';
      link.style.fontWeight = '700';
    }
  });
}

/* ===== HAMBURGER ===== */
function initBurger() {
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', isOpen);
    burger.setAttribute('aria-expanded', String(!isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      burger.setAttribute('aria-expanded', 'false');
    })
  );
}

/* ===== STICKY HEADER SHADOW ===== */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('shadow-md', window.scrollY > 50);
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

/* ===== HERO PARALLAX ===== */
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

/* ===== TESTIMONIALS CAROUSEL ===== */
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

/* ===== SECTION UNDERLINE DRAW ===== */
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
