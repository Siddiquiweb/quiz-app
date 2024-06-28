document.addEventListener("DOMContentLoaded", function () {
    // Example: Toggle a class on click for additional functionality
    const footerSections = document.querySelectorAll('.footer-section h4');

    footerSections.forEach(section => {
        section.addEventListener('click', () => {
            section.parentElement.classList.toggle('active');
        });
    });
});