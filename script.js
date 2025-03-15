// Меняем цвет заголовка при клике


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});