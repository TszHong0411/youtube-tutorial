const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

const switchButton = document.querySelector("#switch");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    switchButton.checked = true;
  }
}

const switchButtonHandler = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
};

switchButton.addEventListener("click", switchButtonHandler);
