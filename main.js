class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'container');

    const title = document.createElement('h1');
    title.textContent = 'Lotto Number Generator';

    const resultContainer = document.createElement('div');
    resultContainer.setAttribute('class', 'result-container');

    const button = document.createElement('button');
    button.textContent = 'Generate Numbers';
    button.addEventListener('click', () => this.generateNumbers(resultContainer));

    const style = document.createElement('style');
    style.textContent = `
      .container {
        text-align: center;
        font-family: sans-serif;
      }
      .result-container {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
      }
      .number-circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2em;
        color: white;
        font-weight: bold;
      }
      button {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 1em;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background-color: #4CAF50;
        color: white;
        box-shadow: 0 0 10px rgba(76, 175, 80, 0.7);
        transition: box-shadow 0.3s ease-in-out;
      }
      button:hover {
        box-shadow: 0 0 20px rgba(76, 175, 80, 1);
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(title);
    wrapper.appendChild(resultContainer);
    wrapper.appendChild(button);
  }

  generateNumbers(container) {
    container.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    for (const number of sortedNumbers) {
      const circle = document.createElement('div');
      circle.setAttribute('class', 'number-circle');
      circle.textContent = number;
      circle.style.backgroundColor = this.getColor(number);
      container.appendChild(circle);
    }
  }

  getColor(number) {
    if (number <= 10) return '#f39c12'; // Yellow
    if (number <= 20) return '#3498db'; // Blue
    if (number <= 30) return '#e74c3c'; // Red
    if (number <= 40) return '#9b59b6'; // Purple
    return '#2ecc71'; // Green
  }
}

customElements.define('lotto-generator', LottoGenerator);
