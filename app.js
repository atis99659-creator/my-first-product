import { fetchAllCountries } from './data.js';
import { elements, updateUI, renderContent, renderQuickNav, renderAllCountries, setupSearch, closeRegions, initUiEvents } from './ui.js';

let currentLang = localStorage.getItem('lang') || 'ko';
let allCountries = [];
let selectedCountry = null;

async function init() {
    try {
        // 1. UI 초기화 (다크 모드는 CSS에서 고정)
        updateUI(currentLang);
        initUiEvents();

        // 2. 국가 데이터 가져오기
        allCountries = await fetchAllCountries();

        if (!allCountries || allCountries.length === 0) {
            allCountries = [{
                name: "South Korea", koName: "대한민국", code: "kr", 
                flag: "https://flagcdn.com/w320/kr.png", capital: "Seoul", 
                region: "Asia", population: "51,780,579"
            }];
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
