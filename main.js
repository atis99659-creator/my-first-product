// Data Store with Realistic SVG Maps for 12 Countries
const cultures = {
    korea: {
        en: { name: "South Korea", greeting: "Annyeonghaseyo", food: "Kimchi, Bulgogi", clothing: "Hanbok", description: "A country with 5,000 years of history, blending ancient tradition with cutting-edge technology." },
        ko: { name: "대한민국", greeting: "안녕하세요", food: "김치, 불고기", clothing: "한복", description: "반만년의 역사를 가진 나라로, 고대 전통과 첨단 기술이 조화롭게 공존하는 곳입니다." },
        emoji: "🇰🇷", color: "#3498db", viewBox: "0 0 100 150",
        regions: [
            { id: "kr-gg", d: "M 40 40 Q 45 35 50 40 L 55 45 Q 50 50 45 45 Z", en: "Seoul/Gyeonggi", ko: "서울/경기도" },
            { id: "kr-gw", d: "M 50 20 Q 65 20 75 30 L 70 50 Q 55 45 50 40 Z", en: "Gangwon", ko: "강원도" },
            { id: "kr-cc", d: "M 30 50 Q 45 50 50 65 L 40 80 Q 25 70 30 50 Z", en: "Chungcheong", ko: "충청도" },
            { id: "kr-gs", d: "M 55 55 Q 85 60 80 100 L 55 110 Q 50 80 55 55 Z", en: "Gyeongsang", ko: "경상도" },
            { id: "kr-jl", d: "M 20 85 Q 40 85 50 110 L 30 130 Q 15 110 20 85 Z", en: "Jeolla", ko: "전라도" },
            { id: "kr-jj", d: "M 35 135 Q 45 130 55 140 Q 45 150 35 145 Z", en: "Jeju Island", ko: "제주도" }
        ]
    },
    france: {
        en: { name: "France", greeting: "Bonjour", food: "Croissant, Escargot", clothing: "Breton shirt", description: "Western Europe's largest country, famous for the Eiffel Tower, fashion, and world-class wine." },
        ko: { name: "프랑스", greeting: "봉쥬르", food: "크로와상, 에스카르고", clothing: "브르통 셔츠", description: "서유럽에서 가장 큰 나라로, 에펠탑, 패션, 그리고 세계적인 와인으로 유명합니다." },
        emoji: "🇫🇷", color: "#002395", viewBox: "0 0 100 100",
        regions: [
            { id: "fr-n", d: "M 30 10 Q 50 5 70 15 L 75 40 Q 50 45 35 35 Z", en: "Ile-de-France (Paris)", ko: "일드프랑스 (파리)" },
            { id: "fr-w", d: "M 10 35 Q 25 30 35 40 L 30 75 Q 15 70 10 40 Z", en: "Brittany/West", ko: "브르타뉴/서부" },
            { id: "fr-e", d: "M 75 25 Q 90 30 95 55 L 75 80 Q 60 70 75 25 Z", en: "Grand Est/East", ko: "그랑에스트/동부" },
            { id: "fr-s", d: "M 35 75 Q 60 70 85 85 L 70 95 Q 40 98 30 85 Z", en: "Provence/South", ko: "프로방스/남부" }
        ]
    },
    japan: {
        en: { name: "Japan", greeting: "Konnichiwa", food: "Sushi, Ramen", clothing: "Kimono", description: "An island nation where deep-rooted traditions meet futuristic urban landscapes." },
        ko: { name: "일본", greeting: "곤니찌와", food: "초밥, 라멘", clothing: "기모노", description: "뿌리 깊은 전통과 미래지향적인 도시 풍경이 만나는 섬나라입니다." },
        emoji: "🇯🇵", color: "#9b59b6", viewBox: "0 0 100 120",
        regions: [
            { id: "jp-hk", d: "M 70 10 Q 85 5 95 20 L 80 40 Q 65 35 70 10 Z", en: "Hokkaido", ko: "홋카이도" },
            { id: "jp-hs", d: "M 40 40 Q 60 40 70 70 L 50 100 Q 30 80 40 40 Z", en: "Honshu (Tokyo/Osaka)", ko: "혼슈 (도쿄/오사카)" },
            { id: "jp-ky", d: "M 15 90 Q 30 95 35 110 L 15 115 Q 10 100 15 90 Z", en: "Kyushu/Shikoku", ko: "규슈/시코쿠" }
        ]
    },
    china: {
        en: { name: "China", greeting: "Ni Hao", food: "Dim Sum, Peking Duck", clothing: "Qipao", description: "A huge nation with over 5,000 years of civilization and diverse regional cultures." },
        ko: { name: "중국", greeting: "니하오", food: "딤섬, 베이징 덕", clothing: "치파오", description: "5,000년 이상의 문명과 다양한 지역 문화를 가진 거대한 나라입니다." },
        emoji: "🇨🇳", color: "#e74c3c", viewBox: "0 0 150 100",
        regions: [
            { id: "cn-n", d: "M 80 15 Q 110 10 130 30 L 110 50 Q 85 45 80 15 Z", en: "North (Beijing)", ko: "화베이 (베이징)" },
            { id: "cn-e", d: "M 115 50 Q 140 55 145 80 L 120 95 Q 100 80 115 50 Z", en: "East (Shanghai)", ko: "화둥 (상하이)" },
            { id: "cn-w", d: "M 20 30 Q 70 20 85 50 L 70 90 Q 30 85 20 30 Z", en: "West (Tibet/Xinjiang)", ko: "서부 (티베트/신장)" },
            { id: "cn-s", d: "M 85 65 Q 110 70 115 95 L 80 98 Q 70 85 85 65 Z", en: "South (Guangzhou)", ko: "화난 (광저우)" }
        ]
    },
    usa: {
        en: { name: "USA", greeting: "Hello", food: "Hamburger, BBQ", clothing: "Jeans", description: "A vast country known for its cultural melting pot, technology, and entertainment." },
        ko: { name: "미국", greeting: "헬로", food: "햄버거, 바베큐", clothing: "청바지", description: "문화적 용광로, 기술, 엔터테인먼트로 유명한 광대한 나라입니다." },
        emoji: "🇺🇸", color: "#B22234", viewBox: "0 0 150 100",
        regions: [
            { id: "us-w", d: "M 10 20 Q 25 15 45 25 L 40 85 Q 20 90 10 20 Z", en: "West Coast", ko: "서부 해안" },
            { id: "us-m", d: "M 45 25 Q 75 20 95 30 L 90 75 Q 60 85 45 25 Z", en: "Midwest", ko: "중서부" },
            { id: "us-ne", d: "M 100 20 Q 130 15 145 35 L 125 55 Q 110 45 100 20 Z", en: "Northeast", ko: "북동부" },
            { id: "us-s", d: "M 60 70 Q 100 65 140 85 L 120 98 Q 70 98 60 70 Z", en: "The South", ko: "남부" }
        ]
    },
    spain: {
        en: { name: "Spain", greeting: "Hola", food: "Paella, Tapas", clothing: "Flamenco dress", description: "Known for sunny beaches, passionate flamenco, and unique architecture by Gaudí." },
        ko: { name: "스페인", greeting: "올라", food: "파에야, 타파스", clothing: "플라멩코 의상", description: "화창한 해변, 열정적인 플라멩코, 가우디의 독특한 건축물로 유명합니다." },
        emoji: "🇪🇸", color: "#f1c40f", viewBox: "0 0 100 100",
        regions: [
            { id: "es-n", d: "M 20 15 Q 50 10 85 15 L 75 40 Q 40 45 20 15 Z", en: "North (Basque/Galicia)", ko: "북부 (바스크/갈리시아)" },
            { id: "es-m", d: "M 40 40 Q 60 40 70 65 L 45 75 Q 30 60 40 40 Z", en: "Central (Madrid)", ko: "중부 (마드리드)" },
            { id: "es-e", d: "M 80 30 Q 95 40 90 80 L 75 85 Q 70 60 80 30 Z", en: "East (Barcelona/Valencia)", ko: "동부 (바르셀로나/발렌시아)" },
            { id: "es-s", d: "M 25 75 Q 50 75 75 90 L 50 98 Q 20 95 25 75 Z", en: "South (Andalusia)", ko: "남부 (안달루시아)" }
        ]
    },
    italy: {
        en: { name: "Italy", greeting: "Ciao", food: "Pizza, Pasta", clothing: "High Fashion", description: "The birthplace of the Renaissance, rich in history, art, and world-class food." },
        ko: { name: "이탈리아", greeting: "챠오", food: "피자, 파스타", clothing: "하이 패션", description: "르네상스의 발상지로, 역사, 예술, 그리고 세계적인 음식이 풍부한 나라입니다." },
        emoji: "🇮🇹", color: "#27ae60", viewBox: "0 0 100 120",
        regions: [
            { id: "it-n", d: "M 20 10 Q 50 5 90 15 L 80 45 Q 40 40 20 10 Z", en: "North (Milan/Venice)", ko: "북부 (밀라노/베네치아)" },
            { id: "it-c", d: "M 45 45 Q 60 50 70 75 L 50 85 Q 40 65 45 45 Z", en: "Central (Rome/Florence)", ko: "중부 (로마/피렌체)" },
            { id: "it-s", d: "M 55 85 Q 75 95 85 115 L 65 118 Q 50 100 55 85 Z", en: "South (Naples/Sicily)", ko: "남부 (나폴리/시칠리아)" }
        ]
    },
    turkey: {
        en: { name: "Turkey", greeting: "Merhaba", food: "Kebab, Baklava", clothing: "Kaftan", description: "A transcontinental country bridging Europe and Asia, home to ancient empires." },
        ko: { name: "튀르키예", greeting: "메르하바", food: "케밥, 바클라바", clothing: "카프탄", description: "유럽과 아시아를 잇는 대륙 횡단 국가로, 고대 제국들의 요람입니다." },
        emoji: "🇹🇷", color: "#c0392b", viewBox: "0 0 150 80",
        regions: [
            { id: "tr-w", d: "M 10 20 Q 30 15 50 25 L 45 70 Q 20 65 10 20 Z", en: "Marmara/Aegean (Istanbul)", ko: "마르마라/에게해 (이스탄불)" },
            { id: "tr-c", d: "M 55 25 Q 95 20 105 50 L 95 75 Q 60 75 55 25 Z", en: "Central Anatolia", ko: "중앙 아나톨리아" },
            { id: "tr-e", d: "M 110 25 Q 140 30 145 60 L 120 75 Q 105 70 110 25 Z", en: "East/Black Sea", ko: "동부/흑해" }
        ]
    },
    mexico: {
        en: { name: "Mexico", greeting: "Hola", food: "Tacos, Burritos", clothing: "Sombrero", description: "Famous for its ancient Aztec/Mayan ruins, colorful festivals, and spicy cuisine." },
        ko: { name: "멕시코", greeting: "올라", food: "타코, 부리또", clothing: "솜브레로", description: "고대 아즈텍/마야 유적, 화려한 축제, 그리고 매콤한 요리로 유명합니다." },
        emoji: "🇲🇽", color: "#16a085", viewBox: "0 0 150 100",
        regions: [
            { id: "mx-n", d: "M 20 15 Q 70 10 110 20 L 95 55 Q 40 50 20 15 Z", en: "North Mexico", ko: "북부 멕시코" },
            { id: "mx-c", d: "M 85 55 Q 105 55 115 80 L 90 90 Q 75 75 85 55 Z", en: "Central (Mexico City)", ko: "중부 (멕시코시티)" },
            { id: "mx-s", d: "M 115 70 Q 140 70 145 95 L 120 98 Q 110 90 115 70 Z", en: "South (Yucatan)", ko: "남부 (유카탄)" }
        ]
    },
    uk: {
        en: { name: "United Kingdom", greeting: "Hello", food: "Fish and Chips", clothing: "Kilts", description: "Comprising four nations, it has a long history of global cultural influence." },
        ko: { name: "영국", greeting: "헬로", food: "피쉬 앤 칩스", clothing: "킬트", description: "네 개의 국가로 구성되어 있으며, 오랜 세계 문화 영향력의 역사를 가지고 있습니다." },
        emoji: "🇬🇧", color: "#2c3e50", viewBox: "0 0 100 130",
        regions: [
            { id: "uk-s", d: "M 30 10 Q 50 5 75 15 L 70 50 Q 40 45 30 10 Z", en: "Scotland", ko: "스코틀랜드" },
            { id: "uk-e", d: "M 45 55 Q 75 60 85 110 L 45 120 Q 35 90 45 55 Z", en: "England (London)", ko: "잉글랜드 (런던)" },
            { id: "uk-w", d: "M 25 75 Q 40 75 40 100 L 25 105 Q 15 90 25 75 Z", en: "Wales", ko: "웨일스" },
            { id: "uk-ni", d: "M 10 45 Q 25 45 25 65 L 10 65 Q 5 55 10 45 Z", en: "Northern Ireland", ko: "북아일랜드" }
        ]
    },
    germany: {
        en: { name: "Germany", greeting: "Hallo", food: "Pretzel, Schnitzel", clothing: "Lederhosen", description: "Europe's leading economy, known for its engineering, beer, and historical cities." },
        ko: { name: "독일", greeting: "할로", food: "프레첼, 슈니첼", clothing: "레더호젠", description: "유럽 최대의 경제 대국으로, 공학, 맥주, 그리고 역사적인 도시들로 유명합니다." },
        emoji: "🇩🇪", color: "#34495e", viewBox: "0 0 100 120",
        regions: [
            { id: "de-n", d: "M 20 15 Q 50 10 85 15 L 80 50 Q 45 55 20 15 Z", en: "North (Berlin/Hamburg)", ko: "북부 (베를린/함부르크)" },
            { id: "de-w", d: "M 15 55 Q 45 55 45 90 L 20 105 Q 10 85 15 55 Z", en: "West (Rhine/Frankfurt)", ko: "서부 (라인/프랑크푸르트)" },
            { id: "de-e", d: "M 55 55 Q 85 55 90 95 L 65 105 Q 50 85 55 55 Z", en: "East (Dresden)", ko: "동부 (드레스덴)" },
            { id: "de-s", d: "M 30 95 Q 75 95 80 115 L 40 118 Q 20 110 30 95 Z", en: "South (Bavaria/Munich)", ko: "남부 (바바리아/뮌헨)" }
        ]
    },
    greece: {
        en: { name: "Greece", greeting: "Yasas", food: "Moussaka, Gyros", clothing: "Chiton", description: "The cradle of Western civilization, famous for its ancient philosophy and beautiful islands." },
        ko: { name: "그리스", greeting: "야사스", food: "무사카, 기로스", clothing: "키톤", description: "서구 문명의 발상지로, 고대 철학, 신화, 그리고 아름다운 섬들로 유명합니다." },
        emoji: "🇬🇷", color: "#2980b9", viewBox: "0 0 120 100",
        regions: [
            { id: "gr-n", d: "M 20 10 Q 70 5 100 15 L 85 45 Q 40 40 20 10 Z", en: "North (Macedonia)", ko: "북부 (마케도니아)" },
            { id: "gr-c", d: "M 35 45 Q 65 45 60 70 L 30 75 Q 25 60 35 45 Z", en: "Central (Athens)", ko: "중부 (아테네)" },
            { id: "gr-p", d: "M 20 75 Q 45 75 50 95 L 25 98 Q 15 90 20 75 Z", en: "Peloponnese", ko: "펠로폰네소스" },
            { id: "gr-i", d: "M 75 55 Q 110 55 115 95 L 85 98 Q 70 80 75 55 Z", en: "Islands (Crete/Santorini)", ko: "섬 지역 (크레타/산토리니)" }
        ]
    }
};

