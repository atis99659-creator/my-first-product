import { cultures, uiTranslations } from './data.js';

let activeRegion = null;

export const elements = {
    contentContainer: document.getElementById('content'),
    themeToggle: document.getElementById('themeToggle'),
    langToggle: document.getElementById('langToggle'),
    quickNav: document.getElementById('quickNav'),
    pageTitle: document.getElementById('pageTitle'),
    footerText: document.getElementById('footerText'),
    countrySearch: document.getElementById('countrySearch'),
    countryDropdown: document.getElementById('countryDropdown'),
    html: document.documentElement,
    regionModal: document.getElementById('regionModal'),
    closeModal: document.getElementById('closeModal'),
    regionsContainer: document.getElementById('regionsContainer'),
    modalTitle: document.getElementById('modalTitle'),
    selectedRegionTitle: document.getElementById('selectedRegionTitle'),
    regionHint: document.getElementById('regionHint'),
    selectedRegionContent: document.getElementById('selectedRegionContent'),
    themeButtons: document.querySelectorAll('.theme-btn')
};

// 모달 내부 테마 버튼(식당, 카페 등) 이벤트 초기화
export function initUiEvents() {
    elements.themeButtons.forEach(btn => {
        btn.onclick = () => {
            if (!activeRegion) return;
            const theme = btn.getAttribute('data-theme');
            elements.themeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderThemeItems(theme);
        };
    });
}

export function applyTheme(theme) {
    elements.html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

export function updateUI(currentLang, currentTheme) {
    const trans = uiTranslations[currentLang];
    if (!trans) return;

    elements.pageTitle.textContent = trans.pageTitle;
    elements.footerText.textContent = trans.footer;
    elements.langToggle.textContent = currentLang === 'en' ? '한국어' : 'English';
    elements.themeToggle.textContent = currentTheme === 'light' ? trans.themeDark : trans.themeLight;
    elements.regionHint.textContent = trans.modalHint;
    elements.countrySearch.placeholder = currentLang === 'ko' ? "국가 검색..." : "Search countries...";
    
    // 테마 버튼 텍스트 업데이트
    const themeIds = {
        restaurant: 'btnThemeRestaurant',
        cafe: 'btnThemeCafe',
        landmark: 'btnThemeLandmark',
        activity: 'btnThemeActivity'
    };
    Object.entries(themeIds).forEach(([key, id]) => {
        const btn = document.getElementById(id);
        if (btn) btn.textContent = trans.themes[key];
    });
}

export function renderQuickNav(countries, onSelect, currentLang) {
    const featuredCodes = Object.values(cultures).map(c => c.code);
    const featuredCountries = countries.filter(c => featuredCodes.includes(c.code));

    elements.quickNav.innerHTML = featuredCountries.map(c => `
        <button class="nav-btn" data-code="${c.code}">
            <img src="${c.flag}" class="nav-flag" alt=""> ${currentLang === 'ko' ? c.koName : c.name}
        </button>
    `).join('');

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const country = countries.find(c => c.code === btn.dataset.code);
            onSelect(country);
        };
    });
}

