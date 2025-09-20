# 🍪 Cookie Clicker Game

This project is a simple interactive browser-based game where the user runs a cookie factory. The main goal is to generate as many cookies as possible by clicking on a large cookie and purchasing upgrades from a shop to increase the number of cookies produced per second (CPS). The game becomes progressively more engaging as you automate production and visually track your growth.

The app uses JavaScript to handle user input, DOM manipulation, and data persistence through `localStorage`, ensuring that user progress is saved across sessions. The cookie count updates automatically every second using `setInterval`, and players can fetch upgrades from a public API and purchase them to boost their CPS.

All main project requirements have been met. The game successfully displays the current cookie count and CPS on screen, saves game progress locally, updates cookie count both passively and on click, and dynamically fetches upgrades from the Cookie Upgrades API. Clicking on an upgrade will purchase it (if affordable), increasing the CPS and updating the game state accordingly.

In addition to the core features, two stretch goals were completed. A toggle button allows users to turn sound effects on or off during gameplay. The game also includes engaging animations: the main cookie rotates continuously and responds to hover with a slight scaling effect, while the shop interface is styled in visually distinct boxes and arranged in multiple columns for better readability. These additions significantly improve user experience and interface appeal.

Some of the challenges included debugging animation overlaps (like combining rotate and pulse), fixing event listener syntax issues, and structuring shop upgrades in a clean and functional layout. Also, managing and syncing audio interaction with visual feedback required thoughtful conditional logic.

Although the project is mostly feature-complete, there are some areas for future improvement, such as implementing proper error handling for API calls using `try/catch`, consolidating all upgrade logic into a single reusable function, and fully optimizing the layout for mobile devices.

This project used standard web technologies: HTML, CSS (including Flexbox and animations), and JavaScript. The `fetch()` API was used for retrieving upgrades, and all dynamic elements are handled through DOM methods and event listeners. Assets such as images and audio files are stored locally and used to enhance the interactive experience.

The game is deployed via GitHub Pages and can be accessed online. Development was supported by official documentation (MDN), class pseudo-code, and personal experimentation. Overall, this was a fun and challenging assignment that combined logic, layout, interactivity, and creativity.

### Challenges and Issues

One of the most frustrating bugs I encountered was a `ReferenceError: i is not defined` that repeatedly appeared in the console on line 24 of the JavaScript file. This was caused by an undefined variable `i` inside the `updateDisplay` function. After carefully reviewing and cleaning up the code, I resolved the issue, which significantly improved the app's stability.

Additionally, there were console warnings related to security and performance headers, specifically missing `X-Content-Type-Options` and the presence of `must-revalidate` in the `cache-control` header. These come from the external API server I use for fetching upgrades, so I couldn't fix them myself. Fortunately, they do not impact the game’s functionality.

## Sources:

- https://basescripts.com/how-to-store-and-retrieve-a-javascript-object-in-localstorage
- https://syskool.com/working-with-json-and-localstorage-in-javascript/
- https://markaicode.com/save-data-in-local-storage-with-javascript-easily/ + catch -error
