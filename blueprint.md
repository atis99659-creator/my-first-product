# **Blueprint: World Culture Guide Update**

## **Project Overview**
A framework-less web application (HTML, CSS, JS) that provides a guide to various world cultures, including their greetings, food, clothing, and detailed regional information.

## **Current Status**
*   [x] Core Layout: Responsive design with a navigation bar, content card, and detailed regions modal.
*   [x] Theming: Support for Light and Dark modes using CSS variables and local storage.
*   [x] Localization: Support for English and Korean languages.
*   [x] Interactive Map/Regions: A modal system to display sub-regions for each country.
*   [x] Data Coverage: 12 countries (Korea, France, Japan, China, USA, Spain, Italy, Turkey, Mexico, UK, Germany, Greece).
*   [x] Update Regions: Updated France's regional divisions to reflect the 13 official administrative regions.
*   [x] Update Regions: Updated USA's regional divisions to 10 specific states.
*   [x] Update Regions: Updated Spain's regional divisions to 17 autonomous communities.
*   [x] Update Regions: Updated Italy's regional divisions to 20 official regions.
*   [x] Update Regions: Updated Turkey's regional divisions to 7 geographical regions.
*   [x] Update Regions: Updated Mexico's regional divisions to its primary geographical zones.
*   [x] Update Regions: Updated UK's regional divisions to its four constituent nations.
*   [x] Update Regions: Updated Germany's regional divisions to its 16 federal states.
*   [x] Update Regions: Updated Greece's regional divisions to its 13 administrative regions (Pending Implementation).

## **Planned Changes (Current Task)**

### **1. Update Greece Regions**
*   **Goal:** Update the regional divisions for Greece in the data store.
*   **Action:** Replace the old 4 regions with the 13 official administrative regions:
    *   Attica (아티키)
    *   Central Macedonia (중앙 마케도니아)
    *   Crete (크레타)
    *   South Aegean (남에게)
    *   North Aegean (북에게)
    *   Ionian Islands (이오니아 제도)
    *   Peloponnese (펠로폰네소스)
    *   West Macedonia (서마케도니아)
    *   East Macedonia and Thrace (동마케도니아-트라키아)
    *   Epirus (에피루스)
    *   Thessaly (테살리아)
    *   Central Greece (중앙그리스)
    *   West Greece (서그리스)

### **2. Code Refactoring (Modularization)**
*   **Goal:** Split the large `main.js` file into smaller, more manageable ES modules for better maintainability.
*   **Action:** 
    1.  Create `data.js`: Move `cultures` and `uiTranslations` data here.
    2.  Create `ui.js`: Move DOM elements, rendering functions, and UI update logic here.
    3.  Create `app.js`: The main entry point that initializes the app and handles event listeners.
    4.  Update `index.html`: Use `<script type="module" src="app.js"></script>`.
    5.  Delete/Clean up `main.js`.

## **Technical Implementation Details**
*   **ES Modules:** Use `export` and `import` syntax.
*   **Clean Code:** Ensure logic is separated from data.
*   **Validation:** Confirm that language switching, theme switching, and region modal still work perfectly after refactoring.
