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

        // 3. Setup UI and QuickNav
        updateUI(currentLang, currentTheme);
        renderQuickNav(allCountries, (country) => {
            selectedCountry = country;
            renderContent(country, currentLang);
        }, currentLang);

        // 4. Setup Search with loaded countries
        setupSearch(allCountries, (country) => {
            selectedCountry = country;
            renderContent(country, currentLang);
            // Deactivate all quick nav buttons when searching
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        });

        // 5. Set default country (South Korea)
        const defaultCountry = allCountries.find(c => c.code === 'kr') || allCountries[0];
        if (defaultCountry) {
            selectedCountry = defaultCountry;
            renderContent(defaultCountry, currentLang);
            // Set active state in quick nav
            const krBtn = document.querySelector(`.nav-btn[data-code="kr"]`);
            if (krBtn) krBtn.classList.add('active');
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
            
            // Update QuickNav text
            renderQuickNav(allCountries, (country) => {
                selectedCountry = country;
                renderContent(country, currentLang);
            }, currentLang);

            if (selectedCountry) {
                renderContent(selectedCountry, currentLang);
                // Keep active state
                const activeBtn = document.querySelector(`.nav-btn[data-code="${selectedCountry.code}"]`);
                if (activeBtn) activeBtn.classList.add('active');
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
