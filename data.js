import { data1 } from './data1.js';
import { data2 } from './data2.js';
import { data3 } from './data3.js';
import { data4 } from './data4.js';

// Data Store for World Culture Guide - Merged from 4 files
export const cultures = {
    ...data1,
    ...data2,
    ...data3,
    ...data4
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

export async function fetchAllCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        return data.map(country => ({
            name: country.name.common,
            koName: country.translations.kor ? country.translations.kor.common : country.name.common,
            code: country.cca2.toLowerCase(),
            flag: country.flags.png,
            capital: country.capital ? country.capital[0] : 'N/A',
            region: country.region,
            population: country.population.toLocaleString(),
            languages: country.languages ? Object.values(country.languages).join(', ') : 'N/A'
        })).sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
        console.error('Error fetching countries:', error);
        return [];
    }
}
