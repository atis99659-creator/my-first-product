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
            description: "대한민국은 반만년의 유구한 역사를 가진 나라로, 전통적인 불교 사찰과 서울과 같은 첨단 IT 도시가 공존하는 곳입니다. 유네스코 세계유산 과 K-Pop 등 독창적인 문화를 보유하고 있습니다."
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
    },
    france: {
        en: {
            name: "France",
            greeting: "Bonjour",
            food: "Croissant, Escargot, Ratatouille",
            clothing: "Breton shirt, Regional folk costumes",
            description: "France is famous for its art, gastronomy, and culture. It's home to the Eiffel Tower and renowned for its wine and fashion."
        },
        ko: {
            name: "프랑스",
            greeting: "봉쥬르 (Bonjour)",
            food: "크로와상, 에스카르고, 라따뚜이",
            clothing: "브르통 셔츠, 지역 전통 의상",
            description: "프랑스는 예술, 미식, 그리고 문화로 유명합니다. 에펠탑의 나라이며 와인과 패션으로 전 세계적인 명성을 떨치고 있습니다."
        },
        emoji: "🇫🇷",
        color: "#002395"
    },
    spain: {
        en: {
            name: "Spain",
            greeting: "Hola",
            food: "Paella, Tapas, Gazpacho",
            clothing: "Traje de flamenca",
            description: "Spain is known for its sunny weather, vibrant festivals like La Tomatina, and stunning architecture by Antoni Gaudí."
        },
        ko: {
            name: "스페인",
            greeting: "올라 (Hola)",
            food: "파에야, 타파스, 가스파초",
            clothing: "트라헤 데 플라멩카 (플라멩코 의상)",
            description: "스페인은 화창한 날씨, 라 토마티나와 같은 활기찬 축제, 그리고 안토니 가우디의 놀라운 건축물로 잘 알려져 있습니다."
        },
        emoji: "🇪🇸",
        color: "#EF3340"
    },
    usa: {
        en: {
            name: "USA",
            greeting: "Hello",
            food: "Hamburger, BBQ, Apple Pie",
            clothing: "Jeans, Cowboy attire (historical)",
            description: "The United States is a diverse nation known for its global influence in entertainment, technology, and politics."
        },
        ko: {
            name: "미국",
            greeting: "헬로 (Hello)",
            food: "햄버거, 바베큐, 애플 파이",
            clothing: "청바지, 카우보이 복장 (역사적)",
            description: "미국은 엔터테인먼트, 기술, 정치 분야에서 세계적인 영향력을 가진 다양성의 나라입니다."
        },
        emoji: "🇺🇸",
        color: "#B22234"
    },
    turkey: {
        en: {
            name: "Turkey",
            greeting: "Merhaba",
            food: "Kebab, Baklava, Turkish Delight",
            clothing: "Kaftan (historical)",
            description: "Turkey bridges Europe and Asia, offering a rich blend of Ottoman history and stunning Mediterranean landscapes."
        },
        ko: {
            name: "튀르키예",
            greeting: "메르하바 (Merhaba)",
            food: "케밥, 바클라바, 터키쉬 딜라이트",
            clothing: "카프탄 (역사적 의상)",
            description: "튀르키예는 유럽과 아시아를 잇는 교두보로, 오스만 제국의 역사와 아름다운 지중해 풍경이 어우러진 곳입니다."
        },
        emoji: "🇹🇷",
        color: "#E30A17"
    },
    italy: {
        en: {
            name: "Italy",
            greeting: "Ciao",
            food: "Pizza, Pasta, Gelato",
            clothing: "Toga (ancient), High Fashion",
            description: "Italy is the birthplace of the Renaissance, famous for its historical landmarks, world-class art, and exceptional cuisine."
        },
        ko: {
            name: "이탈리아",
            greeting: "챠오 (Ciao)",
            food: "피자, 파스타, 젤라또",
            clothing: "토가 (고대), 현대 하이 패션",
            description: "이탈리아는 르네상스의 발상지로, 역사적인 랜드마크와 세계적인 예술, 그리고 뛰어난 요리로 유명합니다."
        },
        emoji: "🇮🇹",
        color: "#008C45"
    },
    mexico: {
        en: {
            name: "Mexico",
            greeting: "Hola",
            food: "Tacos, Burritos, Enchiladas",
            clothing: "Huipil, Sombrero",
            description: "Mexico is known for its rich Aztec and Mayan heritage, colorful festivals, and spicy, flavorful cuisine."
        },
        ko: {
            name: "멕시코",
            greeting: "올라 (Hola)",
            food: "타코, 부리또, 엔칠라다",
            clothing: "위필, 솜브레로",
            description: "멕시코는 아즈텍과 마야 문명의 풍부한 유산, 다채로운 축제, 그리고 매콤하고 풍미 가득한 요리로 유명합니다."
        },
        emoji: "🇲🇽",
        color: "#006847"
    },
    uk: {
        en: {
            name: "United Kingdom",
            greeting: "Hello",
            food: "Fish and Chips, Roast Beef, Scones",
            clothing: "Kilts (Scotland), Trench coat",
            description: "The UK has a global cultural reach through its history, monarchy, and influential music and literature."
        },
        ko: {
            name: "영국",
            greeting: "헬로 (Hello)",
            food: "피쉬 앤 칩스, 로스트 비프, 스콘",
            clothing: "킬트 (스코틀랜드), 트렌치 코트",
            description: "영국은 역사, 왕실, 그리고 영향력 있는 음악과 문학을 통해 세계적인 문화적 파급력을 가지고 있습니다."
        },
        emoji: "🇬🇧",
        color: "#012169"
    },
    germany: {
        en: {
            name: "Germany",
            greeting: "Hallo / Guten Tag",
            food: "Schnitzel, Sauerkraut, Pretzel",
            clothing: "Lederhosen, Dirndl",
            description: "Germany is known for its engineering, classical music, and historical cities, as well as its famous festivals like Oktoberfest."
        },
        ko: {
            name: "독일",
            greeting: "할로 (Hallo)",
            food: "슈니첼, 자우어크라우트, 프레첼",
            clothing: "레더호젠, 딘들",
            description: "독일은 공학, 클래식 음악, 역사적인 도시들뿐만 아니라 옥토버페스트와 같은 유명한 축제로 잘 알려져 있습니다."
        },
        emoji: "🇩🇪",
        color: "#000000"
    },
    greece: {
        en: {
            name: "Greece",
            greeting: "Yasas",
            food: "Moussaka, Souvlaki, Gyros",
            clothing: "Chiton (ancient), Fustanella",
            description: "Greece is the cradle of Western civilization, famous for its ancient philosophy, mythology, and beautiful islands."
        },
        ko: {
            name: "그리스",
            greeting: "야사스 (Yasas)",
            food: "무사카, 수블라키, 기로스",
            clothing: "키톤 (고대), 푸스타넬라",
            description: "그리스는 서구 문명의 발상지로, 고대 철학, 신화, 그리고 아름다운 섬들로 유명합니다."
        },
        emoji: "🇬🇷",
        color: "#001489"
    }
};

