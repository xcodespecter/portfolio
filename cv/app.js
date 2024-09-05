// Example: Adding animations when scrolling
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.about, .skills, .experience, .education, .contact');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight / 5 * 4;
        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});
