/* =========================================================
   PRISHA CLINIC — Shared chrome + interactions
   ========================================================= */

const NAV_ITEMS = [
  { href: "index.html",    label: "Home" },
  { href: "about.html",    label: "About" },
  { href: "services.html", label: "Services" },
  { href: "contact.html",  label: "Contact" },
];

const HEADER_HTML = `
<div class="topbar">
  <div class="container">
    <div>
      <span class="hindi">सोम–रवि</span>
      <span style="opacity:0.8"> · Mon–Sun · 9:00 — 21:00</span>
      <span class="sep">·</span>
      <span>Bawadia Kalan, Bhopal</span>
      <span class="sep">·</span>
      <span id="open-status" data-open-status>—</span>
    </div>
    <div>
      <a href="tel:+917980043162">+91 79800 43162</a>
      <span class="sep">·</span>
      <a href="mailto:mrdl.gpt@gmail.com">mrdl.gpt@gmail.com</a>
    </div>
  </div>
</div>
<header class="site-header" id="site-header">
  <div class="container">
    <a href="index.html" class="brand" aria-label="Prisha Clinic — home">
      <span class="brand-mark"><img src="assets/images/logo.jpg" alt=""></span>
      <span>
        <span class="brand-name">Prisha</span>
        <span class="brand-sub">Speech &amp; Hearing · Bhopal</span>
      </span>
    </a>
    <nav class="nav" aria-label="Primary">
      ${NAV_ITEMS.map(n => `<a class="nav-link" href="${n.href}">${n.label}</a>`).join("")}
      <a class="nav-cta" href="contact.html">Book consultation</a>
    </nav>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="mobile-menu" aria-label="Menu"><span></span></button>
  </div>
</header>
<div class="mobile-menu" id="mobile-menu" role="dialog" aria-label="Menu">
  ${NAV_ITEMS.map(n => `<a href="${n.href}">${n.label}</a>`).join("")}
  <a href="contact.html" class="cta">Book consultation →</a>
  <div style="margin-top:24px; font-size:14px; color: var(--mute);">
    <a href="tel:+917980043162" style="display:block; padding:6px 0;">+91 79800 43162</a>
    <a href="https://wa.me/917980043162" style="display:block; padding:6px 0;">WhatsApp →</a>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-marigold-line"></div>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="brand" style="margin-bottom:18px;">
          <span class="brand-mark" style="background:#fff;"><img src="assets/images/logo.jpg" alt=""></span>
          <span>
            <span class="brand-name" style="color:#fff;">Prisha</span>
            <span class="brand-sub" style="color:rgba(255,255,255,0.6);">Speech &amp; Hearing · since 2009</span>
          </span>
        </div>
        <p style="font-size:14px; line-height:1.65; color:rgba(255,255,255,0.6); max-width:30ch;">
          A small, careful practice in Bawadia Kalan led by Dr. Mridula Rani and Dr. Prashant.
          ADIP-certified cochlear implant centre.
        </p>
        <div style="margin-top:22px; display:flex; gap:10px;">
          <a href="https://www.instagram.com/prishaclinic_/" target="_blank" rel="noopener" aria-label="Instagram" class="social">IG</a>
          <a href="https://www.facebook.com/profile.php?id=61578853131643" target="_blank" rel="noopener" aria-label="Facebook" class="social">FB</a>
          <a href="https://www.youtube.com/@prisha_clinic_bhopal" target="_blank" rel="noopener" aria-label="YouTube" class="social">YT</a>
          <a href="https://wa.me/917980043162" target="_blank" rel="noopener" aria-label="WhatsApp" class="social">WA</a>
        </div>
      </div>
      <div>
        <h4>Visit</h4>
        <ul>
          <li>B49 Jai Bhawani Society</li>
          <li>Near Galaxy Towers</li>
          <li>Bawadia Kalan, Bhopal — 462026</li>
          <li style="margin-top:8px;"><a href="https://www.google.com/maps/place/Prisha+Speech+Therapy+And+Hearing+Clinic/@23.1869929,77.4346639,17z" target="_blank" rel="noopener">Get directions →</a></li>
        </ul>
      </div>
      <div>
        <h4>Care</h4>
        <ul>
          <li><a href="services.html#speech">Speech therapy</a></li>
          <li><a href="services.html#audiometry">Audiometry &amp; BERA</a></li>
          <li><a href="services.html#hearing-aids">Hearing aids</a></li>
          <li><a href="services.html#cochlear">Cochlear implant</a></li>
        </ul>
      </div>
      <div>
        <h4>Reach us</h4>
        <ul>
          <li><a href="tel:+917980043162">+91 79800 43162</a></li>
          <li><a href="mailto:mrdl.gpt@gmail.com">mrdl.gpt@gmail.com</a></li>
          <li>Mon–Sun · 9:00 — 21:00</li>
          <li>Consultation: ₹500</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Prisha Speech &amp; Hearing Clinic · All rights reserved</span>
      <span>Rated 4.8★ · 169 reviews</span>
    </div>
  </div>
</footer>
<style>
  .site-footer .social {
    width: 34px; height: 34px;
    border-radius: 50%;
    background: rgba(255,255,255,0.06);
    display: inline-flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 600; letter-spacing: 0.06em;
    color: #fff !important;
    border: 1px solid rgba(255,255,255,0.1);
    transition: background 0.18s, border-color 0.18s;
  }
  .site-footer .social:hover { background: var(--marigold); border-color: var(--marigold); }
</style>
`;

