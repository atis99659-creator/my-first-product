# Lotto Number Generator

## Overview

A simple web application that generates and displays a set of 6 unique random lottery numbers between 1 and 45 when the user clicks a button.

## Features

*   **Number Generation:** Generates 6 unique random numbers from 1 to 45.
*   **Display:** Shows the generated numbers on the screen.
*   **User Interaction:** A button to trigger the number generation.

## Implemented Features & Design

*This section will be updated as features are implemented.*

### Initial Version
*   **Component:** A `<lotto-generator>` custom web component.
*   **Styling:**
    *   Centered layout.
    *   A "Generate" button with a subtle glow effect.
    *   The generated numbers are displayed in colored circles.
    *   A clean and modern design.

## Current Plan

1.  **`index.html`:** Add a `<lotto-generator>` element to the body.
2.  **`main.js`:**
    *   Create the `LottoGenerator` class, a custom `HTMLElement`.
    *   Implement the logic to generate 6 unique random numbers between 1 and 45.
    *   Use the Shadow DOM to encapsulate the component's structure and style.
    *   Define the custom element `lotto-generator`.
3.  **`style.css`:** Add global styles for the body and the lottery component to ensure a polished look and feel.
