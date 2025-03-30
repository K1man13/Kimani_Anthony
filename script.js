// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Scroll Animations (Fade-in Effect)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// Theme Toggle (Light/Dark Mode)
const toggleTheme = document.getElementById('theme-toggle');
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Typewriter Effect for Intro Text
const text = "I'm a Web Designer, Photographer, Mentor, Developer & Founder";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// Interactive Image Hover Effects
document.querySelectorAll('.project-card img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Fun Button Wiggle Effect on Hover
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'rotate(3deg)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'rotate(0)';
    });
});

// Dynamic Content Loading (AJAX)
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Floating Particles Background
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded');
});
