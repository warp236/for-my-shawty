const heartButton = document.getElementById("heartButton");
const reply = document.getElementById("reply");

heartButton.addEventListener("click", function () {
  reply.textContent = "A little heart, just for you, Minal! ❤️🥺";

  for (let i = 0; i < 15; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("floating-heart");
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (18 + Math.random() * 22) + "px";
  heart.style.animationDuration = (2 + Math.random() * 2) + "s";

  document.body.appendChild(heart);

  heart.addEventListener("animationend", function () {
    heart.remove();
  });
}