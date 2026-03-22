// Data Store with Multi-Language Support
const cultures = {
    korea: {
        en: {
            name: "South Korea",
            greeting: "Annyeonghaseyo (안녕하세요)",
            food: "Kimchi, Bulgogi, Bibimbap",
            clothing: "Hanbok (Traditional Korean Dress)",
            description: "South Korea is known for its hilly countryside, centuries-old Buddhist temples, and high-tech cities like Seoul. It has a rich cultural heritage blending tradition with modernity."
        },
        ko: {
            name: "대한민국",
            greeting: "안녕하세요",
            food: "김치, 불고기, 비빔밥",
            clothing: "한복 (대한민국 전통 의상)",
            description: "대한민국은 반만년의 유구한 역사를 가진 나라로, 전통적인 불교 사찰과 서울과 같은 첨단 IT 도시가 공존하는 곳입니다. 유네스코 세계유산과 K-Pop 등 독창적인 문화를 보유하고 있습니다."
        },
        emoji: "🇰🇷",
        color: "#3498db"
    },
    china: {
        en: {
            name: "China",
            greeting: "Ni Hao (你好)",
            food: "Peking Duck, Dim Sum, Hot Pot",
            clothing: "Hanfu, Qipao / Cheongsam",
            description: "China is a vast nation with diverse landscapes and a history spanning millennia. It is home to the Forbidden City and the Great Wall."
        },
        ko: {
            name: "중국",
            greeting: "니하오 (你好)",
            food: "베이징 덕, 딤섬, 훠궈",
            clothing: "한푸, 치파오",
            description: "중국은 광대한 영토와 유구한 역사를 가진 나라로, 자금성과 만리장성 같은 역사적인 유적지부터 현대적인 마천루까지 다양한 모습을 갖추고 있습니다."
        },
        emoji: "🇨🇳",
        color: "#e74c3c"
    },
    japan: {
        en: {
            name: "Japan",
            greeting: "Konnichiwa (こんにちは)",
            food: "Sushi, Ramen, Tempura",
            clothing: "Kimono, Yukata",
            description: "Japan is an island nation blending ancient traditions with futuristic technology. It's famous for its cherry blossoms, shrines, and cuisine."
        },
        ko: {
            name: "일본",
            greeting: "곤니찌와 (こんにちは)",
            food: "초밥, 라멘, 튀김",
            clothing: "기모노, 유카타",
            description: "일본은 고대 전통과 미래 기술이 조화를 이루는 섬나라입니다. 벚꽃, 신사, 그리고 독특한 식문화로 전 세계적으로 잘 알려져 있습니다."
        },
        emoji: "🇯🇵",
        color: "#9b59b6"
    }
};

const uiTranslations = {
    en: {
        pageTitle: "🌏 Culture Guide",
        btnKorea: "🇰🇷 Korea",
        btnChina: "🇨🇳 China",
        btnJapan: "🇯🇵 Japan",
        greeting: "Greeting",
        food: "Famous Food",
        clothing: "Clothing",
        footer: "© 2026 East Asian Culture Guide. All rights reserved.",
        themeLight: "☀️ Light Mode",
        themeDark: "🌙 Dark Mode"
    },
    ko: {
        pageTitle: "🌏 문화 가이드",
        btnKorea: "🇰🇷 한국",
        btnChina: "🇨🇳 중국",
        btnJapan: "🇯🇵 일본",
        greeting: "인사말",
        food: "대표 음식",
        clothing: "전통 의상",
        footer: "© 2026 동아시아 문화 가이드. 모든 권리 보유.",
        themeLight: "☀️ 라이트 모드",
        themeDark: "🌙 다크 모드"
    }
};

// DOM Elements
const contentContainer = document.getElementById('content');
const navButtons = document.querySelectorAll('.nav-btn');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const html = document.documentElement;

let currentLang = localStorage.getItem('lang') || 'ko';
let currentTheme = localStorage.getItem('theme') || 'light';
let activeCountry = 'korea';

// --- Theme Logic ---

const updateThemeUI = (theme) => {
    html.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'dark' ? uiTranslations[currentLang].themeLight : uiTranslations[currentLang].themeDark;
};

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    updateThemeUI(currentTheme);
});

// --- Language Logic ---

const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update static UI
    document.getElementById('pageTitle').textContent = uiTranslations[lang].pageTitle;
    document.getElementById('btnKorea').textContent = uiTranslations[lang].btnKorea;
    document.getElementById('btnChina').textContent = uiTranslations[lang].btnChina;
    document.getElementById('btnJapan').textContent = uiTranslations[lang].btnJapan;
    document.getElementById('footerText').textContent = uiTranslations[lang].footer;
    langToggle.textContent = lang === 'en' ? '🇰🇷 한국어' : '🇺🇸 English';
    
    // Update theme toggle text
    updateThemeUI(currentTheme);
    
    // Re-render current content
    renderCountry(activeCountry);
};

langToggle.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'ko' : 'en';
    setLanguage(nextLang);
});

// --- Content Logic ---

const renderCountry = (countryKey) => {
    activeCountry = countryKey;
    const countryData = cultures[countryKey];
    const data = countryData[currentLang];
    const labels = uiTranslations[currentLang];

    document.documentElement.style.setProperty('--primary-color', countryData.color);

    contentContainer.innerHTML = `
        <article class="content-card">
            <div class="country-header">
                <h2>${countryData.emoji} ${data.name}</h2>
                <p>${data.description}</p>
            </div>
            
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-icon">👋</span>
                    <h3>${labels.greeting}</h3>
                    <p>${data.greeting}</p>
                </div>
                <div class="info-item">
                    <span class="info-icon">🍱</span>
                    <h3>${labels.food}</h3>
                    <p>${data.food}</p>
                </div>
                <div class="info-item">
                    <span class="info-icon">👘</span>
                    <h3>${labels.clothing}</h3>
                    <p>${data.clothing}</p>
                </div>
            </div>
        </article>
    `;
};

// Event Listeners for Nav
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCountry(btn.getAttribute('data-country'));
    });
});

// Initialize App
const init = () => {
    // Initial Theme
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    currentTheme = localStorage.getItem('theme') || systemPreference;
    
    setLanguage(currentLang); // This will also call renderCountry and updateThemeUI
};

init();
