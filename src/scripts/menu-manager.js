// Menu Button Event Listeners
const toggleMenuBtn = document.querySelector(".menu-toggle");
toggleMenuBtn.addEventListener("click", () => {
  const isOpen = document.querySelector(".menu").classList.toggle("open");
  toggleMenuBtn.setAttribute("aria-expanded", isOpen);
});

// Theme Selection
function setTheme(themeName) {
  console.log(themeName);
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("theme", themeName);
}

document
  .getElementById("theme-selection")
  .addEventListener("change", (event) => {
    setTheme(event.target.value);
  });
// Forces dropdown value for theme selection on page load.
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  setTheme("dark");
  document.getElementById("theme-selection").value = "dark";
} else {
  setTheme("light");
  document.getElementById("theme-selection").value = "light";
}

// Font Family Selection

// Font Size
