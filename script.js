window.addEventListener("resize", (e) => {
  const burgerContent = document.querySelector("#burger-content");

  if (window.innerWidth >= 1024) {
    burgerContent.open = true;
  } else {
    burgerContent.open = false;
  }
});

window.addEventListener("DOMContentLoaded", (e) => {
  const burgerContent = document.querySelector("#burger-content");

  if (window.innerWidth >= 1024) {
    burgerContent.open = true;
  } else {
    burgerContent.open = false;
  }
});