export function renderContent(country, currentLang) {
    const detailedData = Object.values(cultures).find(c => c.code === country.code);
    const countryName = currentLang === 'ko' ? country.koName : country.name;
    const secondaryName = currentLang === 'ko' ? country.name : country.koName;

    const wikiName = country.name.replace(/ /g, '_');
    const mapUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/Location_of_${wikiName}_in_the_World.svg`;

    elements.contentContainer.innerHTML = `
        <article class="country-row">
            <div class="left-info">
                <img src="${country.flag}" alt="${country.name} Flag" class="main-flag-img">
                <div class="info-badge"><span>${currentLang === 'ko' ? '수도' : 'Capital'}</span>: ${country.capital}</div>
                <div class="info-badge"><span>${currentLang === 'ko' ? '지역' : 'Region'}</span>: ${country.region}</div>
                ${detailedData ? `<button class="map-btn" id="viewRegionsBtn">${uiTranslations[currentLang].btnRegions}</button>` : ''}
            </div>
            <div class="center-title">
                <h2 style="color: ${detailedData ? detailedData.color : 'inherit'}">${countryName}</h2>
                <div class="ko-name">${secondaryName}</div>
                ${detailedData ? `<p>${detailedData[currentLang].description}</p>` : ''}
            </div>
            <div class="right-map">
                <img src="${mapUrl}" class="location-map" onerror="this.style.display='none'">
            </div>
        </article>
        ${detailedData ? `
            <div class="info-grid">
                <section class="info-item"><h3>🗣️ Greeting</h3><p>${detailedData[currentLang].greeting}</p></section>
                <section class="info-item"><h3>🍱 Food</h3><p>${detailedData[currentLang].food}</p></section>
                <section class="info-item"><h3>👔 Clothing</h3><p>${detailedData[currentLang].clothing}</p></section>
            </div>
        ` : ''}
    `;
    
    if (detailedData) {
        document.getElementById('viewRegionsBtn').onclick = () => {
            const key = Object.keys(cultures).find(k => cultures[k].code === country.code);
            showRegions(key, currentLang);
        };
    }
}

export function setupSearch(countries, onSelect) {
    elements.countrySearch.oninput = (e) => {
        const val = e.target.value.toLowerCase();
        if (!val) { elements.countryDropdown.style.display = 'none'; return; }

        const filtered = countries.filter(c => c.name.toLowerCase().includes(val) || c.koName.toLowerCase().includes(val)).slice(0, 8);
        elements.countryDropdown.innerHTML = filtered.map(c => `
            <div class="dropdown-item" data-code="${c.code}">
                <img src="${c.flag}" class="dropdown-flag"> ${c.koName} (${c.name})
            </div>
        `).join('');
        elements.countryDropdown.style.display = 'block';

        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.onclick = () => {
                const country = countries.find(c => c.code === item.dataset.code);
                elements.countrySearch.value = country.koName;
                elements.countryDropdown.style.display = 'none';
                onSelect(country);
            };
        });
    };
}

export function showRegions(countryKey, currentLang) {
    const data = cultures[countryKey];
    activeRegion = null;
    
    elements.modalTitle.textContent = `${data[currentLang].name} - ${uiTranslations[currentLang].btnRegions}`;
    elements.regionHint.style.display = "block";
    elements.selectedRegionContent.style.display = "none";
    elements.regionsContainer.innerHTML = "";

    data.regions.forEach(region => {
        const btn = document.createElement('button');
        btn.className = 'region-item-btn';
        btn.textContent = currentLang === 'ko' ? region.ko : region.en;
        btn.onclick = () => {
            document.querySelectorAll('.region-item-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeRegion = region;
            elements.regionHint.style.display = "none";
            elements.selectedRegionContent.style.display = "block";
            elements.selectedRegionTitle.textContent = currentLang === 'ko' ? region.ko : region.en;
            renderThemeItems(null); // 초기화
        };
        elements.regionsContainer.appendChild(btn);
    });

    elements.regionModal.style.display = "flex";
}

function renderThemeItems(theme) {
    let dynamicContent = document.getElementById('dynamicThemeContent');
    if (!dynamicContent) {
        dynamicContent = document.createElement('div');
        dynamicContent.id = 'dynamicThemeContent';
        elements.selectedRegionContent.appendChild(dynamicContent);
    }
    
    if (!theme) { dynamicContent.innerHTML = ""; return; }
    
    const items = (activeRegion.themes && activeRegion.themes[theme]) || [];
    dynamicContent.innerHTML = items.length ? `
        <ul class="theme-item-list">
            ${items.map(item => `<li><a href="${item.url}" target="_blank">${item.name} ↗</a></li>`).join('')}
        </ul>
    ` : `<p class="no-data">Coming Soon</p>`;
}

export function closeRegions() {
    elements.regionModal.style.display = "none";
}