const uiTranslations = {
    en: {
        pageTitle: "🌏 World Culture Guide",
        btnKorea: "🇰🇷 Korea",
        btnChina: "🇨🇳 China",
        btnJapan: "🇯🇵 Japan",
        btnFrance: "🇫🇷 France",
        btnSpain: "🇪🇸 Spain",
        btnUSA: "🇺🇸 USA",
        btnTurkey: "🇹🇷 Turkey",
        btnItaly: "🇮🇹 Italy",
        btnMexico: "🇲🇽 Mexico",
        btnUK: "🇬🇧 UK",
        btnGermany: "🇩🇪 Germany",
        btnGreece: "🇬🇷 Greece",
        greeting: "Greeting",
        food: "Famous Food",
        clothing: "Clothing",
        footer: "© 2026 World Culture Guide. All rights reserved.",
        themeLight: "☀️ Light Mode",
        themeDark: "🌙 Dark Mode"
    },
    ko: {
        pageTitle: "🌏 세계 문화 가이드",
        btnKorea: "🇰🇷 한국",
        btnChina: "🇨🇳 중국",
        btnJapan: "🇯🇵 일본",
        btnFrance: "🇫🇷 프랑스",
        btnSpain: "🇪🇸 스페인",
        btnUSA: "🇺🇸 미국",
        btnTurkey: "🇹🇷 튀르키예",
        btnItaly: "🇮🇹 이탈리아",
        btnMexico: "🇲🇽 멕시코",
        btnUK: "🇬🇧 영국",
        btnGermany: "🇩🇪 독일",
        btnGreece: "🇬🇷 그리스",
        greeting: "인사말",
        food: "대표 음식",
        clothing: "전통 의상",
        footer: "© 2026 세계 문화 가이드. 모든 권리 보유.",
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

// Initialize
function init() {
    applyTheme(currentTheme);
    updateUI();
    renderContent('korea');
    
    // Set active button
    document.querySelector(`[data-country="korea"]`).classList.add('active');
}

// Update UI Labels
function updateUI() {
    document.getElementById('pageTitle').textContent = uiTranslations[currentLang].pageTitle;
    document.getElementById('footerText').textContent = uiTranslations[currentLang].footer;
    langToggle.textContent = currentLang === 'en' ? '한국어' : 'English';
    themeToggle.textContent = currentTheme === 'light' ? uiTranslations[currentLang].themeDark : uiTranslations[currentLang].themeLight;
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const country = btn.getAttribute('data-country');
        const translationKey = 'btn' + country.charAt(0).toUpperCase() + country.slice(1);
        if (uiTranslations[currentLang][translationKey]) {
            btn.textContent = uiTranslations[currentLang][translationKey];
        } else if (country === 'usa') {
            btn.textContent = uiTranslations[currentLang].btnUSA;
        } else if (country === 'uk') {
            btn.textContent = uiTranslations[currentLang].btnUK;
        }
    });
}

// Render Country Content
function renderContent(countryKey) {
    const data = cultures[countryKey];
    const content = data[currentLang];
    
    // Update theme color dynamically
    document.documentElement.style.setProperty('--primary-color', data.color);
    
    contentContainer.innerHTML = `
        <article class="content-card">
            <header class="country-header">
                <h2>${data.emoji} ${content.name}</h2>
                <p class="description">${content.description}</p>
            </header>
            
            <div class="info-grid">
                <section class="info-item">
                    <span class="info-icon">🗣️</span>
                    <h3>${uiTranslations[currentLang].greeting}</h3>
                    <p>${content.greeting}</p>
                </section>
                
                <section class="info-item">
                    <span class="info-icon">🍲</span>
                    <h3>${uiTranslations[currentLang].food}</h3>
                    <p>${content.food}</p>
                </section>
                
                <section class="info-item">
                    <span class="info-icon">👘</span>
                    <h3>${uiTranslations[currentLang].clothing}</h3>
                    <p>${content.clothing}</p>
                </section>
            </div>
        </article>
    `;
}

// Theme Handling
function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Event Listeners
document.getElementById('navBar').addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-btn')) {
        const country = e.target.getAttribute('data-country');
        
        // Update active state
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
    
    // Refresh content with new language
    const activeBtn = document.querySelector('.nav-btn.active');
    if (activeBtn) {
        renderContent(activeBtn.getAttribute('data-country'));
    }
});

init();
