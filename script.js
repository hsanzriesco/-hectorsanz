// Animación sencilla de aparición al entrar en pantalla
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .timeline-item, .edu-card, .skill").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
