// ===== Dark Mode Toggle =====
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    root.classList.add('dark');
}
updateThemeButton();

themeToggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    updateThemeButton();

    const isDarkMode = root.classList.contains('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

function updateThemeButton() {
    const isDarkMode = root.classList.contains('dark');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== Add animation on scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.content-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        console.log('Search would open here');
    }
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        themeToggle.click();
    }
});

// ===== Print Styles =====
window.addEventListener('beforeprint', () => {
    root.classList.remove('dark');
});
