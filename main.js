// Data Store with Detailed Regional Categories for 12 Countries
const cultures = {
    korea: {
        en: { name: "South Korea", greeting: "Annyeonghaseyo", food: "Kimchi, Bulgogi", clothing: "Hanbok", description: "A country with 5,000 years of history, blending ancient tradition with cutting-edge technology." },
        ko: { name: "대한민국", greeting: "안녕하세요", food: "김치, 불고기", clothing: "한복", description: "반만년의 역사를 가진 나라로, 고대 전통과 첨단 기술이 조화롭게 공존하는 곳입니다." },
        emoji: "🇰🇷", color: "#3498db",
        regions: [
            { en: "Seoul", ko: "서울" },
            { en: "Gyeonggi-do", ko: "경기도" },
            { en: "Gangwon-do", ko: "강원도" },
            { en: "Chungcheong-do", ko: "충청도" },
            { en: "Jeolla-do", ko: "전라도" },
            { en: "Gyeongsang-do", ko: "경상도" },
            { en: "Jeju-do", ko: "제주도" }
        ]
    },
    france: {
        en: { name: "France", greeting: "Bonjour", food: "Croissant, Escargot", clothing: "Breton shirt", description: "Western Europe's largest country, famous for the Eiffel Tower and art." },
        ko: { name: "프랑스", greeting: "봉쥬르", food: "크로와상, 에스카르고", clothing: "브르통 셔츠", description: "서유럽에서 가장 큰 나라로, 에펠탑과 예술로 유명합니다." },
        emoji: "🇫🇷", color: "#002395",
        regions: [
            { en: "North & Île-de-France", ko: "북부 & 일드프랑스" },
            { en: "West", ko: "서부" },
            { en: "East", ko: "동부" },
            { en: "Southeast & Provence", ko: "남동부 & 프로방스" },
            { en: "Southwest", ko: "남서부" }
        ]
    },
    japan: {
        en: { name: "Japan", greeting: "Konnichiwa", food: "Sushi, Ramen", clothing: "Kimono", description: "An island nation where deep-rooted traditions meet futuristic urban landscapes." },
        ko: { name: "일본", greeting: "곤니찌와", food: "초밥, 라멘", clothing: "기모노", description: "뿌리 깊은 전통과 미래지향적인 도시 풍경이 만나는 섬나라입니다." },
        emoji: "🇯🇵", color: "#9b59b6",
        regions: [
            { en: "Hokkaido", ko: "홋카이도" },
            { en: "Tohoku (Sendai)", ko: "도호쿠 (센다이)" },
            { en: "Kanto (Tokyo)", ko: "간토 (도쿄)" },
            { en: "Chubu (Nagoya)", ko: "주부 (나고야)" },
            { en: "Kansai (Osaka/Kyoto)", ko: "간사이 (오사카·교토)" },
            { en: "Chugoku (Hiroshima)", ko: "주고쿠 (히로시마)" },
            { en: "Shikoku", ko: "시코쿠" },
            { en: "Kyushu & Okinawa (Fukuoka)", ko: "규슈·오키나와 (후쿠오카)" }
        ]
    },
    china: {
        en: { name: "China", greeting: "Ni Hao", food: "Dim Sum, Peking Duck", clothing: "Qipao", description: "A huge nation with over 5,000 years of civilization." },
        ko: { name: "중국", greeting: "니하오", food: "딤섬, 베이징 덕", clothing: "치파오", description: "5,000년 이상의 문명을 가진 거대한 나라입니다." },
        emoji: "🇨🇳", color: "#e74c3c",
        regions: [
            { en: "North China (Huabei)", ko: "화베이 (북중국)" },
            { en: "East China (Huadong)", ko: "화둥 (동중국)" },
            { en: "South China (Huanan)", ko: "화난 (남중국)" },
            { en: "Central China (Huazhong)", ko: "화중 (중중국)" },
            { en: "Southwest China (Xinan)", ko: "시난 (서남중국)" },
            { en: "Northwest China (Xibei)", ko: "시베이 (서북중국)" }
        ]
    },
    usa: {
        en: { name: "USA", greeting: "Hello", food: "Hamburger, BBQ", clothing: "Jeans", description: "A vast country known for its cultural melting pot and technology." },
        ko: { name: "미국", greeting: "헬로", food: "햄버거, 바베큐", clothing: "청바지", description: "문화적 용광로와 기술로 유명한 광대한 나라입니다." },
        emoji: "🇺🇸", color: "#B22234",
        regions: [
            { en: "Northeast (New York, Washington D.C.)", ko: "동북부 (뉴욕, 워싱턴D.C.)" },
            { en: "Southeast (Florida, Atlanta)", ko: "동남부 (플로리다, 애틀랜타)" },
            { en: "Midwest (Chicago, Detroit)", ko: "중서부 (시카고, 디트로이트)" },
            { en: "West (LA, Las Vegas)", ko: "서부 (LA, 라스베이거스)" },
            { en: "Southwest (Texas, Arizona)", ko: "남서부 (텍사스, 애리조나)" }
        ]
    },
    spain: {
        en: { name: "Spain", greeting: "Hola", food: "Paella, Tapas", clothing: "Flamenco dress", description: "Known for sunny beaches and unique architecture." },
        ko: { name: "스페인", greeting: "올라", food: "파에야, 타파스", clothing: "플라멩코 의상", description: "화창한 해변과 독특한 건축물로 유명합니다." },
        emoji: "🇪🇸", color: "#f1c40f",
        regions: [
            { en: "Central: Madrid, Castile and León", ko: "중부: 마드리드 (수도), 카스티야이레온" },
            { en: "North: Basque Country, Galicia", ko: "북부: 바스크, 갈리시아" },
            { en: "East: Catalonia (Barcelona), Valencia", ko: "동부: 카탈루냐, 발렌시아" },
            { en: "South: Andalusia", ko: "남부: 안달루시아" },
            { en: "Islands: Balearic, Canary Islands", ko: "도서: 발레아레스, 카나리아" }
        ]
    },
    italy: {
        en: { name: "Italy", greeting: "Ciao", food: "Pizza, Pasta", clothing: "High Fashion", description: "The birthplace of the Renaissance, rich in art and food." },
        ko: { name: "이탈리아", greeting: "챠오", food: "피자, 파스타", clothing: "하이 패션", description: "르네상스의 발상지로, 예술과 음식이 풍부한 나라입니다." },
        emoji: "🇮🇹", color: "#27ae60",
        regions: [
            { en: "North (Milan, Venice)", ko: "북부 (밀라노, 베네치아)" },
            { en: "Central (Rome, Florence)", ko: "중부 (로마, 피렌체)" },
            { en: "South (Naples, Sicily, Sardinia)", ko: "남부 (나폴리, 시칠리아, 사르데냐)" }
        ]
    },
    turkey: {
        en: { name: "Turkey", greeting: "Merhaba", food: "Kebab, Baklava", clothing: "Kaftan", description: "A transcontinental country bridging Europe and Asia." },
        ko: { name: "튀르키예", greeting: "메르하바", food: "케밥, 바클라바", clothing: "카프탄", description: "유럽과 아시아를 잇는 대륙 횡단 국가입니다." },
        emoji: "🇹🇷", color: "#c0392b",
        regions: [
            { en: "Marmara (Istanbul)", ko: "마르마라 (이스탄불)" },
            { en: "Central Anatolia (Ankara, Cappadocia)", ko: "중앙아나톨리아 (앙카라, 카파도키아)" },
            { en: "Aegean (Izmir)", ko: "에게해 (이즈미르)" },
            { en: "Mediterranean (Antalya)", ko: "지중해 (안탈리아)" },
            { en: "Black Sea (Trabzon)", ko: "흑해 (트라브존)" },
            { en: "East & Southeast (Historic Sites)", ko: "동부·동남부 (유적지 밀집)" }
        ]
    },
    mexico: {
        en: { name: "Mexico", greeting: "Hola", food: "Tacos, Burritos", clothing: "Sombrero", description: "Famous for its ancient ruins and colorful festivals." },
        ko: { name: "멕시코", greeting: "올라", food: "타코, 부리또", clothing: "솜브레로", description: "고대 유적과 화려한 축제로 유명합니다." },
        emoji: "🇲🇽", color: "#16a085",
        regions: [
            { en: "North (Monterrey)", ko: "북부 (몬테레이)" },
            { en: "Central (Mexico City, Puebla)", ko: "중부 (멕시코시티, 푸에블라)" },
            { en: "Pacific Coast (Guadalajara)", ko: "태평양 연안 (과달라하라)" },
            { en: "Gulf of Mexico (Veracruz)", ko: "멕시코만 (베라크루스)" },
            { en: "Yucatán Peninsula (Cancún, Mérida)", ko: "유카탄 반도 (칸쿤, 메리다)" }
        ]
    },
    uk: {
        en: { name: "United Kingdom", greeting: "Hello", food: "Fish and Chips", clothing: "Kilts", description: "Comprising four nations with long historical influence." },
        ko: { name: "영국", greeting: "헬로", food: "피쉬 앤 칩스", clothing: "킬트", description: "네 개의 국가로 구성된 긴 역사를 가진 나라입니다." },
        emoji: "🇬🇧", color: "#2c3e50",
        regions: [
            { en: "England (London)", ko: "잉글랜드 (런던)" },
            { en: "Scotland (Edinburgh)", ko: "스코틀랜드 (에든버러)" },
            { en: "Wales (Cardiff)", ko: "웨일스 (카디프)" },
            { en: "Northern Ireland (Belfast)", ko: "북아일랜드 (벨파스트)" }
        ]
    },
    germany: {
        en: { name: "Germany", greeting: "Hallo", food: "Pretzel, Schnitzel", clothing: "Lederhosen", description: "Known for its engineering, beer, and historical cities." },
        ko: { name: "독일", greeting: "할로", food: "프레첼, 슈니첼", clothing: "레더호젠", description: "공학, 맥주, 그리고 역사적인 도시들로 유명합니다." },
        emoji: "🇩🇪", color: "#34495e",
        regions: [
            { en: "North (Hamburg)", ko: "북부 (함부르크)" },
            { en: "East (Berlin)", ko: "동부 (베를린)" },
            { en: "West (Frankfurt, Cologne)", ko: "서부 (프랑크푸르트, 쾰른)" },
            { en: "South (Munich, Stuttgart)", ko: "남부 (뮌헨, 슈투트가르트)" }
        ]
    },
    greece: {
        en: { name: "Greece", greeting: "Yasas", food: "Moussaka, Gyros", clothing: "Chiton", description: "The cradle of Western civilization and beautiful islands." },
        ko: { name: "그리스", greeting: "야사스", food: "무사카, 기로스", clothing: "키톤", description: "서구 문명의 발상지와 아름다운 섬들로 유명합니다." },
        emoji: "🇬🇷", color: "#2980b9",
        regions: [
            { en: "Central Greece (Athens)", ko: "중앙 그리스 (아테네)" },
            { en: "Peloponnese (Sparta)", ko: "펠로폰네소스 (스파르타)" },
            { en: "North (Thessaloniki)", ko: "북부 (테살로니키)" },
            { en: "Islands (Santorini, Mykonos, Crete)", ko: "도서 지역 (산토리니, 미코노스, 크레타)" }
        ]
    }
};

