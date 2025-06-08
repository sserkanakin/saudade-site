// js/script.js
// Uses the Web Animations API for slide-up fade-out and slide-up fade-in

document.addEventListener('DOMContentLoaded', () => {
    const taglines = [
      "Where the Vibe Unites",
      "Connect Through Sound",
      "Deep Grooves, Shared Moments",
      "The Rhythm Connects Us",
      "Feel It Deeper",
      "Evocative House Rhythms",
      "Music That Lingers",
      "Underground Soul System",
      "Find Your Rhythm",
      "Resonate With Us",
      "Beyond the Beat",
      "Lose Yourself in the Sound",
      "The Sound of Feeling",
      "Saudade Sessions"
    ];
  
    const el = document.getElementById('dynamic-tagline');
    if (!el) return; // Skip if no tagline on page
  
    // Display the first tagline immediately
    let currentIndex = 0;
    el.textContent = taglines[currentIndex];
  
    // Configuration
    const changeInterval = 5000; // ms between each swap
    const animDuration   = 800;  // ms for each fade + slide
  
    // Helper: pause for given ms
    const wait = ms => new Promise(res => setTimeout(res, ms));
  
    // Perform a single fade-out up, text swap, then fade-in up from below
    async function animateSwap(newText) {
      // Fade & slide out upwards
      await el.animate([
        { opacity: 1, transform: 'translateY(0)'    },
        { opacity: 0, transform: 'translateY(-20px)' }
      ], {
        duration: animDuration,
        easing: 'ease-in-out',
        fill: 'forwards'
      }).finished;
  
      // Swap the text while hidden
      el.textContent = newText;
  
      // Fade & slide in from below
      await el.animate([
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)'    }
      ], {
        duration: animDuration,
        easing: 'ease-in-out',
        fill: 'forwards'
      }).finished;
    }
  
    // Main loop: wait full interval before first swap, then repeat
    (async () => {
      // Initial pause equal to the interval
      await wait(changeInterval);
  
      while (true) {
        // Pick a different index
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * taglines.length);
        } while (taglines.length > 1 && nextIndex === currentIndex);
        currentIndex = nextIndex;
  
        // Animate the swap
        await animateSwap(taglines[currentIndex]);
  
        // Wait until next iteration
        await wait(changeInterval);
      }
    })();
  });
  