import { cultures, uiTranslations } from './data.js';

let activeRegion = null;

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
    regionHint: document.getElementById('regionHint'),
    selectedRegionContent: document.getElementById('selectedRegionContent'),
    btnThemeRestaurant: document.getElementById('btnThemeRestaurant'),
    btnThemeCafe: document.getElementById('btnThemeCafe'),
    btnThemeLandmark: document.getElementById('btnThemeLandmark'),
    btnThemeActivity: document.getElementById('btnThemeActivity')
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
    
    // Update theme buttons text
    elements.btnThemeRestaurant.textContent = uiTranslations[currentLang].themes.restaurant;
    elements.btnThemeCafe.textContent = uiTranslations[currentLang].themes.cafe;
    elements.btnThemeLandmark.textContent = uiTranslations[currentLang].themes.landmark;
    elements.btnThemeActivity.textContent = uiTranslations[currentLang].themes.activity;
}

export function renderContent(countryKey, currentLang) {
    const data = cultures[countryKey];
    const content = data[currentLang];
    elements.html.style.setProperty('--primary-color', data.color);
    
    elements.contentContainer.innerHTML = `
        <article class="content-card">
            <header class="country-header">
                <div class="country-title-row">
                    <img src="https://flagcdn.com/w160/${data.code}.png" 
                         srcset="https://flagcdn.com/w320/${data.code}.png 2x"
                         width="160"
                         alt="${content.name} Flag"
                         class="side-flag-img">
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
    activeRegion = null;
    
    // Modal Title with Flag Image
    elements.modalTitle.innerHTML = `
        <img src="https://flagcdn.com/w40/${data.code}.png" 
             srcset="https://flagcdn.com/w80/${data.code}.png 2x"
             alt="" class="modal-flag">
        ${content.name} - ${uiTranslations[currentLang].btnRegions}
    `;
    
    elements.selectedRegionTitle.textContent = "";
    elements.regionHint.style.display = "block";
    elements.selectedRegionContent.style.display = "none";
    
    // Remove previous dynamic content if any
    const existingDynamic = document.getElementById('dynamicThemeContent');
    if (existingDynamic) existingDynamic.remove();
    
    elements.regionsContainer.innerHTML = "";
    data.regions.forEach(region => {
        const btn = document.createElement('button');
        btn.className = 'region-item-btn';
        btn.textContent = currentLang === 'ko' ? region.ko : region.en;
        btn.onclick = () => {
            elements.regionsContainer.querySelectorAll('.region-item-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            activeRegion = region;
            elements.regionHint.style.display = "none";
            elements.selectedRegionContent.style.display = "block";
            elements.selectedRegionTitle.textContent = currentLang === 'ko' ? region.ko : region.en;
            
            // Clear dynamic content when region changes
            const dynamic = document.getElementById('dynamicThemeContent');
            if (dynamic) dynamic.remove();
            
            // Reset theme button active states
            document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
        };
        elements.regionsContainer.appendChild(btn);
    });

    elements.regionModal.style.display = "flex";
}

// Handle theme button clicks
document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.onclick = () => {
        if (!activeRegion) return;
        
        const theme = btn.getAttribute('data-theme');
        document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        renderThemeItems(theme);
    };
});

function renderThemeItems(theme) {
    let dynamicContent = document.getElementById('dynamicThemeContent');
    if (!dynamicContent) {
        dynamicContent = document.createElement('div');
        dynamicContent.id = 'dynamicThemeContent';
        dynamicContent.className = 'dynamic-theme-content';
        elements.selectedRegionContent.appendChild(dynamicContent);
    }
    
    const items = (activeRegion.themes && activeRegion.themes[theme]) || [];
    
    if (items.length === 0) {
        dynamicContent.innerHTML = `<p class="no-data">준비 중입니다. (Coming Soon)</p>`;
        return;
    }
    
    dynamicContent.innerHTML = `
        <ul class="theme-item-list">
            ${items.map(item => `
                <li>
                    <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="theme-item-link">
                        ${item.name} ↗
                    </a>
                </li>
            `).join('')}
        </ul>
    `;
}

export function closeRegions() {
    elements.regionModal.style.display = "none";
}
