const themeToggler = document.getElementById("toggler");

if (localStorage.getItem("mode") === "white") {
  themeToggler.classList.replace("left", "right");
  document.querySelectorAll(".dark").forEach((d) => {
    d.classList.replace("dark", "white");
  });
} else {
  themeToggler.classList.replace("right", "left");
  document.querySelectorAll(".white").forEach((w) => {
    w.classList.replace("white", "dark");
  });
}

themeToggler.onclick = () => {
  if (themeToggler.classList.contains("left")) {
    themeToggler.classList.replace("left", "right");
    document.querySelectorAll(".dark").forEach((d) => {
      d.classList.replace("dark", "white");
    });
    localStorage.setItem("mode", "white");
  } else {
    themeToggler.classList.replace("right", "left");
    document.querySelectorAll(".white").forEach((w) => {
      w.classList.replace("white", "dark");
    });
    localStorage.setItem("mode", "dark");
  }
};
