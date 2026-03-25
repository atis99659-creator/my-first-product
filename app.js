import { applyTheme, updateUI, renderContent, closeRegions, elements } from './ui.js';

let currentLang = localStorage.getItem('lang') || 'ko';
let currentTheme = localStorage.getItem('theme') || 'light';

function init() {
    applyTheme(currentTheme);
    updateUI(currentLang, currentTheme);
    renderContent('korea', currentLang);
    
    const initialNavBtn = document.querySelector(`[data-country="korea"]`);
    if (initialNavBtn) initialNavBtn.classList.add('active');
}

// Event Listeners
elements.themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    updateUI(currentLang, currentTheme);
});

elements.langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ko' : 'en';
    localStorage.setItem('lang', currentLang);
    updateUI(currentLang, currentTheme);
    
    const activeBtn = document.querySelector('.nav-btn.active');
    if (activeBtn) {
        renderContent(activeBtn.getAttribute('data-country'), currentLang);
    }
});

elements.navBar.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-btn')) {
        const country = e.target.getAttribute('data-country');
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderContent(country, currentLang);
    }
});

elements.closeModal.onclick = closeRegions;
window.onclick = (e) => {
    if (e.target === elements.regionModal) {
        closeRegions();
    }
};

// Start the app
init();
