// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

function reveal() {
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (top < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal();
