// Scroll reveal
const slides = document.querySelectorAll(".hero-slideshow .slide");
let current = 0;

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((el) => observer.observe(el));

// Progress bars
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".progress-fill").forEach((bar) => {
          bar.style.width = bar.dataset.width + "%";
        });
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);
document
  .querySelectorAll(".about-visual")
  .forEach((el) => barObserver.observe(el));

// Donate amount selector
function selectAmount(el) {
  document
    .querySelectorAll(".amount-btn")
    .forEach((b) => b.classList.remove("active"));
  el.classList.add("active");
}

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 3000);
