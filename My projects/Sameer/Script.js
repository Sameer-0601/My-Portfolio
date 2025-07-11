// Typed text animation
const text = ["a Web Developer.", "a Learner.", "Sameer S 😎"];
let i = 0, j = 0, current = "", isDeleting = false;
const typedText = document.getElementById("typed-text");

function typeLoop() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      current = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = text[i].substring(0, j--);
    }

    typedText.innerHTML = current;

    if (j === text[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }

    setTimeout(typeLoop, isDeleting ? 50:100);
  }
}
typeLoop();

// Back to top button
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = () => {
  document.documentElement.scrollTop = 0;
};

// Dark/Light Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.onclick = () => {
  document.body.classList.toggle("light-mode");
  const icon = modeToggle.querySelector("i");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
};