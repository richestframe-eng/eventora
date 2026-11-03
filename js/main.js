// ===========================================================
// Eventora - Shared JavaScript (runs on every page)
// Builds the navbar and footer, handles the mobile menu,
// highlights the current page's link, and holds shared helpers.
// ===========================================================


// ---------- 1. Build the navbar ----------
function loadNavbar() {
  const header = document.getElementById("site-header");
  if (!header) return; // This page has no header placeholder

  header.innerHTML = `
    <nav class="navbar" aria-label="Main navigation">
      <div class="container navbar__inner">
        <a href="index.html" class="navbar__logo">Event<span>ora</span></a>

        <button class="navbar__toggle" id="nav-toggle"
                aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="navbar__menu" id="nav-menu">
          <li><a href="index.html" class="navbar__link" data-page="index">Home</a></li>
          <li><a href="events.html" class="navbar__link" data-page="events">Events</a></li>
        </ul>
      </div>
    </nav>
  `;
}


// ---------- 2. Build the footer ----------
function loadFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return; // This page has no footer placeholder

  const year = new Date().getFullYear();

  footer.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div>
          <a href="index.html" class="footer__logo">Event<span>ora</span></a>
          <p>Discover, explore and register for the best upcoming events,
             all in one place.</p>
        </div>

        <div>
          <h3 class="footer__title">Quick Links</h3>
          <ul class="footer__links">
            <li><a href="index.html">Home</a></li>
            <li><a href="events.html">All Events</a></li>
          </ul>
        </div>

        <div>
          <h3 class="footer__title">Contact</h3>
          <ul class="footer__links">
            <li>hello@eventora.example</li>
            <li>+00 000 000 0000</li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        &copy; ${year} Eventora. All rights reserved.
      </div>
    </div>
  `;
}


// ---------- 3. Mobile menu (hamburger) ----------
function setupMobileMenu() {
  const toggleBtn = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggleBtn || !menu) return;

  // Open or close the menu when the hamburger is clicked
  toggleBtn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggleBtn.classList.toggle("is-open", isOpen);
    toggleBtn.setAttribute("aria-expanded", isOpen);
  });

  // Close the menu after a link is clicked
  menu.querySelectorAll(".navbar__link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggleBtn.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}


// ---------- 4. Highlight the current page's link ----------
function highlightActiveLink() {
  // Get the file name from the URL, without ".html"
  // (Netlify can show "/events" instead of "/events.html")
  let page = window.location.pathname.split("/").pop().replace(".html", "");

  if (page === "") page = "index";      // "/" means the home page
  if (page === "event") page = "events"; // details page counts as "Events"

  document.querySelectorAll(".navbar__link").forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}


// ---------- 5. Shared helpers (used by more than one page) ----------

// "2026-11-21T10:00:00"  ->  "Sat, Nov 21, 2026"
function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

// "2026-11-21T10:00:00"  ->  "10:00 AM"
function formatTime(isoString) {
  return new Date(isoString).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });
}

// Builds the HTML for ONE event card (used on the homepage and Events page).
// If an image file is missing, "onerror" hides it so the gradient shows instead.
function createEventCard(event) {
  return `
    <article class="event-card">
      <div class="event-card__image-wrap">
        <img class="event-card__image" src="${event.image}" alt="${event.name}"
             loading="lazy" onerror="this.classList.add('img-error')">
        <span class="badge event-card__badge">${event.category}</span>
      </div>

      <div class="event-card__body">
        <h3 class="event-card__title">${event.name}</h3>

        <ul class="event-card__meta">
          <li><span aria-hidden="true">📅</span> ${formatDate(event.date)} &middot; ${formatTime(event.date)}</li>
          <li><span aria-hidden="true">📍</span> ${event.venue}</li>
        </ul>

        <p class="event-card__text">${event.shortDescription}</p>

        <a href="event.html?id=${event.id}" class="event-card__link">View Details &rarr;</a>
      </div>
    </article>
  `;
}


// ---------- Start everything when the page is ready ----------
document.addEventListener("DOMContentLoaded", () => {
  loadNavbar();           // must run first: later steps need the navbar to exist
  loadFooter();
  setupMobileMenu();
  highlightActiveLink();
});