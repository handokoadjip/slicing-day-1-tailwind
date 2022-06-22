document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#toggle-menu-button"),
    menu = document.querySelector("#toggle-menu"),
    open = document.querySelector("#open"),
    close = document.querySelector("#close"),
    nav = document.querySelector("#nav");

  function mobileViewUpdate() {
    const viewportWidth = window.screen.width;
    viewportWidth <= 768
      ? nav.classList.add("mobile")
      : nav.classList.remove("mobile");
  }

  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    open.classList.toggle("hidden");
    close.classList.toggle("hidden");
    nav.classList.toggle("mix-blend-difference");
  });

  window.addEventListener("load", mobileViewUpdate);
  window.addEventListener("resize", mobileViewUpdate);

  mobileViewUpdate();
});
