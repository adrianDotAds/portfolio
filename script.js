
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
// Navbar background opacity on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
     if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 32, 44, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 32, 44, 0.95)';
    }
});
// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
     rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
             entry.target.classList.add('visible');
        }
    });
}, observerOptions);
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});
 // Form submission handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
     
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});
// Add dynamic typing effect to hero section
const heroTitle = document.querySelector('.hero h1');
const originalText = heroTitle.textContent;
 
function typeWriter(element, text, speed = 100) {
    element.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}
// Start typing animation after page load
window.addEventListener('load', () => {
    setTimeout(() => {
         typeWriter(heroTitle, originalText, 150);
    }, 1000);
});
// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
     const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && scrolled < hero.offsetHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
// Add hover effects to skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
         this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});
// Animated counter for skills or stats (if you want to add numbers)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
     const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
 });
// Add mobile menu toggle (basic implementation)
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
         const navbar = document.querySelector('.nav-container');
        const hamburger = document.createElement('div');
        hamburger.innerHTML = '☰';
        hamburger.style.cssText = `
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            display: block;
        `;
        
        hamburger.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = 'rgba(26, 32, 44, 0.98)';
            navMenu.style.padding = '1rem';
        });
        
        navbar.appendChild(hamburger);
    }
};
// Initialize mobile menu on load and resize
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', () => {
     if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'row';
        navMenu.style.position = 'static';
        navMenu.style.background = 'none';
    }
});
//BG Animation