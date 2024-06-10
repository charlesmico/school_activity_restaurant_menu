// Cursor
var cursorDot = document.querySelector(".cursor-dot");
var cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", function (e) {
  var positionX = e.clientX;
  var positionY = e.clientY;

  cursorDot.style.left = `${positionX}px`;
  cursorDot.style.top = `${positionY}px`;

  cursorOutline.animate(
    {
      left: `${positionX}px`,
      top: `${positionY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

// Scroll Reveal
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1000,
  delay: 100,
  reset: true,
});

scrollReveal.reveal(
  ".logo, .icon, .header-txt, .home-info, .viewMenu-btn, .home-img",
  {}
);
scrollReveal.reveal(".single-content", {});

// Modal
const section = document.querySelector("section"),
  overlay = document.querySelector(".overlay"),
  showBtn = document.querySelector(".show-modal"),
  closeBtn = document.querySelector(".close-btn");

showBtn.addEventListener("click", () => section.classList.add("active"));

overlay.addEventListener("click", () => section.classList.remove("active"));

closeBtn.addEventListener("click", () => section.classList.remove("active"));
