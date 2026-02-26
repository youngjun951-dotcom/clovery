
# Project Blueprint

## Overview

This project is a simple, single-page web application that provides a user-friendly interface for various fun and useful tools. The initial feature is a lottery number generator. The application is built with modern, framework-less web technologies (HTML, CSS, JavaScript) and emphasizes a clean, responsive, and accessible design.

## Style, Design, and Features

### Version 1.0: Lottery Number Generator

*   **Core Feature:** Generates a set of 6 unique random numbers between 1 and 45, simulating a lottery draw.
*   **User Interface:**
    *   **Header:** A prominent header with the title "Lotto Number Generator".
    *   **Number Display:** A visually appealing section to display the generated lottery numbers. Each number is presented in a distinct, styled circle.
    *   **Action Button:** A "Generate Numbers" button to trigger the lottery number generation.
*   **Styling:**
    *   **Typography:** Uses the "Jua" font from Google Fonts for a friendly and readable look.
    *   **Color Palette:** A vibrant color scheme with a primary color for the header, distinct colors for the number circles, and a clear hover effect for the button.
    *   **Layout:** A centered, responsive layout that works well on both desktop and mobile devices.
    *   **Effects:** Subtle box-shadows and transitions to create a sense of depth and interactivity.

## Current Request: Create a Lottery Number Recommendation Site

**Plan:**

1.  **Update `index.html`:**
    *   Change the title to "Lotto Number Generator".
    *   Add a container for the lottery numbers.
    *   Add a button to generate the numbers.
    *   Link the "Jua" Google Font.

2.  **Update `style.css`:**
    *   Add styles for the main container, header, number display, individual numbers, and the generate button.
    *   Implement a responsive design using flexbox and media queries.
    *   Add hover effects for the button.

3.  **Update `main.js`:**
    *   Create a function to generate 6 unique random numbers between 1 and 45.
    *   Add an event listener to the "Generate Numbers" button.
    *   When the button is clicked, call the number generation function and display the results in the UI.
