// Check if element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Trigger animation on scroll
function handleScroll() {
    const elements = document.querySelectorAll('.fly-in-left, .fly-in-right');
    elements.forEach(element => {
        if (isInViewport(element) && !element.classList.contains('active')) {
            element.classList.add('active');
        }
    });
}

// Run on scroll and on load
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