const uiTranslations = {
    en: {
        pageTitle: "🌏 World Culture Guide",
        btnMap: "🗺️ View Detailed Map",
        modalHint: "Click on a region to see its name",
        greeting: "Greeting", food: "Famous Food", clothing: "Clothing",
        footer: "© 2026 World Culture Guide. All rights reserved.",
        themeLight: "☀️ Light Mode", themeDark: "🌙 Dark Mode"
    },
    ko: {
        pageTitle: "🌏 세계 문화 가이드",
        btnMap: "🗺️ 상세 지도 보기",
        modalHint: "지도의 구역을 클릭하면 이름을 볼 수 있습니다",
        greeting: "인사말", food: "대표 음식", clothing: "전통 의상",
        footer: "© 2026 세계 문화 가이드. 모든 권리 보유.",
        themeLight: "☀️ 라이트 모드", themeDark: "🌙 다크 모드"
    }
};

// DOM Elements
const contentContainer = document.getElementById('content');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const html = document.documentElement;

// Modal Elements
const mapModal = document.getElementById('mapModal');
const closeModal = document.getElementById('closeModal');
const mapContainer = document.getElementById('mapContainer');
const mapTitle = document.getElementById('mapTitle');
const selectedRegionName = document.getElementById('selectedRegionName');
const regionHint = document.getElementById('regionHint');

