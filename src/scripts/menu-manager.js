const root = document.documentElement;

// Theme Selection
// ------------------------------------------------------------------------------------------
const themeSelector = document.getElementById("theme-selector");
(() => {
  // Inits page with theme saved in local storage and pre-selects dropdown menu.
  const theme = localStorage.getItem("theme");
  if (theme !== null) {
    themeSelector.value = theme;
    root.setAttribute("data-theme", theme);
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  themeSelector.addEventListener("change", (event) => {
    const selectedTheme = event.target.value;
    root.setAttribute("data-theme", selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  });
});

// Font Family Selection
// ------------------------------------------------------------------------------------------
const fontFamilySelector = document.getElementById("font-family-selector");
function setFontFamily(fontFamily) {
  fontFamilySelector.value = fontFamily;
  root.style.setProperty("font-family", `var(--font-${fontFamily})`);
  localStorage.setItem("font-family", fontFamily);
}

(() => {
  // Inits page with font-family saved in local storage and pre-selects dropdown menu.
  const fontFamily = localStorage.getItem("font-family");
  if (fontFamily !== null) {
    setFontFamily(fontFamily);
  } else {
    // Fallback to default, defined in html head.
    const defaultFamily = document
      .querySelector('meta[name="default-font-family"]')
      .getAttribute("content");
    setFontFamily(defaultFamily);
  }
})();

fontFamilySelector.addEventListener("change", (event) => {
  const fontFamily = event.target.value;
  console.log(`Updating font family => ${fontFamily}`);
  setFontFamily(fontFamily);
});

// Font Size
// ------------------------------------------------------------------------------------------
const fontSizeSelector = document.getElementById("font-size-selector");
function setFontSize(size) {
  const MIN_SCALE = 0.5; // Min Font Size: 50%
  const MAX_SCALE = 3; // Max Font Size: 300%
  const value = Number(size) * 0.01; // Scale value; 200 *.01 = 2
  const scale = Math.min(Math.max(value, MIN_SCALE), MAX_SCALE);
  root.style.setProperty("--font-scale", scale);
  localStorage.setItem("font-size", size);
  fontSizeSelector.value = size;
}

(() => {
  // Inits page with font-size saved in local storage and pre-selects dropdown menu.
  const fontSize = localStorage.getItem("font-size");
  if (fontSize !== null) {
    setFontSize(fontSize);
  } else {
    // Fallback to default, defined in html head.
    const defaultSize = document
      .querySelector('meta[name="default-font-size"]')
      .getAttribute("content");
    setFontSize(defaultSize);
  }
})();

fontSizeSelector.addEventListener("change", (event) => {
  const selectedSize = event.target.value;
  console.log(`Updating font size => ${selectedSize}`);
  setFontSize(selectedSize);
});
