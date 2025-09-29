// Body of Work Page JavaScript

// Intersection Observer for animations
const workObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const workObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // For work items, animate directly with styles
            if (entry.target.classList.contains('work-item')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                // For credit years, use the CSS class
                entry.target.classList.add('fade-in-up');
            }
        }
    });
}, workObserverOptions);

// Make section headers visible immediately - no animation needed
document.addEventListener('DOMContentLoaded', () => {
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    });
    
    // Set work items to start hidden for fade-in animation
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Observe work items and credit years for animation
    const animatedElements = document.querySelectorAll('.work-item, .credit-year');
    animatedElements.forEach(el => workObserver.observe(el));
});

// Grammy award hover effects
document.addEventListener('DOMContentLoaded', function() {
    const grammyItems = document.querySelectorAll('.grammy-winner');
    
    grammyItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.05)';
            this.style.boxShadow = '0 15px 40px rgba(255, 215, 0, 0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});