let currentLang = localStorage.getItem('lang') || 'ko';
let currentTheme = localStorage.getItem('theme') || 'light';

function init() {
    applyTheme(currentTheme);
    updateUI();
    renderContent('korea');
    document.querySelector(`[data-country="korea"]`).classList.add('active');
}

function updateUI() {
    document.getElementById('pageTitle').textContent = uiTranslations[currentLang].pageTitle;
    document.getElementById('footerText').textContent = uiTranslations[currentLang].footer;
    langToggle.textContent = currentLang === 'en' ? '한국어' : 'English';
    themeToggle.textContent = currentTheme === 'light' ? uiTranslations[currentLang].themeDark : uiTranslations[currentLang].themeLight;
    regionHint.textContent = uiTranslations[currentLang].modalHint;
}

function renderContent(countryKey) {
    const data = cultures[countryKey];
    const content = data[currentLang];
    document.documentElement.style.setProperty('--primary-color', data.color);
    
    contentContainer.innerHTML = `
        <article class="content-card">
            <header class="country-header">
                <h2>${data.emoji} ${content.name}</h2>
                <p class="description">${content.description}</p>
            </header>
            <div class="info-grid">
                <section class="info-item"><h3>${uiTranslations[currentLang].greeting}</h3><p>${content.greeting}</p></section>
                <section class="info-item"><h3>${uiTranslations[currentLang].food}</h3><p>${content.food}</p></section>
                <section class="info-item"><h3>${uiTranslations[currentLang].clothing}</h3><p>${content.clothing}</p></section>
            </div>
            <button class="map-btn" onclick="openMap('${countryKey}')">${uiTranslations[currentLang].btnMap}</button>
        </article>
    `;
}

