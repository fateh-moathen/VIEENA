// JavaScript: Copy to clipboard + scroll animations
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        const allSpans = document.querySelectorAll('.footer-links span');
        allSpans.forEach(span => {
            if (span.textContent === text) {
                const original = span.textContent;
                span.textContent = 'Copied!';
                setTimeout(() => span.textContent = original, 1000);
            }
        });
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Scroll-based animations
function revealOnScroll() {
    const elements = document.querySelectorAll('.about, .contact, .address, .map, footer');
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
