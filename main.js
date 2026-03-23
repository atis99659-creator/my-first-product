// Data Store with Multi-Language Support
const cultures = {
    korea: {
        en: {
            name: "South Korea",
            greeting: "Annyeonghaseyo (안녕하세요)",
            food: "Kimchi, Bulgogi, Bibimbap",
            clothing: "Hanbok (Traditional Korean Dress)",
            description: "South Korea is known for its hilly countryside, centuries-old Buddhist temples, and high-tech cities like Seoul."
        },
        ko: {
            name: "대한민국",
            greeting: "안녕하세요",
            food: "김치, 불고기, 비빔밥",
            clothing: "한복 (대한민국 전통 의상)",
            description: "대한민국은 반만년의 유구한 역사를 가진 나라로, 전통적인 불교 사찰과 서울과 같은 첨단 IT 도시가 공존하는 곳입니다."
        },
        emoji: "🇰🇷",
        color: "#3498db",
        viewBox: "0 0 100 120",
        regions: [
            { id: "seoul", d: "M 45 35 L 55 35 L 55 45 L 45 45 Z", en: "Seoul/Gyeonggi", ko: "서울/경기도" },
            { id: "gangwon", d: "M 55 25 L 75 25 L 75 45 L 55 45 Z", en: "Gangwon", ko: "강원도" },
            { id: "chungcheong", d: "M 35 45 L 55 45 L 55 65 L 35 65 Z", en: "Chungcheong", ko: "충청도" },
            { id: "gyeongsang", d: "M 55 45 L 85 45 L 85 85 L 55 85 Z", en: "Gyeongsang", ko: "경상도" },
            { id: "jeolla", d: "M 25 65 L 55 65 L 55 95 L 25 95 Z", en: "Jeolla", ko: "전라도" },
            { id: "jeju", d: "M 35 105 L 55 105 L 55 115 L 35 115 Z", en: "Jeju Island", ko: "제주도" }
        ]
    },
    china: {
        en: {
            name: "China",
            greeting: "Ni Hao (你好)",
            food: "Peking Duck, Dim Sum, Hot Pot",
            clothing: "Hanfu, Qipao / Cheongsam",
            description: "China is a vast nation with diverse landscapes and a history spanning millennia."
        },
        ko: {
            name: "중국",
            greeting: "니하오 (你好)",
            food: "베이징 덕, 딤섬, 훠궈",
            clothing: "한푸, 치파오",
            description: "중국은 광대한 영토와 유구한 역사를 가진 나라로, 자금성과 만리장성 같은 역사적인 유적지를 갖추고 있습니다."
        },
        emoji: "🇨🇳",
        color: "#e74c3c",
        viewBox: "0 0 150 100",
        regions: [
            { id: "north", d: "M 70 10 L 120 10 L 120 40 L 70 40 Z", en: "North China", ko: "화베이 (북부)" },
            { id: "east", d: "M 100 40 L 140 40 L 140 70 L 100 70 Z", en: "East China", ko: "화둥 (동부)" },
            { id: "south", d: "M 70 70 L 120 70 L 120 95 L 70 95 Z", en: "South China", ko: "화난 (남부)" },
            { id: "west", d: "M 10 20 L 70 20 L 70 80 L 10 80 Z", en: "West China", ko: "시부 (서부)" }
        ]
    },
    japan: {
        en: {
            name: "Japan",
            greeting: "Konnichiwa (こんにちは)",
            food: "Sushi, Ramen, Tempura",
            clothing: "Kimono, Yukata",
            description: "Japan is an island nation blending ancient traditions with futuristic technology."
        },
        ko: {
            name: "일본",
            greeting: "곤니찌와 (こんにちは)",
            food: "초밥, 라멘, 튀김",
            clothing: "기모노, 유카타",
            description: "일본은 고대 전통과 미래 기술이 조화를 이루는 섬나라입니다."
        },
        emoji: "🇯🇵",
        color: "#9b59b6",
        viewBox: "0 0 120 120",
        regions: [
            { id: "hokkaido", d: "M 70 5 L 100 5 L 100 35 L 70 35 Z", en: "Hokkaido", ko: "홋카이도" },
            { id: "honshu", d: "M 40 35 L 80 35 L 60 85 L 30 75 Z", en: "Honshu", ko: "혼슈" },
            { id: "kyushu", d: "M 10 85 L 30 85 L 30 110 L 10 110 Z", en: "Kyushu/Shikoku", ko: "규슈/시코쿠" }
        ]
    },
    france: {
        en: { name: "France", greeting: "Bonjour", food: "Croissant, Escargot", clothing: "Breton shirt", description: "France is famous for its art, gastronomy, and culture." },
        ko: { name: "프랑스", greeting: "봉쥬르", food: "크로와상, 에스카르고", clothing: "브르통 셔츠", description: "프랑스는 예술, 미식, 그리고 문화로 유명합니다." },
        emoji: "🇫🇷", color: "#002395", viewBox: "0 0 100 100",
        regions: [
            { id: "north", d: "M 30 10 L 70 10 L 70 40 L 30 40 Z", en: "North (Paris)", ko: "북부 (파리)" },
            { id: "west", d: "M 10 40 L 40 40 L 40 70 L 10 70 Z", en: "West", ko: "서부" },
            { id: "east", d: "M 60 40 L 90 40 L 90 70 L 60 70 Z", en: "East", ko: "동부" },
            { id: "south", d: "M 30 70 L 70 70 L 70 95 L 30 95 Z", en: "South (Riviera)", ko: "남부 (리비에라)" }
        ]
    },
    spain: {
        en: { name: "Spain", greeting: "Hola", food: "Paella, Tapas", clothing: "Flamenco dress", description: "Spain is known for its sunny weather and vibrant festivals." },
        ko: { name: "스페인", greeting: "올라", food: "파에야, 타파스", clothing: "플라멩코 의상", description: "스페인은 화창한 날씨와 활기찬 축제로 알려져 있습니다." },
        emoji: "🇪🇸", color: "#EF3340", viewBox: "0 0 100 100",
        regions: [
            { id: "madrid", d: "M 40 40 L 60 40 L 60 60 L 40 60 Z", en: "Central (Madrid)", ko: "중부 (마드리드)" },
            { id: "north", d: "M 20 10 L 80 10 L 80 30 L 20 30 Z", en: "North", ko: "북부" },
            { id: "east", d: "M 70 30 L 95 30 L 95 80 L 70 80 Z", en: "East (Barcelona)", ko: "동부 (바르셀로나)" },
            { id: "south", d: "M 20 70 L 70 70 L 70 95 L 20 95 Z", en: "South (Andalusia)", ko: "남부 (안달루시아)" }
        ]
    },
    usa: {
        en: { name: "USA", greeting: "Hello", food: "Hamburger, BBQ", clothing: "Jeans", description: "The United States is a diverse nation with global influence." },
        ko: { name: "미국", greeting: "헬로", food: "햄버거, 바베큐", clothing: "청바지", description: "미국은 세계적인 영향력을 가진 다양성의 나라입니다." },
        emoji: "🇺🇸", color: "#B22234", viewBox: "0 0 150 100",
        regions: [
            { id: "west", d: "M 10 20 L 40 20 L 40 80 L 10 80 Z", en: "West Coast", ko: "서부 해안" },
            { id: "midwest", d: "M 40 20 L 90 20 L 90 60 L 40 60 Z", en: "Midwest", ko: "중서부" },
            { id: "northeast", d: "M 100 10 L 140 10 L 140 40 L 100 40 Z", en: "Northeast", ko: "북동부" },
            { id: "south", d: "M 50 60 L 130 60 L 130 90 L 50 90 Z", en: "South", ko: "남부" }
        ]
    },
    turkey: {
        en: { name: "Turkey", greeting: "Merhaba", food: "Kebab, Baklava", clothing: "Kaftan", description: "Turkey bridges Europe and Asia with rich Ottoman history." },
        ko: { name: "튀르키예", greeting: "메르하바", food: "케밥, 바클라바", clothing: "카프탄", description: "튀르키예는 유럽과 아시아를 잇는 오스만 제국의 역사를 가졌습니다." },
        emoji: "🇹🇷", color: "#E30A17", viewBox: "0 0 150 80",
        regions: [
            { id: "marmara", d: "M 10 10 L 40 10 L 40 30 L 10 30 Z", en: "Marmara (Istanbul)", ko: "마르마라 (이스탄불)" },
            { id: "aegean", d: "M 5 30 L 25 30 L 25 70 L 5 70 Z", en: "Aegean Coast", ko: "에게해 연안" },
            { id: "central", d: "M 40 20 L 100 20 L 100 60 L 40 60 Z", en: "Central Anatolia", ko: "중앙 아나톨리아" },
            { id: "east", d: "M 100 20 L 140 20 L 140 70 L 100 70 Z", en: "Eastern Anatolia", ko: "동부 아나톨리아" }
        ]
    },
    italy: {
        en: { name: "Italy", greeting: "Ciao", food: "Pizza, Pasta", clothing: "High Fashion", description: "Italy is the birthplace of the Renaissance." },
        ko: { name: "이탈리아", greeting: "챠오", food: "피자, 파스타", clothing: "하이 패션", description: "이탈리아는 르네상스의 발상지입니다." },
        emoji: "🇮🇹", color: "#008C45", viewBox: "0 0 100 120",
        regions: [
            { id: "north", d: "M 20 10 L 80 10 L 70 40 L 30 40 Z", en: "North (Milan/Venice)", ko: "북부 (밀라노/베네치아)" },
            { id: "central", d: "M 40 40 L 60 40 L 70 70 L 50 70 Z", en: "Central (Rome)", ko: "중부 (로마)" },
            { id: "south", d: "M 50 70 L 80 100 L 70 110 L 40 80 Z", en: "South (Naples)", ko: "남부 (나폴리)" },
            { id: "islands", d: "M 10 80 L 30 80 L 30 100 L 10 100 Z", en: "Sicily/Sardinia", ko: "시칠리아/사르데냐" }
        ]
    },
    mexico: {
        en: { name: "Mexico", greeting: "Hola", food: "Tacos, Burritos", clothing: "Sombrero", description: "Mexico is known for its Aztec and Mayan heritage." },
        ko: { name: "멕시코", greeting: "올라", food: "타코, 부리또", clothing: "솜브레로", description: "멕시코는 아즈텍과 마야 문명의 유산으로 유명합니다." },
        emoji: "🇲🇽", color: "#006847", viewBox: "0 0 150 100",
        regions: [
            { id: "north", d: "M 10 10 L 100 10 L 80 40 L 20 40 Z", en: "North Mexico", ko: "북부 멕시코" },
            { id: "central", d: "M 60 40 L 100 40 L 110 70 L 70 70 Z", en: "Central (Mexico City)", ko: "중부 (멕시코시티)" },
            { id: "south", d: "M 100 60 L 140 60 L 140 90 L 100 90 Z", en: "South (Yucatan)", ko: "남부 (유카탄)" }
        ]
    },
    uk: {
        en: { name: "United Kingdom", greeting: "Hello", food: "Fish and Chips", clothing: "Kilts", description: "The UK has a global cultural reach through its history." },
        ko: { name: "영국", greeting: "헬로", food: "피쉬 앤 칩스", clothing: "킬트", description: "영국은 역사를 통해 세계적인 문화적 파급력을 가졌습니다." },
        emoji: "🇬🇧", color: "#012169", viewBox: "0 0 100 120",
        regions: [
            { id: "scotland", d: "M 30 5 L 70 5 L 70 40 L 30 40 Z", en: "Scotland", ko: "스코틀랜드" },
            { id: "england-n", d: "M 40 40 L 65 40 L 65 70 L 40 70 Z", en: "Northern England", ko: "북부 잉글랜드" },
            { id: "wales", d: "M 25 70 L 45 70 L 45 90 L 25 90 Z", en: "Wales", ko: "웨일스" },
            { id: "england-s", d: "M 45 70 L 85 70 L 85 105 L 45 105 Z", en: "Southern England (London)", ko: "남부 잉글랜드 (런던)" }
        ]
    },
    germany: {
        en: { name: "Germany", greeting: "Hallo", food: "Schnitzel, Pretzel", clothing: "Lederhosen", description: "Germany is known for its engineering and festivals." },
        ko: { name: "독일", greeting: "할로", food: "슈니첼, 프레첼", clothing: "레더호젠", description: "독일은 공학 기술과 축제로 잘 알려져 있습니다." },
        emoji: "🇩🇪", color: "#000000", viewBox: "0 0 100 120",
        regions: [
            { id: "north", d: "M 20 10 L 80 10 L 80 40 L 20 40 Z", en: "North (Berlin/Hamburg)", ko: "북부 (베를린/함부르크)" },
            { id: "west", d: "M 10 40 L 45 40 L 45 80 L 10 80 Z", en: "West (Rhine)", ko: "서부" },
            { id: "east", d: "M 55 40 L 90 40 L 90 80 L 55 80 Z", en: "East", ko: "동부" },
            { id: "south", d: "M 30 80 L 70 80 L 70 110 L 30 110 Z", en: "South (Bavaria/Munich)", ko: "남부 (바바리아/뮌헨)" }
        ]
    },
    greece: {
        en: { name: "Greece", greeting: "Yasas", food: "Moussaka, Gyros", clothing: "Chiton", description: "Greece is the cradle of Western civilization." },
        ko: { name: "그리스", greeting: "야사스", food: "무사카, 기로스", clothing: "키톤", description: "그리스는 서구 문명의 발상지입니다." },
        emoji: "🇬🇷", color: "#001489", viewBox: "0 0 120 100",
        regions: [
            { id: "north", d: "M 20 5 L 80 5 L 80 35 L 20 35 Z", en: "North (Macedonia)", ko: "북부 (마케도니아)" },
            { id: "central", d: "M 30 35 L 70 35 L 50 65 L 20 55 Z", en: "Central (Athens)", ko: "중부 (아테네)" },
            { id: "peloponnese", d: "M 20 65 L 45 65 L 45 90 L 20 90 Z", en: "Peloponnese", ko: "펠로폰네소스" },
            { id: "islands", d: "M 70 45 L 110 45 L 110 95 L 70 95 Z", en: "Greek Islands", ko: "그리스 섬들" }
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
        themeLight: "☀️ Light Mode", themeDark: "🌙 Dark Mode",
        close: "Close"
    },
    ko: {
        pageTitle: "🌏 세계 문화 가이드",
        btnMap: "🗺️ 상세 지도 보기",
        modalHint: "지도의 구역을 클릭하면 이름을 볼 수 있습니다",
        greeting: "인사말", food: "대표 음식", clothing: "전통 의상",
        footer: "© 2026 세계 문화 가이드. 모든 권리 보유.",
        themeLight: "☀️ 라이트 모드", themeDark: "🌙 다크 모드",
        close: "닫기"
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
        <svg viewBox="${data.viewBox}" xmlns="http://www.w3.org/2000/svg">
            ${pathsSvg}
        </svg>
    `;

    mapModal.style.display = "flex";

    // Add click listeners to paths
    mapContainer.querySelectorAll('path').forEach(path => {
        path.addEventListener('click', (e) => {
            const name = currentLang === 'ko' ? e.target.getAttribute('data-name-ko') : e.target.getAttribute('data-name-en');
            selectedRegionName.textContent = name;
            // Highlight
            mapContainer.querySelectorAll('path').forEach(p => p.style.fill = "#ddd");
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
