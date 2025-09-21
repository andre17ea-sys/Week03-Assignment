# Cookie Clicker Game

This project is a simple interactive game where the user can try to generate as many cookies as possible, buy clicking the main cookie to earn more.
While I'm not much of a gamer made the UX design extra challenging and lacked a clear mental picture of what game interface should feel like. So in the end I choose to experiment as much as possible and have a productive learning process.

## Requirements

All main project requirements have been met, and some of the stretch goals were completed. A toggle button allows users to turn sound effects on or off during gameplay. The game also includes engaging animations: the main cookie rotates continuously and responds to hover with a slight scaling effect, while the shop interface is styled in visually distinct boxes and arranged in multiple columns for better readability. These additions significantly improve user experience and interface appeal.

# Challenges

There were some challenges along the way.
❌ One of the most persistent bugs was a ReferenceError: `i is not defined`, which originated from an undefined variable within the `updateDisplay` function. After carefully reviewing the logic and cleaning up unnecessary code,I resolved the issue, which significantly improved the app's stability.
❌Another issue was handling both `rotate` and `pulse` animations on the same cookie element. This led to conflicts, so back to research to understanding how animations like rotate and pulse could conflict or overlap.
❌ I also encountered warnings in the console related to security and cache headers—such as missing X-Content-Type-Options—which came from the API server.
❌ Some fixing event listener syntax issues, and more structuring shop upgrades in a clean and functional layout.

## Future improvements

Although the main features are complete, there’s room for future improvements, such as implementing proper error handling for API calls using `try/catch`, consolidating all upgrade logic into a single reusable function, and foptimizing the layout for smaller screens and mobile responsiveness could further enhance usability.

# Sources:

Besides the resources shared in class, these are some of the resources used for this project that really made a difference at times:

🔎 https://basescripts.com/how-to-store-and-retrieve-a-javascript-object-in-localstorage

🔎 https://syskool.com/working-with-json-and-localstorage-in-javascript/

🔎 https://markaicode.com/save-data-in-local-storage-with-javascript-easily/

🔎 https://prismic.io/guides/css-animations

🔎 https://coolcssanimation.com/
