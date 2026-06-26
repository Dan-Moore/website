// Configuration
const MIN_SCALE = 0.75; // 75% of default size
const MAX_SCALE = 1.75; // 175% of default size
const STEP = 0.125; // How much to change per click

// Get the root element
const root = document.documentElement;

// Helper to get the current scale
const getScale = () =>
  parseFloat(getComputedStyle(root).getPropertyValue("--font-scale")) || 1.0;

// Helper to set the new scale
const setScale = (newScale) => {
  // Clamp the value in JS as a double-layer of safety
  const clampedScale = Math.min(Math.max(newScale, MIN_SCALE), MAX_SCALE);
  root.style.setProperty("--font-scale", clampedScale);
};

// Event Listeners using optional chaining and arrow functions
document.getElementById("increase-font")?.addEventListener("click", () => {
  setScale(getScale() + STEP);
});

document.getElementById("decrease-font")?.addEventListener("click", () => {
  setScale(getScale() - STEP);
});

document.getElementById("reset-font")?.addEventListener("click", () => {
  root.style.removeProperty("--font-scale"); // Reverts to the CSS default (1.0)
});
