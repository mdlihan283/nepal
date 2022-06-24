window.onscroll = () => {
  const header = document.getElementById("header");
  const logo = document.querySelector(".logo h2 a span");
  let scroll = scrollY;
  if (scroll >= 60) {
    header.classList.add("headerActive");
    logo.classList.add("logoH2Active");
  } else {
    header.classList.remove("headerActive");
    logo.classList.remove("logoH2Active");
  }
};

function typing() {
  let texts = ["Designer", "Developer", "Programmer", "Freelancer"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  (function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.getElementById("typing").textContent = letter;
    document.getElementById("aboutTyping").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }
    setTimeout(type, 300);
  })();
}
typing();

function mobileMenu() {
  const bars = document.querySelector(".bars");
  const menu = document.querySelector(".menu");
  const times = document.querySelector(".times");
  bars.addEventListener("click", () => {
    menu.classList.add("showMenu");
    bars.classList.add("iconHide");
  });
  times.addEventListener("click", () => {
    menu.classList.remove("showMenu");
    bars.classList.remove("iconHide");
  });
}
mobileMenu();
