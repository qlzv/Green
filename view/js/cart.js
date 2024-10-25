document.addEventListener("DOMContentLoaded", () => {
  const edit_quantity = document.querySelectorAll(".edit-quantity a");
  edit_quantity.forEach((key, index) => {
    key.addEventListener("click", () => {
      const what = key.textContent;
      if (what === "+") {
        const element = key.parentElement.querySelector("strong");
        if (parseInt(element.textContent) < 5) {
          element.textContent++;
        } else {
          alert("Can't Add More");
        }
      } else if (what === "-") {
        const element = key.parentElement.querySelector("strong");
        if (parseInt(element.textContent) > 0) {
          element.textContent--;
        }
        if (element.textContent === "0") {
          key.parentElement.parentElement.remove();
        }
      }
    });
  });

  const close = document.querySelectorAll(".close");
  close.forEach((key, index) => {
    key.addEventListener("click", () => {
      key.parentElement.parentElement.parentElement.remove();
    });
  });
});