const WHATS_HTML = `
<a class="wa-float" href="https://wa.me/917980043162" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A12 12 0 003.48 20.52L2 22l1.55-1.43A12 12 0 1020.52 3.48zM12 21.3a9.3 9.3 0 01-4.74-1.3l-.34-.2-3.05.8.81-2.97-.22-.34A9.3 9.3 0 1112 21.3zm5.1-6.8c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.2.28-.74.91-.91 1.1-.17.18-.34.2-.62.07-.28-.14-1.18-.43-2.26-1.39-.84-.74-1.4-1.66-1.57-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.19-.28.28-.47.1-.18.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.1-.23-.55-.46-.48-.64-.48-.16-.01-.35-.01-.54-.01-.18 0-.49.07-.74.34-.25.28-.97.95-.97 2.32 0 1.37 1 2.69 1.14 2.88.14.18 1.96 3.01 4.76 4.22.66.29 1.18.46 1.59.59.67.21 1.27.18 1.75.11.53-.08 1.66-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.25-.18-.53-.32z"/></svg>
  <span>WhatsApp us</span>
</a>
`;

document.addEventListener("DOMContentLoaded", () => {
  injectChrome();
  highlightActiveNav();
  initBurger();
  initStickyHeader();
  initReveal();
  initFAQ();
  initAppointmentForm();
  initOpenStatus();
});

function injectChrome() {
  const headerSlot = document.getElementById("header-slot");
  const footerSlot = document.getElementById("footer-slot");
  if (headerSlot) headerSlot.outerHTML = HEADER_HTML;
  if (footerSlot) footerSlot.outerHTML = FOOTER_HTML;
  if (!document.querySelector(".wa-float")) {
    document.body.insertAdjacentHTML("beforeend", WHATS_HTML);
  }
}

function highlightActiveNav() {
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-link, .mobile-menu a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === page || (page === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
}

function initBurger() {
  const b = document.getElementById("burger");
  const m = document.getElementById("mobile-menu");
  if (!b || !m) return;
  b.addEventListener("click", () => {
    const open = m.classList.toggle("open");
    b.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  m.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    m.classList.remove("open");
    b.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }));
}

function initStickyHeader() {
  const h = document.getElementById("site-header");
  if (!h) return;
  const update = () => h.classList.toggle("scrolled", window.scrollY > 8);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.visible)").forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add("visible");
    });
  }, 1200);
}

function initFAQ() {
  document.querySelectorAll("[data-faq] details").forEach(d => {
    d.addEventListener("toggle", () => {
      if (d.open) {
        d.parentElement.querySelectorAll("details").forEach(o => {
          if (o !== d) o.open = false;
        });
      }
    });
  });
}

function initAppointmentForm() {
  const form = document.getElementById("appt-form");
  if (!form) return;
  const dateInput = form.querySelector('input[type="date"]');
  if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll(".field").forEach(f => f.classList.remove("error"));

    const name  = form.querySelector('[name="name"]');
    const phone = form.querySelector('[name="phone"]');
    const date  = form.querySelector('[name="date"]');
    const svc   = form.querySelector('[name="service"]');

    if (!name.value.trim()) { name.closest(".field").classList.add("error"); ok = false; }
    if (!/^\d{10}$/.test((phone.value || "").trim())) { phone.closest(".field").classList.add("error"); ok = false; }
    if (date && !date.value) { date.closest(".field").classList.add("error"); ok = false; }
    if (svc && !svc.value)  { svc.closest(".field").classList.add("error"); ok = false; }

    if (!ok) return;

    const success = document.getElementById("form-success");
    if (success) {
      success.style.display = "block";
      form.style.display = "none";
      success.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  });
}

function initOpenStatus() {
  const el = document.querySelector("[data-open-status]");
  if (!el) return;
  const now = new Date();
  const ist = new Date(now.getTime() + (now.getTimezoneOffset() + 330) * 60000);
  const h = ist.getHours();
  const open = h >= 9 && h < 21;
  el.innerHTML = open
    ? `<span style="color:#9be3b9; font-weight:500;">● Open now</span>`
    : `<span style="color:#f7c4a1;">○ Closed · opens 9:00</span>`;
}