const uiTranslations = {
    en: {
        pageTitle: "🌏 World Culture Guide",
        btnRegions: "🏘️ View Detailed Regions",
        modalHint: "Select a region to see its name",
        greeting: "Greeting", food: "Famous Food", clothing: "Clothing",
        footer: "© 2026 World Culture Guide. All rights reserved.",
        themeLight: "☀️ Light Mode", themeDark: "🌙 Dark Mode"
    },
    ko: {
        pageTitle: "🌏 세계 문화 가이드",
        btnRegions: "🏘️ 상세 지역 보기",
        modalHint: "지역을 선택하면 이름을 확인할 수 있습니다",
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
const regionModal = document.getElementById('regionModal');
const closeModal = document.getElementById('closeModal');
const regionsContainer = document.getElementById('regionsContainer');
const modalTitle = document.getElementById('modalTitle');
const selectedRegionTitle = document.getElementById('selectedRegionTitle');
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
            <button class="map-btn" onclick="showRegions('${countryKey}')">${uiTranslations[currentLang].btnRegions}</button>
        </article>
    `;
}

function showRegions(countryKey) {
    const data = cultures[countryKey];
    const content = data[currentLang];
    modalTitle.textContent = `${data.emoji} ${content.name} - ${uiTranslations[currentLang].btnRegions}`;
    selectedRegionTitle.textContent = "";
    
    regionsContainer.innerHTML = "";
    data.regions.forEach(region => {
        const btn = document.createElement('button');
        btn.className = 'region-item-btn';
        btn.textContent = currentLang === 'ko' ? region.ko : region.en;
        btn.onclick = (e) => {
            regionsContainer.querySelectorAll('.region-item-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedRegionTitle.textContent = currentLang === 'ko' ? region.ko : region.en;
        };
        regionsContainer.appendChild(btn);
    });

    regionModal.style.display = "flex";
}

function closeRegions() { regionModal.style.display = "none"; }
closeModal.onclick = closeRegions;
window.onclick = (e) => { if (e.target == regionModal) closeRegions(); };

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
