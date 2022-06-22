document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#toggle-menu-button"),
    menu = document.querySelector("#toggle-menu"),
    open = document.querySelector("#open"),
    close = document.querySelector("#close"),
    nav = document.querySelector("#nav");

  function mobileViewUpdate() {
    const viewportWidth = document.querySelector(window).width();
    if (viewportWidth < 600) {
      document.querySelector(".navbar.fixed-top").classList.toggle("mobile");
    }
  }

  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    open.classList.toggle("hidden");
    close.classList.toggle("hidden");
    nav.classList.toggle("mix-blend-difference");
  });

  document.querySelector(window).addEventListener("load", mobileViewUpdate);
  document.querySelector(window).addEventListener("resize", mobileViewUpdate);
});
