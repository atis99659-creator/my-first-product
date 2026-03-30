import { fetchAllCountries } from './data.js';
import { 
    elements, 
    applyTheme, 
    updateUI, 
    renderContent, 
    setupSearch, 
    closeRegions, 
    renderQuickNav,
    initUiEvents // ui.js에서 새로 만든 초기화 함수
} from './ui.js';

let currentLang = localStorage.getItem('lang') || 'ko';
let currentTheme = localStorage.getItem('theme') || 'light';
let allCountries = [];
let selectedCountry = null;

async function init() {
    try {
        // 1. UI 이벤트 및 테마 초기 설정
        initUiEvents(); // 모달 내 버튼 등 리스너 등록
        applyTheme(currentTheme);
        updateUI(currentLang, currentTheme);

        // 2. 국가 데이터 로드
        allCountries = await fetchAllCountries();

        // 데이터 로드 실패 시 방어 코드 (Fallback)
        if (!allCountries || allCountries.length === 0) {
            allCountries = [{
                name: "South Korea", koName: "대한민국", code: "kr", 
                flag: "https://flagcdn.com/w320/kr.png", capital: "Seoul", 
                region: "Asia", population: "51,780,579"
            }];
        }

        // 3. 퀵 네비게이션 렌더링 함수 (중복 사용을 위해 정의)
        const refreshNav = () => {
            renderQuickNav(allCountries, (country) => {
                selectedCountry = country;
                renderContent(country, currentLang);
            }, currentLang);
        };

        refreshNav();

        // 4. 검색 기능 설정
        setupSearch(allCountries, (country) => {
            selectedCountry = country;
            renderContent(country, currentLang);
            // 검색 시 퀵네비 활성화 표시 해제
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        });

        // 5. 기본 국가 설정 (한국)
        const defaultCountry = allCountries.find(c => c.code === 'kr') || allCountries[0];
        if (defaultCountry) {
            selectedCountry = defaultCountry;
            renderContent(defaultCountry, currentLang);
            // 초기 활성화 표시
            setTimeout(() => {
                const krBtn = document.querySelector(`.nav-btn[data-code="kr"]`);
                if (krBtn) krBtn.classList.add('active');
            }, 100);
        }

        // 6. 상단 컨트롤(테마/언어) 이벤트 리스너
        elements.themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(currentTheme); // 내부에서 localStorage 저장함
            updateUI(currentLang, currentTheme);
        });

        elements.langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ko' : 'en';
            localStorage.setItem('lang', currentLang);
            updateUI(currentLang, currentTheme);
            
            // 언어 변경 시 퀵네비와 현재 컨텐츠 다시 렌cer
            refreshNav();
            if (selectedCountry) {
                renderContent(selectedCountry, currentLang);
                const activeBtn = document.querySelector(`.nav-btn[data-code="${selectedCountry.code}"]`);
                if (activeBtn) activeBtn.classList.add('active');
            }
        });

        // 7. 모달 닫기 제어
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

init();