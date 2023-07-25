const hamb = document.querySelector(".hamb")
const navLinks = document.querySelector(".nav-links");

hamb.addEventListener("click", () => {
    hamb.classList.toggle("active");
    navLinks.classList.toggle("active");
})