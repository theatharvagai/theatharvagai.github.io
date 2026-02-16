// ===================================
// SMOOTH SCROLL & NAVIGATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function updateActiveLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // ===================================
    // SCROLL ANIMATIONS
    // ===================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.glass-card, .section-title').forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });

    // ===================================
    // NAVIGATION BAR EFFECTS
    // ===================================

    const nav = document.querySelector('.glass-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 50) {
            nav.style.boxShadow = '0 12px 40px 0 rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)';
        }

        // Hide/show nav on scroll (optional - can be removed if you want nav always visible)
        if (currentScroll > lastScroll && currentScroll > 500) {
            nav.style.transform = 'translateX(-50%) translateY(-100px)';
        } else {
            nav.style.transform = 'translateX(-50%) translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // ===================================
    // PARALLAX EFFECT FOR BLOBS
    // ===================================

    const blobs = document.querySelectorAll('.blob');

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            const xMove = (x - 0.5) * speed;
            const yMove = (y - 0.5) * speed;

            blob.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
    });

    // ===================================
    // TYPING EFFECT FOR HERO TITLE (Optional)
    // ===================================

    // Uncomment this section if you want a typing effect
    /*
    const heroTitle = document.querySelector('.hero-title');
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 500);
    */

    // ===================================
    // CONTACT FORM HANDLING
    // ===================================

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Here you can add your form submission logic
            // For now, we'll just show an alert
            alert(`Thanks for reaching out, ${name}! I'll get back to you soon at ${email}.`);

            // Reset form
            contactForm.reset();

            // You can integrate with services like:
            // - FormSpree (https://formspree.io/)
            // - Netlify Forms
            // - EmailJS (https://www.emailjs.com/)
            // Example with EmailJS:
            /*
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            }).then(function(response) {
                alert('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again.');
            });
            */
        });
    }

    // ===================================
    // DYNAMIC SKILL PROGRESS BARS (Optional Enhancement)
    // ===================================

    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.6s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 50);
        }, index * 100);
    });

    // ===================================
    // PROJECT CARD TILT EFFECT
    // ===================================

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });

    function handleTilt(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    }

    function resetTilt(e) {
        const card = e.currentTarget;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    }

    // ===================================
    // CURSOR TRAIL EFFECT (Optional - Advanced)
    // ===================================

    // Uncomment for a cool cursor trail effect
    /*
    const cursorTrail = [];
    const trailLength = 20;

    for (let i = 0; i < trailLength; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: rgba(102, 126, 234, ${1 - i / trailLength});
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(trail);
        cursorTrail.push(trail);
    }

    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursorTrail() {
        let x = mouseX;
        let y = mouseY;

        cursorTrail.forEach((trail, index) => {
            trail.style.left = x - 5 + 'px';
            trail.style.top = y - 5 + 'px';
            trail.style.transform = `scale(${1 - index / trailLength})`;

            const nextTrail = cursorTrail[index + 1] || cursorTrail[0];
            x += (parseFloat(nextTrail.style.left) - x) * 0.3;
            y += (parseFloat(nextTrail.style.top) - y) * 0.3;
        });

        requestAnimationFrame(animateCursorTrail);
    }

    animateCursorTrail();
    */

    // ===================================
    // SCROLL PROGRESS INDICATOR (Optional)
    // ===================================

    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        transform-origin: left;
        transform: scaleX(0);
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = winScroll / height;
        progressBar.style.transform = `scaleX(${scrolled})`;
        progressBar.style.width = '100%';
    });

    // ===================================
    // STATS COUNTER ANIMATION
    // ===================================

    const stats = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateStats();
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    function animateStats() {
        stats.forEach(stat => {
            const target = parseFloat(stat.textContent);
            const increment = target / 50;
            let current = 0;

            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = current.toFixed(1);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target.toFixed(1);
                }
            };

            updateCounter();
        });
    }

    // ===================================
    // MOBILE MENU TOGGLE (if you add hamburger menu later)
    // ===================================

    /*
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    */

    console.log('🚀 Portfolio loaded successfully!');
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Lazy loading for images (when you add actual project images)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
