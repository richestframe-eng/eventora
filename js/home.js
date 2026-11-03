

// ===========================================================

function loadFeaturedEvents() {
  const container = document.getElementById("featured-events");
  if (!container) return;

  // 1. Keep only events marked featured, show the 4 soonest
  const featuredEvents = events
    .filter((event) => event.featured)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 4);

  // 2. Nothing to show? Display a friendly message instead of an empty gap
  if (featuredEvents.length === 0) {
    container.innerHTML = `<p class="text-center">No featured events right now.</p>`;
    return;
  }

  // 3. Turn each event into card HTML, join them, and put them on the page
  container.innerHTML = featuredEvents.map(createEventCard).join("");
}

document.addEventListener("DOMContentLoaded", loadFeaturedEvents);