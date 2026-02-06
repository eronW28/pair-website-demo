const btn = document.getElementById("helloBtn");
const msg = document.getElementById("helloMsg");

btn.addEventListener("click", () => {
  msg.textContent = "Hello! This message was added via a GitHub workflow demo.";
});
