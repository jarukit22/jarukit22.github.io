// Bars Button
function menuToggle(element) {
  element.classList.toggle("change");
}

const menuBtn = document.getElementById("meun-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Active meun
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#nav a");
  const sections = document.querySelectorAll("section");

  function updateActiveLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
