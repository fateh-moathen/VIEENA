// نسخ النص إلى الحافظة
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

// إظهار العناصر عند التمرير (Scroll Animation)
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

// تفعيل التمرير عند تحميل الصفحة وعند التمرير
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
