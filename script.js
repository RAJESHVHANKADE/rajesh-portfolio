const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

// Mobile menu toggle
menuIcon.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

// Close mobile menu when a nav link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("active");
});
});

// Smooth scroll for all internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {


    const target = document.querySelector(
        this.getAttribute("href")
    );

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


});

// Highlight active section while scrolling
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {


let current = "";

sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
    }
});

navItems.forEach(link => {

    link.classList.remove("active-link");

    if (
        link.getAttribute("href") === `#${current}`
    ) {
        link.classList.add("active-link");
    }
});


});
