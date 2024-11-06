function isEmailValid(email) {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

function isPasswordValid(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
  return passwordRegex.test(password);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login_form");
  form.addEventListener("submit", (event) => {
    var notyf = new Notyf();
    event.preventDefault();
    const email = form.querySelector("#email");
    const password = form.querySelector("#password");
    if (!isEmailValid(email.value)) {
      email.style.borderColor = "red";
      notyf.error("Invalid Email");
      return;
    }

    if (!isPasswordValid(password.value)) {
      password.style.borderColor = "red";

      notyf.error("Invalid Password");
      return;
    }
    notyf.success("Success");
    setTimeout(() => {
      form.submit();
    }, 1000);
  });
});
