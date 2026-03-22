// Data Store
const cultures = {
    korea: {
        name: "South Korea",
        greeting: "Annyeonghaseyo (안녕하세요)",
        food: "Kimchi, Bulgogi, Bibimbap",
        clothing: "Hanbok (Traditional Korean Dress)",
        description: "South Korea, an East Asian nation on the southern half of the Korean Peninsula, shares one of the world's most heavily militarized borders with North Korea. It's known for its green, hilly countryside dotted with cherry trees and centuries-old Buddhist temples, plus its coastal fishing villages, sub-tropical islands and high-tech cities such as Seoul, the capital.",
        emoji: "🇰🇷",
        color: "#3498db"
    },
    china: {
        name: "China",
        greeting: "Ni Hao (你好)",
        food: "Peking Duck, Dim Sum, Hot Pot",
        clothing: "Hanfu, Qipao / Cheongsam",
        description: "China is a populous nation in East Asia whose vast landscape encompasses grassland, desert, mountains, lakes, rivers and more than 14,000km of coastline. Capital Beijing mixes modern architecture with historic sites such as the Forbidden City palace complex and Tiananmen Square.",
        emoji: "🇨🇳",
        color: "#e74c3c"
    },
    japan: {
        name: "Japan",
        greeting: "Konnichiwa (こんにちは)",
        food: "Sushi, Ramen, Tempura",
        clothing: "Kimono, Yukata",
        description: "Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean, and is bordered on the west by the Sea of Japan, while extending from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.",
        emoji: "🇯🇵",
        color: "#9b59b6"
    }
};

// DOM Elements
const contentContainer = document.getElementById('content');
const navButtons = document.querySelectorAll('.nav-btn');
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// --- Theme Logic ---

const setTheme = (theme) => {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
};

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Initialize Theme
const savedTheme = localStorage.getItem('theme');
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
setTheme(savedTheme || systemPreference);


// --- Content Logic ---

const renderCountry = (countryKey) => {
    const data = cultures[countryKey];
    if (!data) return;

    // Update CSS Variable for dynamic accent color if desired
    document.documentElement.style.setProperty('--primary-color', data.color);

    contentContainer.innerHTML = `
        <article class="content-card">
            <div class="country-header">
                <h2>${data.emoji} ${data.name}</h2>
                <p>${data.description}</p>
            </div>
            
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-icon">👋</span>
                    <h3>Greeting</h3>
                    <p>${data.greeting}</p>
                </div>
                <div class="info-item">
                    <span class="info-icon">🍱</span>
                    <h3>Famous Food</h3>
                    <p>${data.food}</p>
                </div>
                <div class="info-item">
                    <span class="info-icon">👘</span>
                    <h3>Clothing</h3>
                    <p>${data.clothing}</p>
                </div>
            </div>
        </article>
    `;
};

// Event Listeners
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update Active State
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Render Content
        const country = btn.getAttribute('data-country');
        renderCountry(country);
    });
});

// Initial Render
renderCountry('korea');
