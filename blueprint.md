# East Asian Culture Guide

## Overview
A web application designed to introduce the diverse cultures of East Asia, specifically focusing on **Korea**, **China**, and **Japan**. The site provides a brief overview of each country's greetings, traditional clothing, and famous cuisine.

## Features
*   **Country Selector:** Navigation to switch between Korea, China, and Japan.
*   **Dynamic Content:** Displays cultural information (Greeting, Food, Clothing) for the selected country.
*   **Multi-Language Support:** Users can switch between **English** and **Korean** versions of the entire site.
*   **Theme Support:** Dark/Light mode toggle with persistence.
*   **Responsive Design:** Optimized for both mobile and desktop.

## Architecture

### File Structure
*   `index.html`: Main shell with language and theme controls.
*   `style.css`: Theming system (Light/Dark) and layout.
*   `main.js`: 
    *   **Bilingual Data Store:** Stores content in both `en` and `ko`.
    *   **Translation Engine:** Updates UI labels based on language selection.
    *   **State Management:** Persists language and theme preferences in `localStorage`.

## Implementation Status
*   [x] Clean & Setup: Removed Lotto code.
*   [x] HTML Structure: Added language toggle and translation IDs.
*   [x] Styling: Styled the language and theme control group.
*   [x] Logic: Implemented dynamic translation and theme switching.
*   [x] Multi-Language: Added full English/Korean content for all 3 countries.
*   [x] Deployment: Ready to push to GitHub.
