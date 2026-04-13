// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Tab switching
document.querySelectorAll('.prop-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.prop-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Save button toggle
document.querySelectorAll('.prop-save').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
    btn.style.color = btn.textContent === '♥' ? '#e74c3c' : '';
  });
});
