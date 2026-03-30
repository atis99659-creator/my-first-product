import { fetchAllCountries } from './data.js';
import { elements, updateUI, renderContent, renderQuickNav, renderAllCountries, setupSearch, closeRegions, initUiEvents } from './ui.js';

let currentLang = localStorage.getItem('lang') || 'ko';
let allCountries = [];
let selectedCountry = null;

async function init() {
    try {
        // 1. UI 초기화
        updateUI(currentLang);
        initUiEvents();

        // 2. 국가 데이터 가져오기
        allCountries = await fetchAllCountries();

        // 12개 주요 국가 기본 데이터 (API 실패 시 및 데이터 보장용)
        const featuredFallback = [
            { name: "South Korea", koName: "대한민국", code: "kr", capital: "Seoul", region: "Asia", population: "51.7M" },
            { name: "China", koName: "중국", code: "cn", capital: "Beijing", region: "Asia", population: "1.4B" },
            { name: "Japan", koName: "일본", code: "jp", capital: "Tokyo", region: "Asia", population: "125M" },
            { name: "France", koName: "프랑스", code: "fr", capital: "Paris", region: "Europe", population: "67M" },
            { name: "USA", koName: "미국", code: "us", capital: "Washington D.C.", region: "Americas", population: "331M" },
            { name: "Spain", koName: "스페인", code: "es", capital: "Madrid", region: "Europe", population: "47M" },
            { name: "Italy", koName: "이탈리아", code: "it", capital: "Rome", region: "Europe", population: "60M" },
            { name: "Turkey", koName: "튀르키예", code: "tr", capital: "Ankara", region: "Asia", population: "84M" },
            { name: "Mexico", koName: "멕시코", code: "mx", capital: "Mexico City", region: "Americas", population: "128M" },
            { name: "United Kingdom", koName: "영국", code: "gb", capital: "London", region: "Europe", population: "67M" },
            { name: "Germany", koName: "독일", code: "de", capital: "Berlin", region: "Europe", population: "83M" },
            { name: "Greece", koName: "그리스", code: "gr", capital: "Athens", region: "Europe", population: "10M" }
        ].map(c => ({
            ...c,
            flag: `https://flagcdn.com/w320/${c.code}.png`
        }));

        if (!allCountries || allCountries.length === 0) {
            allCountries = featuredFallback;
        } else {
            // API 데이터가 있더라도 12개 국가가 누락되지 않도록 병합
            featuredFallback.forEach(featured => {
                if (!allCountries.find(c => c.code === featured.code)) {
                    allCountries.push(featured);
                }
            });
        }

        // 3. 퀵 내비게이션 및 전체 국가 리스트 렌더링
        renderQuickNav(allCountries, handleSelectCountry, currentLang);
        renderAllCountries(allCountries, handleSelectCountry, currentLang);

        // 4. 검색 설정
        setupSearch(allCountries, handleSelectCountry);

        // 5. 기본 국가 설정 (대한민국)
        const defaultCountry = allCountries.find(c => c.code === 'kr') || allCountries[0];
        handleSelectCountry(defaultCountry);

        // 6. 언어 토글 이벤트
        elements.langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ko' : 'en';
            localStorage.setItem('lang', currentLang);
            
            updateUI(currentLang);
            renderQuickNav(allCountries, handleSelectCountry, currentLang);
            renderAllCountries(allCountries, handleSelectCountry, currentLang);
            
            if (selectedCountry) {
                renderContent(selectedCountry, currentLang);
                // 액티브 상태 유지
                const activeBtn = document.querySelector(`.nav-btn[data-code="${selectedCountry.code}"]`);
                if (activeBtn) activeBtn.classList.add('active');
            }
        });

        if (elements.closeModal) {
            elements.closeModal.onclick = closeRegions;
        }
        
        window.onclick = (event) => {
            if (event.target === elements.regionModal) {
                closeRegions();
            }
        };
    } catch (error) {
        console.error('Initialization error:', error);
    }
}

function handleSelectCountry(country) {
    selectedCountry = country;
    renderContent(country, currentLang);
    
    // 퀵 내비게이션 버튼 상태 업데이트
    document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.code === country.code);
    });
}

// 앱 실행
init();
