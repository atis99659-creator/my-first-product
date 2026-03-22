# Lotto Number Generator with Theme Support

## Overview
A modern web application that generates 6 unique random lottery numbers (1-45). It features a polished UI with a dynamic dark/light mode toggle and is prepared for Git-based deployment.

## Features
*   **Lotto Number Generation:** Generates 6 unique random numbers (1-45) with vibrant, category-based colors.
*   **Theme Support:** Seamless switching between Light and Dark modes with persistent user preference.
*   **Modern UI:** Responsive design using Web Components, CSS Variables, and Shadow DOM.
*   **Deployment Ready:** Configured for version control and hosting via Git.

## Implemented Features & Design

### Version 1.0 (Initial)
*   **Lotto Generator Component:** Custom element `<lotto-generator>` with encapsulated logic and styles.
*   **Visuals:** Colored circles for numbers, centered layout, and interactive "Generate" button.

### Version 1.1 (Theme & Deployment)
*   **Global Theme Variables:** Centralized color management using CSS variables in `style.css`.
*   **Theme Toggle:** Integrated toggle switch to swap between Light and Dark modes.
*   **Local Storage:** Persistence of the selected theme across sessions.
*   **Accessibility:** High-contrast text and ARIA-compliant elements.
*   **Git Integration:** Project structured for version control.

## Current Plan (Completed)

1.  **Style System Refactor:** Implemented CSS variables and theme detection.
2.  **Theme Toggle Implementation:** Added functional toggle with storage persistence.
3.  **Component Updates:** Refactored `<lotto-generator>` for theme compatibility and improved animations.
4.  **Git Deployment:** Staging and committing changes.

## Verification
*   **Theme Persistence:** Verified.
*   **System Preference:** Verified via `matchMedia`.
*   **Responsive Design:** Container and circles adapt to viewport.
*   **Git Status:** Ready for final commit.
