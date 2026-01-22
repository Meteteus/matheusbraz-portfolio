// Discography Filter Functionality with Smooth Animations
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const discographyCards = document.querySelectorAll('.discography-card');
    const grid = document.getElementById('discography-grid');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Add transition class to grid for smooth rearrangement
            grid.classList.add('filtering');
            
            // First, fade out items that will be hidden
            discographyCards.forEach((card, index) => {
                const roles = card.getAttribute('data-roles');
                const shouldShow = filter === 'all' || (roles && roles.includes(filter));
                
                if (!shouldShow && card.style.display !== 'none') {
                    // Fade out items that will be hidden
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
            
            // Then, show and animate items that should be visible
            setTimeout(() => {
                let visibleIndex = 0;
                discographyCards.forEach((card, index) => {
                    const roles = card.getAttribute('data-roles');
                    const shouldShow = filter === 'all' || (roles && roles.includes(filter));
                    
                    if (shouldShow) {
                        card.style.display = '';
                        // Reset transform for animation
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8) translateY(20px)';
                        
                        // Stagger the animation
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1) translateY(0)';
                        }, visibleIndex * 30);
                        
                        visibleIndex++;
                    }
                });
                
                // Remove filtering class after animation completes
                setTimeout(() => {
                    grid.classList.remove('filtering');
                }, visibleIndex * 30 + 300);
            }, 300);
        });
    });
});

// Initial smooth animations for discography cards on page load
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.discography-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 30);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px) scale(0.95)';
        card.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(card);
    });
});
