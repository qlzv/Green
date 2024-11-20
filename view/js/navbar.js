document.addEventListener("DOMContentLoaded", () => {
  let isMobile =
    (window.innerWidth > 0 ? window.innerWidth : screen.width) <= 992;
  changeNav(isMobile);

  window.onresize = function (e) {
    let newWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
    let isMobile = newWidth <= 992;
    changeNav(isMobile);
  };
});

const changeNav = (isMobile) => {
  const cart = document.querySelector("#cart");
  const nav = document.querySelector(".navbar-nav");
  if (isMobile) {
    cart.innerHTML = "";
    if (!nav.querySelector(".nav-item-cart")) {
      nav.insertAdjacentHTML(
        "beforeend",
        `<li class="nav-item nav-item-cart">
  <a class="nav-link" aria-current="page" href="/cart">Cart</a>
  </li>`
      );
    }
  } else {
    const cartItem = nav.querySelector(".nav-item-cart");
    if (cartItem) {
      cartItem.remove();
    }
    cart.innerHTML = `<a href="/cart">
  <i class="bi bi-cart2"></i>
  </a>`;
  }
};
