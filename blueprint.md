# **Blueprint: World Culture Guide Update (v2.0)**

## **Project Overview**
A framework-less web application (HTML, CSS, JS) that provides a guide to ALL world countries, featuring a new layout with centered titles, left-side country information, and right-side location maps.

## **Current Status**
*   [x] Core Layout: Responsive design with a navigation bar replaced by a search/dropdown system.
*   [x] Theming: Support for Light and Dark modes using CSS variables and local storage.
*   [x] Localization: Support for English and Korean languages for ~250 countries.
*   [x] All Countries Data: Integrated REST Countries API for dynamic data fetching.
*   [x] New Layout: Centered titles, info on the left (Flag, Capital, Population, Region), and Map on the right.
*   [x] Premium Visual Design: 
    *   Animated mesh gradient background with moving blobs.
    *   Subtle noise texture overlay for tactile feel.
    *   Glassmorphism effects on cards and header (backdrop-filter).
    *   Advanced multi-layered shadows and smooth animations.
*   [x] Search & Filter: Functional search bar with dropdown for all countries.
*   [x] Location Maps: Dynamic fetching from Wikimedia Commons with fallbacks.

## **Implementation Details**
*   **Data API:** `https://restcountries.com/v3.1/all`
*   **Location Maps:** 
    *   Primary: `https://commons.wikimedia.org/wiki/Special:FilePath/Location_of_[Country]_in_the_World.svg`
    *   Fallback: `https://commons.wikimedia.org/wiki/Special:FilePath/Location_of_[Country]_on_the_globe.svg`
*   **Layout:** CSS Flexbox with `.country-row` (Left-Center-Right structure).

## **Next Steps**
*   [ ] Refine Wikimedia Commons map names (some countries have different naming patterns).
*   [ ] Add more detailed cultural info for countries beyond the original 12 (Greetings, Food, Clothing) using additional APIs if possible.
*   [ ] Improve search performance and UX (e.g., keyboard navigation).

## **Current Task: Update Gangwon-do Detailed Information**
*   [x] Add famous restaurants, cafes, landmarks, and activities for Gangwon-do in `data1.js`.
*   [x] Ensure Google Maps search links are included for each item.
*   [x] Maintain consistency with existing region data structures.
*   [x] Fix syntax errors and structural inconsistencies across `data1.js`, `data2.js`, `data3.js`, and `data4.js`.
*   [x] Normalize Google Maps links across all regions (ensure they match the name field).
*   [x] Restore detailed country data (restaurants, cafes, landmarks, activities) in all data files.
