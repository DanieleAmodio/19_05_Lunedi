document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('row-visible');
        observer.unobserve(entry.target); // Rimuove l'osservazione dopo la prima entrata
      }
    });
  }, {
    threshold: 0.7
  });

  document.querySelectorAll('.row-hidden').forEach(row => {
    observer.observe(row);
  });
});

