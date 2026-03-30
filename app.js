import { fetchAllCountries } from './data.js';
import { elements, applyTheme, updateUI, renderContent, setupSearch, closeRegions } from './ui.js';

let currentLang = localStorage.getItem('lang') || 'ko';
let currentTheme = localStorage.getItem('theme') || 'light';
let allCountries = [];
let selectedCountry = null;

async function init() {
    // 1. Apply initial theme
    applyTheme(currentTheme);

    // 2. Fetch all countries
    allCountries = await fetchAllCountries();

    // 3. Setup UI
    updateUI(currentLang, currentTheme);

    // 4. Setup Search
    setupSearch(allCountries, (country) => {
        selectedCountry = country;
        renderContent(country, currentLang);
    });

    // 5. Set default country (South Korea)
    const defaultCountry = allCountries.find(c => c.code === 'kr') || allCountries[0];
    if (defaultCountry) {
        selectedCountry = defaultCountry;
        renderContent(defaultCountry, currentLang);
    }

    // 6. Global Event Listeners
    elements.themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(currentTheme);
        updateUI(currentLang, currentTheme);
    });

    elements.langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ko' : 'en';
        localStorage.setItem('lang', currentLang);
        updateUI(currentLang, currentTheme);
        if (selectedCountry) {
            renderContent(selectedCountry, currentLang);
        }
    });

    elements.closeModal.onclick = closeRegions;
    window.onclick = (event) => {
        if (event.target === elements.regionModal) {
            closeRegions();
        }
    };
}

// Start the app
init();
