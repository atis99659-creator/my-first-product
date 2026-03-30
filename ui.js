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
    countrySearch: document.getElementById('countrySearch'),
    countryDropdown: document.getElementById('countryDropdown'),
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
    elements.countrySearch.placeholder = currentLang === 'ko' ? "국가 검색..." : "Search country...";
    
    // Update theme buttons text
    elements.btnThemeRestaurant.textContent = uiTranslations[currentLang].themes.restaurant;
    elements.btnThemeCafe.textContent = uiTranslations[currentLang].themes.cafe;
    elements.btnThemeLandmark.textContent = uiTranslations[currentLang].themes.landmark;
    elements.btnThemeActivity.textContent = uiTranslations[currentLang].themes.activity;
}

export function renderContent(country, currentLang) {
    const isDetailed = cultures[country.code];
    const countryName = currentLang === 'ko' ? country.koName : country.name;
    const secondaryName = currentLang === 'ko' ? country.name : country.koName;

    // Wikimedia Commons Map URL
    const wikiName = country.name.replace(/ /g, '_');
    const mapUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/Location_of_${wikiName}_in_the_World.svg`;
    const fallbackMapUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/Location_of_${wikiName}_on_the_globe.svg`;

    elements.contentContainer.innerHTML = `
        <article class="country-row">
            <div class="left-info">
                <img src="${country.flag}" alt="${country.name} Flag" class="main-flag-img">
                <div class="info-badge">
                    <span class="info-label">${currentLang === 'ko' ? '수도' : 'Capital'}</span>
                    <span>${country.capital}</span>
                </div>
                <div class="info-badge">
                    <span class="info-label">${currentLang === 'ko' ? '지역' : 'Region'}</span>
                    <span>${country.region}</span>
                </div>
                <div class="info-badge">
                    <span class="info-label">${currentLang === 'ko' ? '인구' : 'Population'}</span>
                    <span>${country.population}</span>
                </div>
                ${isDetailed ? `
                    <button class="map-btn" id="viewRegionsBtn" style="margin-top: 1rem; padding: 0.8rem;">
                        ${uiTranslations[currentLang].btnRegions}
                    </button>
                ` : ''}
            </div>
            
            <div class="center-title">
                <h2 style="color: ${isDetailed ? cultures[country.code].color : 'var(--primary-color)'}">
                    ${countryName}
                </h2>
                <div class="ko-name">${secondaryName}</div>
                ${isDetailed ? `<p style="margin-top: 1rem; max-width: 400px; font-size: 1.1rem; opacity: 0.9;">
                    ${cultures[country.code][currentLang].description}
                </p>` : ''}
            </div>

            <div class="right-map">
                <img src="${mapUrl}" 
                     onerror="this.onerror=null; this.src='${fallbackMapUrl}'; this.onerror=function(){this.style.display='none'};" 
                     alt="Location of ${country.name} in the world" 
                     class="location-map">
            </div>
        </article>
    `;
    
    if (isDetailed) {
        document.getElementById('viewRegionsBtn').onclick = () => showRegions(country.code, currentLang);
    }
}

export function setupSearch(countries, onSelect) {
    elements.countrySearch.oninput = (e) => {
        const value = e.target.value.toLowerCase();
        if (!value) {
            elements.countryDropdown.style.display = 'none';
            return;
        }

        const filtered = countries.filter(c => 
            c.name.toLowerCase().includes(value) || 
            c.koName.toLowerCase().includes(value)
        ).slice(0, 10);

        if (filtered.length > 0) {
            elements.countryDropdown.innerHTML = filtered.map(c => `
                <div class="dropdown-item" data-code="${c.code}">
                    <img src="${c.flag}" class="dropdown-flag">
                    <span>${c.name} (${c.koName})</span>
                </div>
            `).join('');
            elements.countryDropdown.style.display = 'block';

            document.querySelectorAll('.dropdown-item').forEach(item => {
                item.onclick = () => {
                    const country = countries.find(c => c.code === item.dataset.code);
                    elements.countrySearch.value = country.name;
                    elements.countryDropdown.style.display = 'none';
                    onSelect(country);
                };
            });
        } else {
            elements.countryDropdown.style.display = 'none';
        }
    };

    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
        const searchBox = document.querySelector('.search-container');
        if (searchBox && !searchBox.contains(e.target)) {
            elements.countryDropdown.style.display = 'none';
        }
    });
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
