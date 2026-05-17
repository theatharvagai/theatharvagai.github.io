window.addEventListener('load', () => {
    // Force optimized videos to play
    const videoDark = document.getElementById('video-bg-dark');
    const videoLight = document.getElementById('video-bg-light');
    
    const forcePlay = () => { 
        if (videoDark && videoDark.paused) videoDark.play().catch(()=>{}); 
        if (videoLight && videoLight.paused) videoLight.play().catch(()=>{}); 
    };
    forcePlay();
    
    // Global override: play video the millisecond the user interacts with the page
    document.addEventListener('click', forcePlay, { once: true });
    document.addEventListener('scroll', forcePlay, { once: true });
    document.addEventListener('mousemove', forcePlay, { once: true });

    // Generate Fireflies dynamically (Reduced to 10 as requested)
    const firefliesContainer = document.getElementById('fireflies-container');
    const preloader = document.getElementById('preloader');
    
    // Function to create a highly random firefly
    const createFirefly = (container, isPreloader) => {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        
        // Highly randomized organic properties
        const size = Math.random() * 5 + 1; // 1px to 6px
        const left = Math.random() * 100; // 0% to 100%
        const top = Math.random() * 100; // 0% to 100%
        const duration = Math.random() * 8 + 6; // 6s to 14s
        const delay = Math.random() * 5; // 0s to 5s
        
        // Random drift paths
        const tx1 = (Math.random() - 0.5) * 150;
        const ty1 = (Math.random() - 0.5) * 150;
        const tx2 = (Math.random() - 0.5) * 300;
        const ty2 = (Math.random() - 0.5) * 300;
        const tx3 = (Math.random() - 0.5) * 400;
        const ty3 = (Math.random() - 0.5) * 400;
        
        firefly.style.width = `${size}px`;
        firefly.style.height = `${size}px`;
        firefly.style.left = `${left}%`;
        firefly.style.top = `${top}%`;
        firefly.style.animationDuration = `${duration}s`;
        firefly.style.animationDelay = `${delay}s`;
        
        firefly.style.setProperty('--tx1', `${tx1}px`);
        firefly.style.setProperty('--ty1', `${ty1}px`);
        firefly.style.setProperty('--tx2', `${tx2}px`);
        firefly.style.setProperty('--ty2', `${ty2}px`);
        firefly.style.setProperty('--tx3', `${tx3}px`);
        firefly.style.setProperty('--ty3', `${ty3}px`);
        
        if (isPreloader) firefly.style.zIndex = "3"; // Ensure it's above the text blur
        
        container.appendChild(firefly);
    };

    // 7 fireflies in the background for the main site
    for (let i = 0; i < 7; i++) createFirefly(firefliesContainer, false);
    
    // 35 fireflies explicitly inside the preloader (5x normal amount)
    for (let i = 0; i < 35; i++) createFirefly(preloader, true);

    // Multi-language Hello Animation
    const greetings = ["Hello", "Bonjour", "Hola", "Ciao", "Namaste", "こんにちは", "مرحبا", "Привет", "Cooking Magic..."];
    const greetingElement = document.querySelector('.loader-text');
    let greetingIndex = 0;

    const interval = setInterval(() => {
        greetingIndex++;
        if (greetingIndex < greetings.length) {
            greetingElement.innerText = greetings[greetings.length - 1 === greetingIndex ? greetingIndex : greetingIndex];
        } else {
            clearInterval(interval);
        }
    }, 280);

    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 2800);
});

// Custom Cursor (Smooth Lerp + Negative Filter + Sticky Magnetic)
const cursor = document.getElementById('custom-cursor');
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let cursorX = mouseX, cursorY = mouseY;
let isHovering = false;
let hoverElement = null;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    if (isHovering && hoverElement && !hoverElement.classList.contains('card')) {
        const rect = hoverElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Magnetic pull towards center of element, but follows mouse slightly
        const targetX = centerX + (mouseX - centerX) * 0.3;
        const targetY = centerY + (mouseY - centerY) * 0.3;
        
        cursorX += (targetX - cursorX) * 0.2;
        cursorY += (targetY - cursorY) * 0.2;
    } else {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
    }
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .card, #theme-toggle').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        isHovering = true;
        hoverElement = el;
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        isHovering = false;
        hoverElement = null;
    });
});

// Aurora logic handled by CSS animations

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const vDark = document.getElementById('video-bg-dark');
const vLight = document.getElementById('video-bg-light');

let isDarkMode = true; // Default is dark mode with aurora

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    
    // Play both videos just to ensure they are running during crossfade
    if (vDark && vDark.paused) vDark.play().catch(()=>{});
    if (vLight && vLight.paused) vLight.play().catch(()=>{});
    
    if (isDarkMode) {
        document.body.classList.remove('light-mode');
        if(vLight) vLight.classList.remove('active');
        if(vDark) vDark.classList.add('active');
    } else {
        document.body.classList.add('light-mode');
        if(vDark) vDark.classList.remove('active');
        if(vLight) vLight.classList.add('active');
    }
});

// Show More Projects
const showMoreBtn = document.getElementById('show-more-btn');
const moreProjects = document.getElementById('more-projects');

showMoreBtn.addEventListener('click', () => {
    moreProjects.classList.toggle('show');
    if(moreProjects.classList.contains('show')) {
        showMoreBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
            Show Less
        `;
    } else {
        showMoreBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            Load More Projects
        `;
    }
});
