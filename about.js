const mobileBtn = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

// Show mobile menu when mobile button is clicked
mobileBtn.addEventListener("click", () => {
  mobileMenu.style.display = "block";
  document.body.classList.add("no-scroll");
});

// Hide mobile menu when close button is clicked
closeBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  document.body.classList.remove("no-scroll");
});