let links = document.querySelectorAll("ul.list li a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// Animation On Reaching Section Of Screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

let hidden = document.querySelectorAll(".hidden");
hidden.forEach((ele) => observer.observe(ele));


// scroll to top button
let scrollTop = document.querySelector(".scroll");

// On Scrolling Page
window.addEventListener("scroll", () => {
  scrollTop.style.display = window.scrollY > 700 ? "block" : "none";
});

// On Clicking Scroll To Top Button Reach Top 0
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
});
