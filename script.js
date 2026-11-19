const sections = [...document.querySelectorAll('section[id]')];
const navButtons = [...document.querySelectorAll('.chapter-nav button')];
const revealItems = [...document.querySelectorAll('.reveal')];
let currentIndex = 0;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      const id = entry.target.id;
      const idx = sections.findIndex(sec => sec.id === id);
      if (idx !== -1) {
        currentIndex = idx;
        navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.target === id));
      }
    }
  });
}, { threshold: 0.3 });

revealItems.forEach(item => observer.observe(item));

function goToIndex(idx){
  const safe = Math.max(0, Math.min(sections.length - 1, idx));
  sections[safe].scrollIntoView({ behavior: 'smooth', block: 'start' });
}

navButtons.forEach(btn => btn.addEventListener('click', () => {
  const idx = sections.findIndex(sec => sec.id === btn.dataset.target);
  goToIndex(idx);
}));

document.getElementById('prevBtn').addEventListener('click', () => goToIndex(currentIndex - 1));
document.getElementById('nextBtn').addEventListener('click', () => goToIndex(currentIndex + 1));

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') goToIndex(currentIndex + 1);
  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') goToIndex(currentIndex - 1);
});


// Keep the design readable even when a third-party image host blocks hotlinking.
document.querySelectorAll('.company-logo-card img, .yawn-photo img').forEach(img => {
  img.addEventListener('error', () => img.parentElement?.classList.add('image-unavailable'), { once: true });
  if (img.complete && img.naturalWidth === 0) img.parentElement?.classList.add('image-unavailable');
});
