/*
  main.js - Professional Resume Website Enhancements
  Author: Gourav Kewat
  Purpose: Adds smooth navigation, animations, theme toggle, and UI polish
*/

// ========== Smooth Scroll for Internal Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ========== Back to Top Button ==========
const backToTop = document.createElement('button');
backToTop.innerText = "↑ Top";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";
backToTop.style.padding = "10px 15px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50px";
backToTop.style.backgroundColor = "#2c3e50";
backToTop.style.color = "white";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== Fade-in Animation on Scroll ==========
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, h1, h2, p, ul').forEach(el => {
  el.classList.add('fade-hidden');
  observer.observe(el);
});

// ========== Typing Effect for Name (Hero Heading) ==========
function typeEffect(element, speed = 100) {
  const text = element.innerText;
  element.innerText = "";
  let i = 0;

  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerText += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

window.addEventListener('load', () => {
  const mainHeading = document.querySelector('h1');
  if (mainHeading) {
    typeEffect(mainHeading, 80);
  }
});

// ========== Dark / Light Mode Toggle ==========
const themeToggle = document.createElement('button');
themeToggle.innerText = "🌙 Dark Mode";
themeToggle.id = "themeToggle";
document.body.appendChild(themeToggle);

themeToggle.style.position = "fixed";
themeToggle.style.top = "20px";
themeToggle.style.right = "30px";
themeToggle.style.padding = "8px 12px";
themeToggle.style.border = "none";
themeToggle.style.borderRadius = "6px";
themeToggle.style.backgroundColor = "#0066cc";
themeToggle.style.color = "white";
themeToggle.style.cursor = "pointer";

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.innerText = "☀ Light Mode";
  } else {
    themeToggle.innerText = "🌙 Dark Mode";
  }
});

// ========== Active Navigation Highlight ==========
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 100;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// ========== Console Branding ==========
console.log("Resume Website - Gourav Kewat | Powered by GitHub Pages");
