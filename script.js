document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll(".amounts button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".amounts button").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
  });
});