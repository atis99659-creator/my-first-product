// Data Store for World Culture Guide
export const cultures = {
    korea: {
        en: { name: "South Korea", greeting: "Annyeonghaseyo", food: "Kimchi, Bulgogi", clothing: "Hanbok", description: "A country with 5,000 years of history, blending ancient tradition with cutting-edge technology." },
        ko: { name: "대한민국", greeting: "안녕하세요", food: "김치, 불고기", clothing: "한복", description: "반만년의 역사를 가진 나라로, 고대 전통과 첨단 기술이 조화롭게 공존하는 곳입니다." },
        emoji: "🇰🇷", color: "#3498db", code: "kr",
        regions: [
            { 
                en: "Seoul", ko: "서울",
                themes: {
                    restaurant: [
                        { name: "명동교자 (명동)", url: "https://www.google.com/maps/search/명동교자+명동" },
                        { name: "우래옥 (을지로)", url: "https://www.google.com/maps/search/우래옥+을지로" },
                        { name: "금돼지식당 (약수)", url: "https://www.google.com/maps/search/금돼지식당+약수" },
                        { name: "몽탄 (삼각지)", url: "https://www.google.com/maps/search/몽탄+삼각지" },
                        { name: "안덕 (서촌)", url: "https://www.google.com/maps/search/안덕+서촌" },
                        { name: "3대삼계장인 (서초)", url: "https://www.google.com/maps/search/3대삼계장인+서초" },
                        { name: "진진 (망원)", url: "https://www.google.com/maps/search/진진+망원" },
                        { name: "쮸즈 (가로수길)", url: "https://www.google.com/maps/search/쮸즈+가로수길" },
                        { name: "밍글스 (강남)", url: "https://www.google.com/maps/search/밍글스+강남" },
                        { name: "모수서울 (용산)", url: "https://www.google.com/maps/search/모수서울+용산" }
                    ]
                }
            },
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
        emoji: "🇫🇷", color: "#002395", code: "fr",
        regions: [
            { en: "Île-de-France", ko: "일드프랑스" },
            { en: "Auvergne-Rhône-Alpes", ko: "오베르뉴-론-알프" },
            { en: "Provence-Alpes-Côte d'Azur", ko: "프로방스-알프-코트다쥐르" },
            { en: "Nouvelle-Aquitaine", ko: "누벨 아키텐" },
            { en: "Occitanie", ko: "옥시타니" },
            { en: "Grand Est", ko: "그랑 데스트" },
            { en: "Hauts-de-France", ko: "오드프랑스" },
            { en: "Normandie", ko: "노르망디" },
            { en: "Bretagne", ko: "브르타뉴" },
            { en: "Pays de la Loire", ko: "페이드라루아르" },
            { en: "Centre-Val de Loire", ko: "상트르발드루아르" },
            { en: "Bourgogne-Franche-Comté", ko: "부르고뉴-프랑슈-콩테" },
            { en: "Corse", ko: "코르스" }
        ]
    },
    japan: {
        en: { name: "Japan", greeting: "Konnichiwa", food: "Sushi, Ramen", clothing: "Kimono", description: "An island nation where deep-rooted traditions meet futuristic urban landscapes." },
        ko: { name: "일본", greeting: "곤니찌와", food: "초밥, 라멘", clothing: "기모노", description: "뿌리 깊은 전통과 미래지향적인 도시 풍경이 만나는 섬나라입니다." },
        emoji: "🇯🇵", color: "#9b59b6", code: "jp",
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
        emoji: "🇨🇳", color: "#e74c3c", code: "cn",
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
        emoji: "🇺🇸", color: "#B22234", code: "us",
        regions: [
            { en: "Florida", ko: "플로리다" },
            { en: "New York", ko: "뉴욕" },
            { en: "California", ko: "캘리포니아" },
            { en: "Texas", ko: "텍사스" },
            { en: "Pennsylvania", ko: "펜실베이니아" },
            { en: "Georgia", ko: "조지아" },
            { en: "Tennessee", ko: "테네시" },
            { en: "Illinois", ko: "일리노이" },
            { en: "Nevada", ko: "네바다" },
            { en: "North Carolina", ko: "노스캐롤라이나" }
        ]
    },
    spain: {
        en: { name: "Spain", greeting: "Hola", food: "Paella, Tapas", clothing: "Flamenco dress", description: "Known for sunny beaches and unique architecture." },
        ko: { name: "스페인", greeting: "올라", food: "파에야, 타파스", clothing: "플라멩코 의상", description: "화창한 해변과 독특한 건축물로 유명합니다." },
        emoji: "🇪🇸", color: "#f1c40f", code: "es",
        regions: [
            { en: "Andalusia", ko: "안달루시아" },
            { en: "Catalonia", ko: "카탈루냐" },
            { en: "Madrid", ko: "마드리드" },
            { en: "Valencia", ko: "발렌시아" },
            { en: "Galicia", ko: "갈리시아" },
            { en: "Castile and León", ko: "카스티야이레온" },
            { en: "Castile-La Mancha", ko: "카스티야라만차" },
            { en: "Basque Country", ko: "바스크" },
            { en: "Aragon", ko: "아라곤" },
            { en: "Canary Islands", ko: "카나리아 제도" },
            { en: "Balearic Islands", ko: "발레아레스 제도" },
            { en: "Extremadura", ko: "에스트레마두라" },
            { en: "Asturias", ko: "아스투리아스" },
            { en: "Murcia", ko: "무르시아" },
            { en: "Navarre", ko: "나바라" },
            { en: "Cantabria", ko: "칸타브리아" },
            { en: "La Rioja", ko: "라리오하" }
        ]
    },
    italy: {
        en: { name: "Italy", greeting: "Ciao", food: "Pizza, Pasta", clothing: "High Fashion", description: "The birthplace of the Renaissance, rich in art and food." },
        ko: { name: "이탈리아", greeting: "챠오", food: "피자, 파스타", clothing: "하이 패션", description: "르네상스의 발상지로, 예술과 음식이 풍부한 나라입니다." },
        emoji: "🇮🇹", color: "#27ae60", code: "it",
        regions: [
            { en: "Lombardy", ko: "롬바르디아" },
            { en: "Veneto", ko: "베네토" },
            { en: "Piedmont", ko: "피에몬테" },
            { en: "Liguria", ko: "리구리아" },
            { en: "Emilia-Romagna", ko: "에밀리아-로마냐" },
            { en: "Trentino-Alto Adige", ko: "트렌티노-알토 아디제" },
            { en: "Friuli-Venezia Giulia", ko: "프리울리-베네치아 줄리아" },
            { en: "Aosta Valley", ko: "발레다오스타" },
            { en: "Tuscany", ko: "토스카나" },
            { en: "Lazio", ko: "라치오" },
            { en: "Umbria", ko: "움브리아" },
            { en: "Marche", ko: "마르케" },
            { en: "Campania", ko: "캄파니아" },
            { en: "Apulia", ko: "풀리아" },
            { en: "Sicily", ko: "시칠리아" },
            { en: "Sardinia", ko: "사르데냐" },
            { en: "Calabria", ko: "칼라브리아" },
            { en: "Basilicata", ko: "바실리카타" },
            { en: "Molise", ko: "몰리제" },
            { en: "Abruzzo", ko: "아브루초" }
        ]
    },
    turkey: {
        en: { name: "Turkey", greeting: "Merhaba", food: "Kebab, Baklava", clothing: "Kaftan", description: "A transcontinental country bridging Europe and Asia." },
        ko: { name: "튀르키예", greeting: "메르하바", food: "케밥, 바클라바", clothing: "카프탄", description: "유럽과 아시아를 잇는 대륙 횡단 국가입니다." },
        emoji: "🇹🇷", color: "#c0392b", code: "tr",
        regions: [
            { en: "Marmara", ko: "마르마라" },
            { en: "Aegean", ko: "에게해" },
            { en: "Mediterranean", ko: "지중해" },
            { en: "Central Anatolia", ko: "중앙 아나톨리아" },
            { en: "Black Sea", ko: "흑해" },
            { en: "Eastern Anatolia", ko: "동부 아나톨리아" },
            { en: "Southeastern Anatolia", ko: "동남부 아나톨리아" }
        ]
    },
    mexico: {
        en: { name: "Mexico", greeting: "Hola", food: "Tacos, Burritos", clothing: "Sombrero", description: "Famous for its ancient ruins and colorful festivals." },
        ko: { name: "멕시코", greeting: "올라", food: "타코, 부리또", clothing: "솜브레로", description: "고대 유적과 화려한 축제로 유명합니다." },
        emoji: "🇲🇽", color: "#16a085", code: "mx",
        regions: [
            { en: "North", ko: "북부" },
            { en: "Northwest", ko: "북서부" },
            { en: "West-Central", ko: "중서부" },
            { en: "Central", ko: "중부" },
            { en: "South and Southeast", ko: "남부 및 동남부" }
        ]
    },
    uk: {
        en: { name: "United Kingdom", greeting: "Hello", food: "Fish and Chips", clothing: "Kilts", description: "Comprising four nations with long historical influence." },
        ko: { name: "영국", greeting: "헬로", food: "피쉬 앤 칩스", clothing: "킬트", description: "네 개의 국가로 구성된 긴 역사를 가진 나라입니다." },
        emoji: "🇬🇧", color: "#2c3e50", code: "gb",
        regions: [
            { en: "England", ko: "잉글랜드" },
            { en: "Scotland", ko: "스코틀랜드" },
            { en: "Wales", ko: "웨일스" },
            { en: "Northern Ireland", ko: "북아일랜드" }
        ]
    },
    germany: {
        en: { name: "Germany", greeting: "Hallo", food: "Pretzel, Schnitzel", clothing: "Lederhosen", description: "Known for its engineering, beer, and historical cities." },
        ko: { name: "독일", greeting: "할로", food: "프레첼, 슈니첼", clothing: "레더호젠", description: "공학, 맥주, 그리고 역사적인 도시들로 유명합니다." },
        emoji: "🇩🇪", color: "#34495e", code: "de",
        regions: [
            { en: "Bavaria", ko: "바이에른" },
            { en: "North Rhine-Westphalia", ko: "노르트라인-베스트팔렌" },
            { en: "Baden-Württemberg", ko: "바덴-뷔르템베르크" },
            { en: "Hesse", ko: "헤센" },
            { en: "Lower Saxony", ko: "니더작센" },
            { en: "Saxony", ko: "작센" },
            { en: "Rhineland-Palatinate", ko: "라인란트-팔츠" },
            { en: "Schleswig-Holstein", ko: "슐레스비히-홀슈타인" },
            { en: "Brandenburg", ko: "브란덴부르크" },
            { en: "Mecklenburg-Vorpommern", ko: "메클렌부르크-포어포메른" },
            { en: "Thuringia", ko: "튀링겐" },
            { en: "Saxony-Anhalt", ko: "작센-안할트" },
            { en: "Saarland", ko: "자를란트" },
            { en: "Berlin", ko: "베를린" },
            { en: "Hamburg", ko: "함부르크" },
            { en: "Bremen", ko: "브레멘" }
        ]
    },
    greece: {
        en: { name: "Greece", greeting: "Yasas", food: "Moussaka, Gyros", clothing: "Chiton", description: "The cradle of Western civilization and beautiful islands." },
        ko: { name: "그리스", greeting: "야사스", food: "무사카, 기로스", clothing: "키톤", description: "서구 문명의 발상지와 아름다운 섬들로 유명합니다." },
        emoji: "🇬🇷", color: "#2980b9", code: "gr",
        regions: [
            { en: "Attica", ko: "아티키" },
            { en: "Central Macedonia", ko: "중앙 마케도니아" },
            { en: "Crete", ko: "크레타" },
            { en: "South Aegean", ko: "남에게" },
            { en: "North Aegean", ko: "북에게" },
            { en: "Ionian Islands", ko: "이오니아 제도" },
            { en: "Peloponnese", ko: "펠로폰네소스" },
            { en: "West Macedonia", ko: "서마케도니아" },
            { en: "East Macedonia and Thrace", ko: "동마케도니아-트라키아" },
            { en: "Epirus", ko: "에피루스" },
            { en: "Thessaly", ko: "테살리아" },
            { en: "Central Greece", ko: "중앙그리스" },
            { en: "West Greece", ko: "서그리스" }
        ]
    }
};

export const uiTranslations = {
    en: {
        pageTitle: "🌏 World Culture Guide",
        btnRegions: "🏘️ View Detailed Regions",
        modalHint: "Select a region to see its name",
        greeting: "Greeting", food: "Famous Food", clothing: "Clothing",
        footer: "© 2026 World Culture Guide. All rights reserved.",
        themeLight: "☀️ Light Mode", themeDark: "🌙 Dark Mode",
        themes: {
            restaurant: "🍴 Restaurants",
            cafe: "☕ Cafes",
            landmark: "🏰 Landmarks",
            activity: "⛷️ Activities"
        }
    },
    ko: {
        pageTitle: "🌏 세계 문화 가이드",
        btnRegions: "🏘️ 상세 지역 보기",
        modalHint: "지역을 선택하면 이름을 확인할 수 있습니다",
        greeting: "인사말", food: "대표 음식", clothing: "전통 의상",
        footer: "© 2026 세계 문화 가이드. 모든 권리 보유.",
        themeLight: "☀️ 라이트 모드", themeDark: "🌙 다크 모드",
        themes: {
            restaurant: "🍴 음식점",
            cafe: "☕ 카페",
            landmark: "🏰 명소",
            activity: "⛷️ 액티비티"
        }
    }
};
