import { fetchAllCountries } from './data.js';
import { elements, applyTheme, updateUI, renderContent, setupSearch, closeRegions } from './ui.js';

let currentLang = localStorage.getItem('lang') || 'ko';
let currentTheme = localStorage.getItem('theme') || 'light';
let allCountries = [];
let selectedCountry = null;

async function init() {
    try {
        // 1. Apply initial theme
        applyTheme(currentTheme);
        updateUI(currentLang, currentTheme);

        // 2. Fetch all countries
        allCountries = await fetchAllCountries();

        if (!allCountries || allCountries.length === 0) {
            console.error('Failed to load countries.');
            // Fallback for demo if API fails
            allCountries = [{
                name: "South Korea", koName: "대한민국", code: "kr", 
                flag: "https://flagcdn.com/w320/kr.png", capital: "Seoul", 
                region: "Asia", population: "51,780,579"
            }];
        }

        // 3. Setup Search with loaded countries
        setupSearch(allCountries, (country) => {
            selectedCountry = country;
            renderContent(country, currentLang);
        });

        // 4. Set default country (South Korea)
        const defaultCountry = allCountries.find(c => c.code === 'kr') || allCountries[0];
        if (defaultCountry) {
            selectedCountry = defaultCountry;
            renderContent(defaultCountry, currentLang);
        }

        // 5. Global Event Listeners
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

        if (elements.closeModal) {
            elements.closeModal.onclick = closeRegions;
        }
        
        window.onclick = (event) => {
            if (event.target === elements.regionModal) {
                closeRegions();
            }
        };
    } catch (error) {
        console.error('Initialization error:', error);
    }
}

// Start the app
init();
