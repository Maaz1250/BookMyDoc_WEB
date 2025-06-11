// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Enhanced navbar behavior
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  
  // Add shadow to navbar on scroll
  if (scrollTop > 50) {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Parallax effect for floating SVG
const floatingSvg = document.querySelector('.floating-svg');
window.addEventListener('scroll', function() {
  if (floatingSvg) {
    const y = window.scrollY;
    floatingSvg.style.transform = `translateY(${y * 0.15}px)`;
  }
});
