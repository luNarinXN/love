const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.getElementById("container");

const loading = document.getElementById("loading");
const result = document.getElementById("result");

function moveNo() {
  const rect = container.getBoundingClientRect();
  const x = Math.random() * (rect.width - 120);
  const y = Math.random() * 60;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("mousedown", moveNo);

yesBtn.addEventListener("click", () => {
  container.style.display = "none";
  loading.style.display = "flex";

  setTimeout(() => {
    loading.style.display = "none";
    result.style.display = "flex";
  }, 3000);
});
