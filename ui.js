import { cultures, uiTranslations } from './data.js';

// DOM Elements
export const elements = {
    contentContainer: document.getElementById('content'),
    themeToggle: document.getElementById('themeToggle'),
    langToggle: document.getElementById('langToggle'),
    navBar: document.getElementById('navBar'),
    pageTitle: document.getElementById('pageTitle'),
    footerText: document.getElementById('footerText'),
    html: document.documentElement,
    
    // Modal Elements
    regionModal: document.getElementById('regionModal'),
    closeModal: document.getElementById('closeModal'),
    regionsContainer: document.getElementById('regionsContainer'),
    modalTitle: document.getElementById('modalTitle'),
    selectedRegionTitle: document.getElementById('selectedRegionTitle'),
    regionHint: document.getElementById('regionHint')
};

export function applyTheme(theme) {
    elements.html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

export function updateUI(currentLang, currentTheme) {
    elements.pageTitle.textContent = uiTranslations[currentLang].pageTitle;
    elements.footerText.textContent = uiTranslations[currentLang].footer;
    elements.langToggle.textContent = currentLang === 'en' ? '한국어' : 'English';
    elements.themeToggle.textContent = currentTheme === 'light' 
        ? uiTranslations[currentLang].themeDark 
        : uiTranslations[currentLang].themeLight;
    elements.regionHint.textContent = uiTranslations[currentLang].modalHint;
}

export function renderContent(countryKey, currentLang) {
    const data = cultures[countryKey];
    const content = data[currentLang];
    elements.html.style.setProperty('--primary-color', data.color);
    
    elements.contentContainer.innerHTML = `
        <article class="content-card">
            <header class="country-header">
                <div class="country-title-row">
                    <span class="side-flag">${data.emoji}</span>
                    <div class="country-name-group">
                        <h2>${content.name}</h2>
                        <p class="description">${content.description}</p>
                    </div>
                </div>
            </header>
            <div class="info-grid">
                <section class="info-item"><h3>${uiTranslations[currentLang].greeting}</h3><p>${content.greeting}</p></section>
                <section class="info-item"><h3>${uiTranslations[currentLang].food}</h3><p>${content.food}</p></section>
                <section class="info-item"><h3>${uiTranslations[currentLang].clothing}</h3><p>${content.clothing}</p></section>
            </div>
            <button class="map-btn" id="viewRegionsBtn" data-country="${countryKey}">${uiTranslations[currentLang].btnRegions}</button>
        </article>
    `;
    
    // Attach event listener to the newly created button
    document.getElementById('viewRegionsBtn').onclick = () => showRegions(countryKey, currentLang);
}

export function showRegions(countryKey, currentLang) {
    const data = cultures[countryKey];
    const content = data[currentLang];
    elements.modalTitle.textContent = `${data.emoji} ${content.name} - ${uiTranslations[currentLang].btnRegions}`;
    elements.selectedRegionTitle.textContent = "";
    
    elements.regionsContainer.innerHTML = "";
    data.regions.forEach(region => {
        const btn = document.createElement('button');
        btn.className = 'region-item-btn';
        btn.textContent = currentLang === 'ko' ? region.ko : region.en;
        btn.onclick = () => {
            elements.regionsContainer.querySelectorAll('.region-item-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            elements.selectedRegionTitle.textContent = currentLang === 'ko' ? region.ko : region.en;
        };
        elements.regionsContainer.appendChild(btn);
    });

    elements.regionModal.style.display = "flex";
}

export function closeRegions() {
    elements.regionModal.style.display = "none";
}
