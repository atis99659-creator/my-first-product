# East Asian Culture Guide

## Overview
A web application designed to introduce the diverse cultures of East Asia, specifically focusing on **Korea**, **China**, and **Japan**. The site provides a brief overview of each country's greetings, traditional clothing, and famous cuisine. It replaces the previous "Lotto Generator" project entirely.

## Features
*   **Country Selector:** Navigation to switch between Korea, China, and Japan.
*   **Dynamic Content:** Displays cultural information (Greeting, Food, Clothing) for the selected country without reloading the page.
*   **Theme Support:** Retains the Dark/Light mode toggle for a comfortable reading experience.
*   **Responsive Design:** Adapts layout for mobile and desktop devices.

## Architecture

### File Structure
*   `index.html`: The main shell containing the header, navigation, content area, and footer.
*   `style.css`: Handles global styles, CSS variables for theming (Light/Dark), and layout components.
*   `main.js`:
    *   **Data Store:** A JavaScript object holding the cultural data for each country.
    *   **Render Logic:** Functions to update the DOM based on user selection.
    *   **Theme Logic:** Manages the toggle switch and local storage persistence.

## Content Strategy
*   **Korea:** "Annyeonghaseyo", Hanbok, Kimchi/Bulgogi.
*   **China:** "Ni Hao", Hanfu/Qipao, Peking Duck/Dim Sum.
*   **Japan:** "Konnichiwa", Kimono, Sushi/Ramen.

## Implementation Status
*   [x] Clean & Setup: Removed Lotto code.
*   [x] HTML Structure: Basic semantic HTML created.
*   [x] Styling: Flexbox/Grid layout, Dark/Light mode CSS variables defined.
*   [x] Logic: JS for theme and content switching implemented.
*   [x] Deployment: Ready to commit and push.
