const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".button-container");

const loading = document.getElementById("loading");
const result = document.getElementById("result");

function moveNo() {
  const rect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  noBtn.classList.add("moving");

  const maxX = rect.width - btnRect.width;
  const maxY = rect.height - btnRect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("mousedown", moveNo);

yesBtn.addEventListener("click", () => {
  document.getElementById("container").style.display = "none";
  loading.style.display = "flex";

  setTimeout(() => {
    loading.style.display = "none";
    result.style.display = "flex";
  }, 3000);
});
