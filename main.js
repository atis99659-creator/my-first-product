/**
 * Theme Management
 */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Function to set theme
const setTheme = (theme) => {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
};

// Toggle theme logic
themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});

// Initialize theme from storage or system preference
const savedTheme = localStorage.getItem('theme');
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
setTheme(savedTheme || systemPreference);

/**
 * LottoGenerator Web Component
 */
class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .container {
          background-color: var(--container-bg);
          padding: 2.5rem;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
          transition: all var(--transition-speed);
          max-width: 400px;
          width: 90%;
        }
        h1 {
          margin-bottom: 2rem;
          font-size: 1.8rem;
          color: var(--text-color);
        }
        .result-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 2rem;
          min-height: 60px;
        }
        .number-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          color: white;
          font-weight: 700;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
          animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        }
        @keyframes popIn {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        button {
          background-color: var(--button-bg);
          color: white;
          border: none;
          padding: 12px 28px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        }
        button:hover {
          background-color: var(--button-hover-bg);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
        }
        button:active {
          transform: translateY(0);
        }
      </style>
      <div class="container">
        <h1>Lotto Generator</h1>
        <div id="result" class="result-container"></div>
        <button id="generateBtn">Generate Numbers</button>
      </div>
    `;

    this.shadowRoot.getElementById('generateBtn').addEventListener('click', () => this.generateNumbers());
  }

  generateNumbers() {
    const container = this.shadowRoot.getElementById('result');
    container.innerHTML = '';
    
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
      const circle = document.createElement('div');
      circle.className = 'number-circle';
      circle.textContent = number;
      circle.style.backgroundColor = this.getColor(number);
      circle.style.animationDelay = `${index * 0.1}s`;
      container.appendChild(circle);
    });
  }

  getColor(number) {
    if (number <= 10) return '#FFB300'; // Amber
    if (number <= 20) return '#1E88E5'; // Blue
    if (number <= 30) return '#E53935'; // Red
    if (number <= 40) return '#8E24AA'; // Purple
    return '#43A047'; // Green
  }
}

customElements.define('lotto-generator', LottoGenerator);
