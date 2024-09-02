function loadHTML(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error('Error loading HTML:', error));
}

// Load header and footer for the page
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('partials/header.html', 'header-placeholder');
    loadHTML('partials/footer.html', 'footer-placeholder');

    // Header hide/show on scroll
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        var nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            header.classList.add('hidden');
            nav.classList.add('fixed');
        } else {
            header.classList.remove('hidden');
            nav.classList.remove('fixed');
        }
    });
});