function openMap(countryKey) {
    const data = cultures[countryKey];
    const content = data[currentLang];
    mapTitle.textContent = `${data.emoji} ${content.name} - ${uiTranslations[currentLang].btnMap}`;
    selectedRegionName.textContent = "";
    
    let pathsSvg = "";
    data.regions.forEach(region => {
        pathsSvg += `<path d="${region.d}" id="${region.id}" data-name-en="${region.en}" data-name-ko="${region.ko}"></path>`;
    });

    mapContainer.innerHTML = `
        <svg viewBox="${data.viewBox}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <rect width="100%" height="100%" fill="var(--bg-secondary)" opacity="0.3" rx="10"/>
            ${pathsSvg}
        </svg>
    `;

    mapModal.style.display = "flex";

    mapContainer.querySelectorAll('path').forEach(path => {
        path.addEventListener('click', (e) => {
            const name = currentLang === 'ko' ? e.target.getAttribute('data-name-ko') : e.target.getAttribute('data-name-en');
            selectedRegionName.textContent = name;
            mapContainer.querySelectorAll('path').forEach(p => p.style.fill = "#bdc3c7");
            e.target.style.fill = data.color;
        });
    });
}

function closeMap() { mapModal.style.display = "none"; }
closeModal.onclick = closeMap;
window.onclick = (e) => { if (e.target == mapModal) closeMap(); };

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

document.getElementById('navBar').addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-btn')) {
        const country = e.target.getAttribute('data-country');
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderContent(country);
    }
});

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    updateUI();
});

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ko' : 'en';
    localStorage.setItem('lang', currentLang);
    updateUI();
    const activeBtn = document.querySelector('.nav-btn.active');
    if (activeBtn) renderContent(activeBtn.getAttribute('data-country'));
});

init();
