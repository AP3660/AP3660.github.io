// Function to load HTML partials
function loadPartial(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading partial:', error));
}

// Load header and footer into pages
document.addEventListener('DOMContentLoaded', () => {
    loadPartial('/partials/header.html', 'header');
    loadPartial('/partials/footer.html', 'footer');
});

// Header and nav scroll effect
window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var nav = document.getElementById('nav');
    if (window.scrollY > 50) {
        header.classList.add('hidden');
        nav.classList.add('fixed');
    } else {
        header.classList.remove('hidden');
        nav.classList.remove('fixed');
    }
});
