/* ============================================
   Portfolio Website - JavaScript
   ============================================ */

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Initialize all features
    initMobileMenu();
    initContactForm();
    initScrollEffects();
    initProjectCards();
});

/* ============================================
   Mobile Menu Toggle
   ============================================ */

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        }
    });
}

/* ============================================
   Sticky Navigation with Background
   ============================================ */

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(to bottom, rgba(255,255,255,0.98), rgba(255,255,255,0.8))';
        navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.7))';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
    }
});

/* ============================================
   Contact Form Handler
   ============================================ */

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1].value;
            const message = this.querySelector('textarea').value;
            
            // Validate inputs
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
            // Simulate form submission
            console.log({
                name,
                email,
                subject,
                message
            });
            
            // Show success message
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
}

/* ============================================
   Notification System
   ============================================ */

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

/* ============================================
   Scroll Effects
   ============================================ */

function initScrollEffects() {
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            hero.style.backgroundPosition = `0 ${scrollTop * 0.5}px`;
        });
    }
}

/* ============================================
   Project Cards Interactive Effects
   ============================================ */

function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Add hover scale effect
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = projectCards.length - index;
        });
        
        // Add click handler for project buttons
        const demoButton = card.querySelector('.project-button');
        if (demoButton) {
            demoButton.addEventListener('click', function(e) {
                e.preventDefault();
                const projectTitle = card.querySelector('h3').textContent;
                showNotification(`Viewing: ${projectTitle}`, 'info');
            });
        }
    });
}

/* ============================================
   Smooth Scroll Spy (Active Navigation)
   ============================================ */

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = '';
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#667eea';
            link.classList.add('active');
        }
    });
});

/* ============================================
   Add to DOM: Keyframe Animations
   ============================================ */

const styles = document.createElement('style');
styles.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
    
    .skeleton-loading {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
    }
    
    @keyframes loading {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`;

document.head.appendChild(styles);

/* ============================================
   Utility Functions
   ============================================ */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Intersection Observer for lazy loading
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}

/* ============================================
   Print Confirmation
   ============================================ */

console.log('%c🚀 Portfolio Website Loaded Successfully!', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cCreated by: Sophea', 'color: #f5576c; font-size: 14px;');

/* ============================================
   Dynamic Feature Detection
   ============================================ */

// Check if browser supports certain features
const isWebGLSupported = (() => {
    try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
        return false;
    }
})();

const isTouchSupported = () => {
    return (('ontouchstart' in window) || 
            (navigator.maxTouchPoints > 0) || 
            (navigator.msMaxTouchPoints > 0));
};

// Add touch-specific classes if needed
if (isTouchSupported()) {
    document.body.classList.add('touch-enabled');
}

/* ============================================
   Performance Optimization
   ============================================ */

// Lazy load images
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    images.forEach(image => {
        const img = new Image();
        img.onload = () => {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
        };
        img.src = image.dataset.src;
    });
};

// Cleanup function
window.addEventListener('beforeunload', () => {
    // Cleanup event listeners and timers
    console.log('Cleaning up resources...');
});

/* ============================================
   Accessibility Features
   ============================================ */

// Add skip to main content link functionality
const setupAccessibility = () => {
    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Press 'S' + 'M' for skip to main content
        if (e.key === 's' && e.ctrlKey) {
            e.preventDefault();
            document.querySelector('main')?.focus();
        }
    });
};

setupAccessibility();
