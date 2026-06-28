const root = document.documentElement;

// Menu Button Event Listeners
const toggleMenuBtn = document.querySelector(".menu-toggle");
toggleMenuBtn.addEventListener("click", () => {
  toggleMenuBtn.setAttribute(
    "aria-expanded",
    document.querySelector(".menu").classList.toggle("open"),
  );
});

// Theme Selection
const setTheme = (themeName) => {
  console.log(`Setting theme to '${themeName}'`);
  root.setAttribute("data-theme", themeName);
  localStorage.setItem("theme", themeName);
};

document
  .getElementById("theme-selection")
  .addEventListener("change", (event) => {
    setTheme(event.target.value);
  });
// Forces dropdown value for theme selection on page load.
if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  setTheme("light");
  document.getElementById("theme-selection").value = "light";
} else {
  setTheme("dark");
  document.getElementById("theme-selection").value = "dark";
}

// Font Family Selection
const setFontFamily = (family) => {
  root.style.setProperty("font-family", `--font-${family}`);
};
document
  .getElementById("font-selection")
  .addEventListener("change", (event) => {
    setFontFamily(event.target.value);
  });

// Font Size
document.getElementById("font-size-selection").value = "100";

const getFontSize = () =>
  parseFloat(getComputedStyle(root).getPropertyValue("--font-scale")) || 1.0;

const setFontSize = (value) => {
  const MIN_SCALE = 0.5; // Min Font Size: 50%
  const MAX_SCALE = 2; // Max Font Size: 200%
  const scale = Math.min(Math.max(value, MIN_SCALE), MAX_SCALE);
  root.style.setProperty("--font-scale", scale);
};

document
  .getElementById("font-size-selection")
  .addEventListener("change", (event) => {
    setFontSize(Number(event.target.value) * 0.01); // Scale value; 200 *.01 = 2
  });
