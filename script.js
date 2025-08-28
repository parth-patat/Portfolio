// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMobileMenu = document.getElementById('navMobileMenu');
    const navMobileLinks = document.querySelectorAll('.nav-mobile-link');
    const navLinks = document.querySelectorAll('.nav-link, .nav-mobile-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navMobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMobileMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navToggle.contains(event.target) || navMobileMenu.contains(event.target);
        
        if (!isClickInsideNav && navMobileMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMobileMenu.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.nav');
        
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            nav.style.background = 'rgba(15, 23, 42, 0.8)';
        }
    });

    // Add animation on scroll for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Button click handlers
    const viewWorkBtn = document.getElementById('viewWorkBtn');
    const getInTouchBtn = document.getElementById('getInTouchBtn');

    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const projectsSection = document.querySelector('#projects');
            if (projectsSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = projectsSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = contactSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.borderColor = 'rgba(59, 130, 246, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.borderColor = '#334155';
        });
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', throttle(function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        
        if (heroImage && scrolled < window.innerHeight) {
            const speed = scrolled * 0.15;
            heroImage.style.transform = `translateY(${speed}px)`;
        }
    }, 16));

    // Add typing effect to hero name (optional enhancement)
    // const heroName = document.querySelector('.hero-name');
    // if (heroName) {
    //     const originalText = heroName.textContent;
    //     heroName.textContent = '';
        
    //     let i = 0;
    //     const typeWriter = function() {
    //         if (i < originalText.length) {
    //             heroName.textContent += originalText.charAt(i);
    //             i++;
    //             setTimeout(typeWriter, 100);
    //         }
    //     };
        
    //     // Start typing effect after a short delay
    //     setTimeout(typeWriter, 1000);
    // }

    // Add click handlers for social links with ripple effect
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add a ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Add resize handler for responsive adjustments
    window.addEventListener('resize', function() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth >= 768) {
            navToggle.classList.remove('active');
            navMobileMenu.classList.remove('active');
        }
        
        // Reset parallax on mobile
        if (window.innerWidth < 768) {
            const heroImage = document.querySelector('.hero-image');
            if (heroImage) {
                heroImage.style.transform = 'translateY(0)';
            }
        }
    });

    // Add hover effect to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'rgba(59, 130, 246, 0.5)';
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#334155';
            this.style.transform = 'translateY(0)';
        });
    });

    // Add project link functionality
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Here you could add actual navigation to project repositories or live demos
            console.log('Project link clicked:', this.href);
        });
    });

    // Add intersection observer for navbar active states
    const navObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to corresponding nav link
                const activeLink = document.querySelector(`[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.6
    });

    // Observe all sections with IDs for navbar highlighting
    const sectionsWithIds = document.querySelectorAll('section[id]');
    sectionsWithIds.forEach(section => {
        navObserver.observe(section);
    });

    // Add CSS for active nav links
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active,
        .nav-mobile-link.active {
            color: #60a5fa !important;
        }
        .skill-card {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});

// Utility function to throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.background = '#374151';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.alt = 'Image not available';
        });
    });
});

// Add performance optimization for scroll events
let ticking = false;

function updateOnScroll() {
    // Batch scroll-related updates here
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});