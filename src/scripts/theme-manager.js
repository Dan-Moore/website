function setTheme(themeName) {
  console.log("Theme: " + themeName);
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("theme", themeName);
}

// Find all buttons with a data-theme-btn attribute and attach listeners
const buttons = document.querySelectorAll("[data-theme-btn]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.getAttribute("data-theme-btn");
    setTheme(theme);
  });
});
