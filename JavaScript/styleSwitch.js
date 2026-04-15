function changeStyleSheet() {
  const theme = document.getElementById("theme");
  const current = theme.getAttribute("href"); // use getAttribute (good)

  const newLayout = current && current.endsWith("layout1.css")
    ? "CSS/layout2.css"
    : "CSS/layout1.css";

  theme.setAttribute("href", newLayout);
  localStorage.setItem("preferredLayout", newLayout);
}

window.addEventListener("DOMContentLoaded", () => {
  const theme = document.getElementById("theme");
  const saved = localStorage.getItem("preferredLayout");

  theme.setAttribute("href", saved && saved.startsWith("CSS/") ? saved : "CSS/layout1.css");
});

